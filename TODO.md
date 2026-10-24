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
- [ ] Landing réseaux multi-entités (EN + FR)
- [ ] Landing secteur public (EN + FR) — devis, bon de commande, Chorus Pro
- [ ] Landing industries régulées (EN + FR) — santé avec formulation HDS stricte
- [ ] Remplacer les ancres du menu Solutions par ces URLs
- [ ] Liens segments depuis le pied de page

## Étape 3 — Formulaire Custom

- [ ] Formulaire court intégré (organisation, segment, workspaces, hébergement, message)
- [ ] Cloud Function Firebase (créée dans ce chantier) → email via API Postmark
- [ ] Anti-spam minimal, clé Postmark en secret d'environnement
- [ ] Vérifier plan Firebase et région de la fonction (Europe de préférence)

## Avant publication

- [ ] Porter la couverture de tests au-delà de 90 % avant la mise en production
      (83,36 % sur Codecov au 2026-10-23). Les homepages affichent déjà « >90% » :
      vérifier le chiffre sur Codecov avant de pousser en prod.

## Hors périmètre

Pages `/compare/` inchangées. Pas de page `/enterprise`. Pas de Typeform.
Pas de certification promise. Pas d'audit RGAA.
