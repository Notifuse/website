const { onRequest } = require("firebase-functions/v2/https")
const { defineSecret } = require("firebase-functions/params")

// Postmark server token, set with:
//   firebase functions:secrets:set POSTMARK_SERVER_TOKEN
const postmarkToken = defineSecret("POSTMARK_SERVER_TOKEN")

const DESTINATION = "pierre@notifuse.com"
const FROM = "hello@notifuse.com"

const clean = (v, max) =>
  typeof v === "string" ? v.trim().slice(0, max) : ""

exports.customForm = onRequest(
  {
    region: "europe-west1",
    secrets: [postmarkToken],
    cors: ["https://notifuse.com", "https://www.notifuse.com"],
  },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({ error: "method not allowed" })
      return
    }
    const body = req.body || {}

    // Honeypot: bots fill the hidden "website" field. Answer 200 and
    // drop the submission, so the bot believes it succeeded.
    if (clean(body.website, 200)) {
      res.status(200).json({ ok: true })
      return
    }

    const organisation = clean(body.organisation, 120)
    const name = clean(body.name, 120)
    const email = clean(body.email, 120)
    const segment = clean(body.segment, 60)
    const workspaces = clean(body.workspaces, 20)
    const hosting = clean(body.hosting, 60)
    const message = clean(body.message, 4000)

    if (!organisation || !name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ error: "missing or invalid fields" })
      return
    }

    const text = [
      `Organisation: ${organisation}`,
      `Contact: ${name} <${email}>`,
      `Email: ${email}`,
      `Segment: ${segment || "-"}`,
      `Workspaces: ${workspaces || "-"}`,
      `Hébergement / Hosting: ${hosting || "-"}`,
      "",
      message,
    ].join("\n")

    try {
      const pm = await fetch("https://api.postmarkapp.com/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Postmark-Server-Token": postmarkToken.value(),
        },
        body: JSON.stringify({
          From: FROM,
          To: DESTINATION,
          ReplyTo: email,
          Subject: `Custom licence — ${organisation}`,
          TextBody: text,
          MessageStream: "outbound",
        }),
      })
      if (!pm.ok) {
        console.error("Postmark error", pm.status, await pm.text())
        res.status(502).json({ error: "email provider error" })
        return
      }
    } catch (err) {
      console.error("Postmark request failed", err)
      res.status(502).json({ error: "email provider unreachable" })
      return
    }

    res.status(200).json({ ok: true })
  },
)
