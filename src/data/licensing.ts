/**
 * The one place this site says what Notifuse's licence is, and what a licence buys.
 *
 * Every page that mentions the licence reads from here — "AGPL" appeared in 76 places across
 * 20 pages before this existed, and seventy-six edits made under launch-day pressure is how a
 * comparison page ends up still claiming the old licence a week later, on the pages whose
 * entire value is being trusted about exactly this.
 *
 * There is deliberately NO switch between a pre-v40 and a post-v40 state. The whole site is
 * written for v40, and the switch is the production deploy — one push, made by hand, on the
 * day the LICENSE commit lands. A boolean would only be a second place for the two to
 * disagree.
 */

/** The version the licensed capabilities arrive with. */
export const LICENSED_FROM_VERSION = "v40";

export type Lang = "en" | "fr";

/**
 * How the licence is named in a table cell, in a sentence, and in running prose.
 *
 * DECISION, 2026-09-04: Notifuse keeps calling itself open source. The wording below is how
 * that is done defensibly, and the difference is not cosmetic.
 *
 * The fact it has to survive: BSL 1.1 converts EACH RELEASE to AGPL-3.0 four years after that
 * release ships. A version four years old is open source; the one you download today is not,
 * because the OSI definition admits no restriction on use and the Additional Use Grant is one
 * — and the licence's own Notice section says, verbatim, that it "is not an Open Source
 * license", while its next sentence says the work "will eventually be made available under an
 * Open Source License". The second sentence is the one this wording rests on.
 *
 * So the word is never used alone: every form below carries the mechanism that makes it true.
 * "Open source on a delay — BSL 1.1, AGPL-3.0 after 4 years" survives being challenged by
 * someone holding the LICENSE file. A bare "Notifuse is open source" does not.
 *
 * Do not shorten these strings to the bare word. That is the whole point of them.
 */
export const licenceIdentity = {
  en: {
    short: "BSL 1.1 → AGPL-3.0",
    table: "Open source on a delay — BSL 1.1, AGPL-3.0 after 4 years",
    sentence:
      "open source on a delay: every release is published under BSL 1.1 and becomes AGPL-3.0 four years later",
    inline: "open source on a delay (BSL 1.1 → AGPL-3.0)",
  },
  fr: {
    short: "BSL 1.1 → AGPL-3.0",
    table: "Open source en différé — BSL 1.1, AGPL-3.0 après 4 ans",
    sentence:
      "open source en différé : chaque version est publiée sous BSL 1.1 et devient AGPL-3.0 quatre ans plus tard",
    inline: "open source en différé (BSL 1.1 → AGPL-3.0)",
  },
} as const;

export function licence(lang: Lang) {
  return licenceIdentity[lang];
}

/**
 * What self-hosting costs.
 *
 * "All features included" and "forever free" are gone, and that is independent of what the
 * licence is called: five capabilities need a key, so both phrases became false whatever word
 * describes the licence. Everything else stays free, and saying so plainly is worth more than
 * a superlative that can be checked and disproved in ten minutes with an instance.
 */
export const selfHostBlurb = {
  en: "Free to run and free to self-host, with no per-email, per-contact or per-seat fee, ever. Five capabilities need a licence key; everything else does not.",
  fr: "Gratuit à exécuter et à auto-héberger, sans frais par email, par contact ni par siège, jamais. Cinq capacités demandent une clé de licence ; tout le reste, non.",
} as const;

export function selfHost(lang: Lang) {
  return selfHostBlurb[lang];
}

/**
 * The five licensed capabilities, in the order the Additional Use Grant lists them.
 *
 * This list is the product boundary. It must say exactly what the software refuses and nothing
 * more — every entry corresponds to a gate that exists in the shipped binary. `audit_logs` is
 * deliberately absent: Enterprise keys carry it so nothing has to be re-issued the day it
 * ships, but a capability that exists in no release cannot be one you are refused.
 */
