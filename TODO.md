# Repositionnement enterprise — pages à faire

Contrat validé : homepage de synthèse (réseaux multi-entités, secteur public,
industries régulées), licences self-hosted en avant, Cloud en option
secondaire. Ni pilote, ni témoignage : la confiance repose sur la démo, le
déploiement gratuit, la documentation et l'activité GitHub datée.

## Étape 1 — Fondations (terminée, build vérifié le 2026-10-24)

- [x] Fichier TODO créé
- [x] Corriger « five » → six capacités sous licence (EN + FR, depuis la source centralisée)
- [x] Quantifier ou retirer le « SLA guarantee » Cloud non chiffré (EN + FR)
- [x] Navigation : menu « Solutions » (ancres homepage en attendant les landings)
- [x] Homepage EN/FR : nouveau hero « sur votre infrastructure, sous votre contrôle »
- [x] Homepage : CTA démo en principal, licences en secondaire, lien Cloud discret
- [x] Homepage : bandeau confiance GitHub daté (releases, couverture, A+, advisories)
- [x] Homepage : section segments à égalité + section déploiement (installer gratuitement)
- [x] Homepage : section support alignée sur les licences payantes
- [x] Page tarifs EN/FR : licences au-dessus, Cloud en bandeau secondaire
- [x] Pages licences self-hosted EN/FR : section Custom + section support

## Étape 2 — Confiance et segments (pages à créer)

- [x] `/security` + `/fr/securite` — Sécurité & conformité (factuel uniquement) : processus de divulgation inclus
      inclure le processus de divulgation du repo (accusé de réception sous 3 jours
      ouvrés, première évaluation sous 10 jours ouvrés, divulgation coordonnée,
      correctifs sur la dernière version — SECURITY.md)
- [x] Landing réseaux multi-entités (EN + FR) — `/networks`, `/fr/reseaux`
- [x] Landing secteur public (EN + FR) — `/public-sector`, `/fr/secteur-public`, Chorus Pro en FR uniquement
- [x] Landing industries régulées (EN + FR) — santé avec formulation HDS stricte
      `/regulated-industries`, `/fr/industries-regulees` : aucune certification
      revendiquée pour le logiciel, hébergement HDS = périmètre de l'hébergeur
      (build vérifié le 2026-10-24)
- [x] Remplacer les ancres du menu Solutions par ces URLs
- [x] Liens segments depuis le pied de page

## Étape 3 — Formulaire Custom

- [x] Formulaire court intégré (organisation, segment, workspaces, hébergement, message)
      Composant `CustomForm` EN + FR dans les sections Custom des pages licences
      (+ email professionnel, indispensable pour répondre)
- [x] Cloud Function Firebase (créée dans ce chantier) → email via API Postmark
      `functions/` : `customForm`, europe-west1, destination pierre@notifuse.com,
      émetteur hello@notifuse.com. Testée en émulateur (405/400/honeypot 200/envoi
      réel rejeté par Postmark faute de vrai token). Non déployée : voir ci-dessous.
- [x] Anti-spam minimal, clé Postmark en secret d'environnement
      Secret défini par Pierre, fonction + hosting déployés le 2026-10-24
      (europe-west1). Tests réels sur notifuse.web.app et www.notifuse.com :
      GET 405, invalide 400, honeypot 200, envoi valide 200 (email de test
      reçu via Postmark).
- [x] Vérifier plan Firebase et région de la fonction (Europe de préférence)
      Projet `notifuse` (fonctions v2 existantes, plan Blaze effectif),
      fonction en europe-west1 (Belgique), APIs activées le 2026-10-24.

## Avant publication

- [ ] Porter la couverture de tests au-delà de 90 % avant la mise en production
      (83,36 % sur Codecov au 2026-10-23). Les homepages affichent déjà « >90% » :
      vérifier le chiffre sur Codecov avant de pousser en prod.

## Hors périmètre

Pages `/compare/` inchangées. Pas de page `/enterprise`. Pas de Typeform.
Pas de certification promise. Pas d'audit RGAA.