export const licensedCapabilities = {
  en: [
    {
      title: "More than three workspaces",
      body: "Creating a fourth workspace on one deployment. Nothing is done to the workspaces you already have — an installation holding eight keeps all eight and simply cannot create a ninth.",
      refusedAt: "Creating a workspace",
    },
    {
      title: "Granular permissions",
      body: "Writing a permission set that is not full access: setting a member's permissions, inviting a member with a restricted set, or creating an API key with a restricted scope. Permissions already granted stay enforced in every licence state — the authorization engine never consults the licence — and removing a member is always allowed, because that is what revokes a leaked API key.",
      refusedAt: "Saving permissions, inviting with a restricted set, creating a scoped API key",
    },
    {
      title: "Amazon SES tenant isolation",
      body: "Provisioning a new SES tenant. A tenant provisioned earlier keeps sending through its own reputation forever after: the send path contains no licence check of any kind.",
      refusedAt: "Enabling tenant isolation on an SES integration",
    },
    {
      title: "Template translations",
      body: "Adding a language to a template, or editing the content of one already there. Translations already saved keep being sent in every licence state, editing the rest of a template that carries them is never refused, and removing one is always allowed.",
      refusedAt: "Saving a template that adds or changes a translation",
    },
    {
      title: "Single sign-on (OpenID Connect)",
      body: "Signing in through SSO. Without a licence that covers it the SSO button is not offered, and everyone signs in with a login code instead — nobody is locked out, and sessions already open are unaffected.",
      refusedAt: "The sign-in page stops offering the SSO button",
    },
  ],
  fr: [
    {
      title: "Plus de trois workspaces",
      body: "Créer un quatrième workspace sur un déploiement. Rien n'est fait à ceux que vous avez déjà — une installation qui en détient huit les garde tous les huit et ne peut simplement pas en créer un neuvième.",
      refusedAt: "À la création d'un workspace",
    },
    {
      title: "Permissions granulaires",
      body: "Écrire un jeu de permissions autre que l'accès complet : définir les permissions d'un membre, inviter avec un jeu restreint, ou créer une clé API à scope restreint. Les permissions déjà accordées restent appliquées dans tout état de licence — le moteur d'autorisation ne consulte jamais la licence — et retirer un membre est toujours possible, parce que c'est ce qui révoque une clé fuitée.",
      refusedAt: "À l'enregistrement des permissions, à l'invitation restreinte, à la création d'une clé à scope",
    },
    {
      title: "Isolation de tenant Amazon SES",
      body: "Provisionner un nouveau tenant SES. Un tenant provisionné avant garde sa propre réputation d'envoi pour toujours : le chemin d'envoi ne contient aucune vérification de licence, d'aucune sorte.",
      refusedAt: "À l'activation de l'isolation sur une intégration SES",
    },
    {
      title: "Traductions de templates",
      body: "Ajouter une langue à un template, ou modifier le contenu d'une langue déjà présente. Les traductions déjà enregistrées continuent d'être envoyées dans tout état de licence, modifier le reste d'un template qui en porte n'est jamais refusé, et en supprimer une est toujours possible.",
      refusedAt: "À l'enregistrement d'un template qui ajoute ou modifie une traduction",
    },
    {
      title: "Authentification unique (OpenID Connect)",
      body: "Se connecter en SSO. Sans licence qui le couvre, le bouton SSO n'est pas proposé et chacun se connecte avec un code de connexion — personne n'est enfermé dehors, et les sessions ouvertes ne sont pas interrompues.",
      refusedAt: "La page de connexion cesse de proposer le bouton SSO",
    },
  ],
} as const;

/**
 * What a licence never covers, and never will.
 *
 * This is the reason the page is worth publishing. A list of what you must pay for is a price
 * list; a list of what you will never be asked to pay for is a commitment, and it is only a
 * commitment if it is dated, versioned and hard to walk back.
 *
 * THE ADMISSION RULE, and the only thing that keeps this list worth reading: an entry belongs
 * here if it promises there will never be a METER, a LOCK-IN, or a licence retraction. It does
 * not belong here if it merely describes what the product does.
 *
 * This list held seventeen entries until 2026-09-04. Nine of them — "Broadcasts in full", "the
 * whole transactional API", "every AI assistant", the Zapier connector, the blog CMS, the S3
 * file manager — were a feature tour wearing a commitment's clothes, and they cost twice over.
 * They diluted: seventeen two-line bullets in a two-column grid is a wall, and a wall is
 * skimmed, while eight are read by the sceptic the section exists for. And they bound: the
 * paragraph above the list promises 90 days' notice before anything leaves it, which had
 * quietly pledged never to monetise the blog CMS or the S3 file manager — plausible licensed
 * capabilities in 2029. A commitment you cannot hold for years devalues the ones you can.
 *
 * The nine were not deleted from the site; they are what the comparison pages already say, in
 * the place where a feature claim belongs.
 *
 * What survived is eight promises about metering, lock-in and licence, each falsifiable in ten
 * minutes against a running instance. Adding a ninth means asking: could this still be true in
 * 2032, after a funding round and a bad quarter? If not, it is not a commitment.
 */
export const neverLicensed = {
  en: [
    "No per-email fee, ever. No sending cap, no throughput tier, no volume meter.",
    "No contact meter: unlimited stored contacts, active contacts, timeline events, custom events and pageviews, with no retention expiry when you self-host.",
    "Unlimited team members, invitations and user accounts. No seat cap, in any build, at any size.",
    "Permissions already granted stay enforced in every licence state, and removing a member is always allowed.",
    "Three workspaces on every installation, each with its own isolated PostgreSQL database. The isolation architecture itself is never licensed — only the count beyond three.",
    "Login-code sign-in always works, on every installation, licensed or not, and no session in progress is ever ended.",
    "Full read and export of your data, at any time. The application never blocks a read, never deletes a row, and never stops a transactional email or a broadcast in flight.",
    "Every release becomes AGPL-3.0-or-later four years after it ships, on a clock that runs per version.",
  ],
  fr: [
    "Aucun frais par email, jamais. Aucun plafond d'envoi, aucun palier de débit, aucun compteur de volume.",
    "Aucun compteur de contacts : contacts stockés, contacts actifs, événements de timeline, événements personnalisés et pages vues illimités, sans expiration de rétention en auto-hébergé.",
    "Membres d'équipe, invitations et comptes utilisateurs illimités. Aucun plafond de sièges, dans aucune build, à aucune taille.",
    "Les permissions déjà accordées restent appliquées dans tout état de licence, et retirer un membre est toujours possible.",
    "Trois workspaces sur chaque installation, chacun avec sa base PostgreSQL isolée. L'architecture d'isolation elle-même n'est jamais licenciée — seul le compte au-delà de trois l'est.",
    "La connexion par code magique fonctionne toujours, sur toute installation, licenciée ou non, et aucune session en cours n'est jamais interrompue.",
    "Lecture et export complets de vos données, à tout moment. L'application ne bloque jamais une lecture, ne supprime jamais une ligne, et n'arrête jamais un email transactionnel ni un broadcast en cours.",
    "Chaque version devient AGPL-3.0-or-later quatre ans après sa sortie, sur une horloge qui court par version.",
  ],
} as const;

/**
 * Which tier carries the "Most chosen" badge, the accent border and the solid buy button.
 *
 * One constant rather than a string literal, because the three effects are asserted in six
 * places across the English and French pages. Moved from `agency` to `studio` on 2026-09-04:
 * a badge repeated in one language and not the other is the exact failure this file exists to
 * prevent, and "most chosen" is a factual claim, so it must move as one edit or not at all.
 */
export const highlightedTier = "studio";

/**
 * The self-hosted licence tiers.
 *
 * Annual, in US dollars, to match the Cloud grid: two currencies on one site make the
 * licence-versus-Cloud comparison unreadable, because the ratio would move with the exchange
 * rate. Mirrors cloud/billing-api/src/licences/licence-tiers.ts, which is what the key
 * actually carries — if the two ever disagree, that file is right and this one is wrong.
 *
 * `buyUrl` is a Stripe Payment Link, and it is the ONE thing on this page that can fail
 * silently in a way nobody notices. The webhook recognises a purchase as a licence purchase by
 * its PRICE ID and nothing else (buildLicencePriceToTierMap): a link built on the wrong price
 * is not refused anywhere — Stripe takes the money, the event falls through to the Cloud tenant
 * handlers, finds no tenant_id, returns quietly, and no key is ever minted. The customer is
 * charged and receives nothing, and no dashboard shows an error.
 *
 * So each link below must be built on the price id in the matching STRIPE_LICENCE_*_ANNUAL_
 * PRICE_ID. That cannot be checked from this repository — a Payment Link URL does not carry its
 * price — so it is checked once, in test mode, per link, before launch.
 */
export const selfHostTiers = [
  {
    id: "studio",
    buyUrl: "https://buy.stripe.com/6oUaEMfpk6Zu8IWc0U9R600",
    name: "Studio",
    annualUsd: 290,
    workspaces: 5,
    capabilities: ["rbac", "ses_tenant", "template_i18n"],
    forWhom: {
      en: "One company, a few brands, a team that needs permission control.",
      fr: "Une entreprise, quelques marques, une équipe qui a besoin de gérer les permissions.",
    },
  },
  {
    id: "agency",
    buyUrl: "https://buy.stripe.com/7sY5ksgtofw0e3ge929R601",
    name: "Agency",
    annualUsd: 890,
    workspaces: 15,
    capabilities: ["rbac", "ses_tenant", "template_i18n"],
    forWhom: {
      en: "One workspace per client, each with its own isolated database.",
      fr: "Un workspace par client, chacun avec sa base isolée.",
    },
  },
  {
    id: "enterprise",
    buyUrl: "https://buy.stripe.com/5kQ9AI6SOcjO8IW1mg9R602",
    name: "Enterprise",
    annualUsd: 1990,
    workspaces: 15,
    capabilities: ["rbac", "ses_tenant", "template_i18n", "sso"],
    forWhom: {
      en: "Everything above, plus single sign-on through your identity provider.",
      fr: "Tout ce qui précède, plus l'authentification unique via votre fournisseur d'identité.",
    },
  },
] as const;

/** Row labels for the tier grid, keyed to the capability ids above. */
export const capabilityLabels = {
  en: {
    workspaces: "Workspaces",
    rbac: "Granular permissions",
    ses_tenant: "Amazon SES tenant isolation",
    template_i18n: "Template translations",
    sso: "Single sign-on (OIDC)",
  },
  fr: {
    workspaces: "Workspaces",
    rbac: "Permissions granulaires",
    ses_tenant: "Isolation de tenant Amazon SES",
    template_i18n: "Traductions de templates",
    sso: "Authentification unique (OIDC)",
  },
} as const;
