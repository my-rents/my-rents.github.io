import type { BlogArticle, BlogSectionContent } from '../blogContent'

export const frenchBlogArticles: BlogArticle[] = [
  {
    slug: 'organize-rental-property-receipts-tax-season',
    title: 'Comment organiser les justificatifs de vos locations pour la déclaration fiscale',
    readingTime: '5 min de lecture',
    date: '18 mars 2026',
    category: 'Fiscalité & Finances',
    excerpt:
      'Découvrez comment les propriétaires indépendants classent leurs factures, organisent leurs déductions fiscales et évitent les erreurs de tableur au moment des impôts.',
    content: {
      lead: 'Pour les bailleurs indépendants, la déclaration fiscale rime souvent avec un week-end chaotique à fouiller les boîtes à gants, les tiroirs, les relevés bancaires et les e-mails pour reconstituer douze mois de charges locatives. Assurer un suivi numérique au fil de l’eau transforme la déclaration en un contrôle rapide de 15 minutes au lieu d’un casse-tête épuisant.',
      subheadings: [
        {
          title: '1. Pourquoi le mélange des comptes et les tickets papier créent un piège fiscal',
          paragraphs: [
            'L’erreur la plus fréquente des bailleurs particuliers est de régler des fournitures, des dépannages de plomberie d’urgence ou des appareils électroménagers avec leur carte personnelle ou en espèces sans archiver immédiatement la facture.',
            'Les reçus sur papier thermique s’effacent en quelques mois sous l’effet de la chaleur et de la lumière. En cas de contrôle fiscal, des quittances illisibles ou des débits sans justificatif peuvent entraîner le rejet des déductions et des pénalités. La règle d’or : numérisez chaque ticket à l’instant où vous le recevez.',
          ],
          takeaways: [
            'Ne conservez jamais un reçu papier sans le numériser dans les 24 heures.',
            'Séparez clairement les loyers et dépenses locatives de vos comptes personnels.',
            'Photographiez les factures dès le passage en caisse ou sur le chantier.',
          ],
        },
        {
          title: '2. Les 5 grandes catégories de charges locatives à suivre',
          paragraphs: [
            'Répartir vos dépenses dans des catégories standardisées évite les oublis et garantit que vous déduisiez toutes les charges autorisées :',
            'Réparations et entretien : Entretien courant comme un robinet défectueux, le nettoyage des gouttières ou un rafraîchissement de peinture. Déductibles l’année de leur paiement.',
            'Améliorations et travaux majeurs : Rénovation de toiture ou réfection d’une cuisine, qui doivent le plus souvent être amorties sur plusieurs exercices.',
            'Taxes foncières et assurances : Assurance propriétaire non occupant (PNO), assurance loyers impayés et taxe foncière.',
            'Frais de gestion et logiciels : Abonnements aux applications de gestion comme My Rents, frais comptables, honoraires juridiques ou frais d’actes.',
            'Intérêts d’emprunt et charges de copropriété : Part d’intérêts du prêt immobilier et charges communes non récupérables.',
          ],
        },
        {
          title: '3. Numérisation mobile : la capture instantanée sur site',
          paragraphs: [
            'Le moyen le plus sûr de ne perdre aucune déduction est de photographier le ticket de caisse directement dans votre application de gestion au moment de payer.',
            'En reliant immédiatement la photo au logement concerné, vous ne vous demanderez plus six mois plus tard à quel appartement correspondait ce raccord de plomberie.',
          ],
        },
        {
          title: '4. Ce que votre expert-comptable ou logiciel fiscal attend réellement',
          paragraphs: [
            'Votre comptable ne souhaite pas recevoir une boîte de reçus froissés. Il a besoin d’un récapitulatif net au format PDF ou tableur, ventilé par bien, avec les déductions ordonnées et les justificatifs attachés.',
            'Une solution tout-en-un comme My Rents vous permet d’exporter un bilan financier annuel complet en un seul clic.',
          ],
        },
      ],
      summaryBox: {
        title: 'Conseil clé pour les propriétaires',
        text: 'Un suivi mobile en temps réel fait gagner en moyenne 14 heures lors de la déclaration d’impôts et préserve des milliers d’euros de charges déductibles.',
      },
    },
  },
  {
    slug: 'landlord-lease-renewals-rent-increase-guide',
    title: 'Renouvellement de bail et révision de loyer : le guide pour les propriétaires',
    readingTime: '6 min de lecture',
    date: '14 mars 2026',
    category: 'Gestion des baux',
    excerpt:
      'Guide pratique pour anticiper les échéances de bail, calculer les révisions de loyer, respecter les délais de préavis et fidéliser de bons locataires.',
    content: {
      lead: 'Conserver des locataires sérieux, respectueux du logement et à jour de leurs paiements est essentiel à la rentabilité locative. Pourtant, aborder l’échéance du bail ou la révision du loyer est souvent perçu comme délicat. Avec une méthode structurée et un dialogue transparent, cette étape devient une formalité sereine.',
      subheadings: [
        {
          title: '1. Le calendrier 90-60-30 jours avant l’échéance',
          paragraphs: [
            'La reconduction sereine d’un bail se prépare bien avant le dernier mois de location. Une planification rigoureuse donne à chacun le temps de s’organiser :',
            '90 jours avant : Analysez l’évolution de vos charges (taxe foncière, assurances, entretien) et étudiez les loyers pratiqués sur le marché local.',
            '60 jours avant : Adressez au locataire une proposition formelle précisant les conditions, la durée renouvelée et l’éventuelle révision de loyer, avec un délai de réponse de 30 jours.',
            '30 jours avant : Signez l’avenant ou le nouveau bail. Si le locataire quitte les lieux, vous disposez d’un délai suffisant pour publier l’annonce et organiser les visites afin d’éviter la vacance.',
          ],
        },
        {
          title: '2. Ajustement raisonnable du loyer vs coût de la vacance locative',
          paragraphs: [
            'Une erreur classique chez les bailleurs débutants est d’augmenter le loyer au plafond absolu, risquant de faire fuir un locataire modèle. Calculez le coût réel d’un départ :',
            'La relocation coûte généralement entre 1 500 € et 4 000 € en manque à gagner, ménage approfondi, serrures, rafraîchissements et frais d’annonce. Une hausse de 40 €/mois (480 €/an) est anéantie par un seul mois de vacance.',
            'Lors d’une révision, justifiez l’ajustement (indice officiel des loyers, inflation des charges) et accordez un léger avantage de prix aux locataires qui prennent soin de votre bien.',
          ],
          takeaways: [
            'Évaluez l’impact financier d’un mois de logement vacant avant toute révision.',
            'Un locataire fiable payant 3 à 5 % sous le prix haut du marché est souvent plus rentable qu’un nouvel entrant inconnu.',
            'Respectez scrupuleusement les règles locales d’encadrement des loyers et indices de révision.',
          ],
        },
        {
          title: '3. Conformité juridique : préavis et encadrement des loyers',
          paragraphs: [
            'De nombreuses réglementations fixent des délais de préavis stricts (souvent 1 à 3 mois) et plafonnent les hausses autorisées selon des indices officiels.',
            'Renseignez-vous toujours sur les textes applicables dans votre commune. Une notification transmise avec horodatage via un portail locataire garantit une traçabilité incontestable.',
          ],
        },
        {
          title: '4. Centraliser contrats et alertes en un lieu unique',
          paragraphs: [
            'Multiplier les rappels sur des calendriers distincts entraîne des oublis de dates de renouvellement. Lorsqu’un bail est reconduit tacitement sans anticipation, le propriétaire perd en visibilité.',
            'Une application dédiée vous alerte bien avant la date limite et garde le contrat signé toujours accessible sur votre téléphone.',
          ],
        },
      ],
      summaryBox: {
        title: 'Conseil clé pour les propriétaires',
        text: 'Anticiper les renouvellements 60 jours à l’avance préserve une excellente relation avec vos locataires, supprime le risque de vacance et garantit des revenus réguliers.',
      },
    },
  },
  {
    slug: 'spreadsheets-vs-landlord-app-why-spreadsheets-fail',
    title: 'Pourquoi Excel et les tableurs pénalisent les propriétaires en 2026',
    readingTime: '4 min de lecture',
    date: '8 mars 2026',
    category: 'Technologie & Efficacité',
    excerpt:
      'Pourquoi gérer vos biens locatifs sur Excel ou Google Sheets entraîne des retards de paiement, des formules erronées et des heures perdues.',
    content: {
      lead: 'Presque tous les propriétaires bailleurs débutent avec un tableur. L’outil est familier, gratuit et personnalisable. Mais dès qu’arrive un deuxième contrat, un dépôt de garantie à restituer, une facture d’artisan ou une relance d’impayé, les feuilles de calcul montrent de lourdes limites.',
      subheadings: [
        {
          title: '1. Le piège du bureau : la gestion locative se vit sur le terrain',
          paragraphs: [
            'On ne gère pas ses appartements assis confortablement devant un double écran. On les gère devant l’immeuble après le passage du plombier, dans sa voiture après une alerte bancaire ou lors d’un appel urgent d’un locataire.',
            'Manipuler un fichier Excel ou Google Sheets complexe sur smartphone est fastidieux et source d’erreurs. Comme la saisie mobile est pénible, on repousse l’enregistrement, ce qui conduit à l’oubli de factures.',
          ],
        },
        {
          title: '2. Fragilité des formules et écrasement involontaire des données',
          paragraphs: [
            'Les tableurs reposent sur des cellules sensibles, des formules SOMME et des liaisons entre onglets. Une frappe malencontreuse ou une ligne supprimée peut fausser silencieusement le résultat financier de l’année entière sans aucune alerte.',
            'Contrairement aux bases de données structurées, les tableurs ne disposent pas de contrôles de cohérence stricts pour empêcher les doublons ou dates invalides.',
          ],
          takeaways: [
            'Les tableurs manquent de validation automatique des données et d’historique d’audit.',
            'Une ligne effacée par inadvertance corrompt les totaux annuels sans avertissement.',
            'Éditer des formules complexes depuis un téléphone engendre fréquemment des corruptions de données.',
          ],
        },
        {
          title: '3. Ce qu’une application dédiée apporte et qu’un tableur n’offrira jamais',
          paragraphs: [
            'Les applications modernes comme My Rents s’articulent autour de données relationnelles : un immeuble contient des logements ; un logement a des baux ; un bail lie des locataires, des échéances et des dépenses.',
            'Cette architecture permet des automatisations immédiates impossibles sur un tableur sans des dizaines d’heures de scripts :',
            'Alertes automatiques dès qu’un loyer n’est pas encaissé après l’échéance convenue.',
            'Justificatifs photographiques liés directement à chaque ligne de dépense.',
            'Fonctionnement hors ligne pour saisir des informations dans des sous-sols sans réseau.',
            'Portails locataires sécurisés permettant à chacun de consulter quittances et contrats.',
          ],
        },
      ],
      summaryBox: {
        title: 'Conseil clé pour les propriétaires',
        text: 'Remplacer un tableur manuel par une application pensée pour les bailleurs fait gagner 4 à 6 heures par mois tout en supprimant les risques d’erreur de calcul.',
      },
    },
  },
  {
    slug: 'tenant-portal-benefits-small-landlords',
    title: 'Portails locataires : comment l’accès partagé simplifie facturation et échanges',
    readingTime: '5 min de lecture',
    date: '28 février 2026',
    category: 'Gestion opérationnelle',
    excerpt:
      'Comment un espace locataire sécurisé prévient les litiges sur le bail, les charges et les règlements, sans aucune application lourde à installer.',
    content: {
      lead: 'Quand un locataire a une question sur la date de fin de son bail, son dépôt de garantie ou la réception de son dernier virement, que fait-il ? Bien souvent, il envoie un SMS le dimanche soir à 21h. Offrir un espace locataire en libre-service supprime les frictions et valorise votre professionnalisme.',
      subheadings: [
        {
          title: '1. Les limites des logiciels de gestion d’entreprise pour les locataires',
          paragraphs: [
            'Beaucoup de plateformes lourdes imposent aux locataires de créer un compte avec mot de passe complexe ou d’installer une application de 200 Mo juste pour vérifier un document.',
            'Les locataires hésitent à installer une énième application et oublient leurs identifiants en quinze jours. Pour les bailleurs de 1 à 20 logements, un accès web fluide offre une bien meilleure expérience.',
          ],
        },
        {
          title: '2. Le Centre de documents : simplicité sécurisée par code d’accès',
          paragraphs: [
            'My Rents répond à ce besoin avec le Centre de documents. Chaque bail peut générer un lien chiffré protégé par un code d’accès défini par le propriétaire.',
            'Le locataire ouvre le lien sur son smartphone ou son ordinateur et accède instantanément à :',
            'Son contrat de location signé et ses annexes en haute qualité.',
            'L’historique des paiements avec date d’encaissement et solde restant.',
            'Les factures de charges partagées ou de régularisation.',
          ],
          takeaways: [
            'Aucun téléchargement d’application requis : fonctionne sur n’importe quel navigateur.',
            'Codes d’accès personnalisés limitant la consultation au seul bail du locataire.',
            'Fin des messages répétitifs réclamant des doubles de quittances ou de bail.',
          ],
        },
        {
          title: '3. La transparence prévient les désaccords locatifs',
          paragraphs: [
            'Lorsque le bailleur et le locataire disposent d’une visibilité permanente sur le relevé des encaissements et les pièces justificatives, les doutes sont levés immédiatement.',
            'Si une discussion survient pour savoir si le loyer a été versé le 1er ou le 5, le portail fournit un historique objectif et horodaté accessible aux deux parties.',
          ],
        },
      ],
      summaryBox: {
        title: 'Conseil clé pour les propriétaires',
        text: 'Un portail locataire web simple renforce la satisfaction des locataires, assoit votre crédibilité et évite des heures d’échanges inutiles.',
      },
    },
  },
  {
    slug: 'getting-started-diy-landlord-guide',
    title: 'Gérer son premier bien locatif : le guide étape par étape',
    readingTime: '7 min de lecture',
    date: '20 février 2026',
    category: 'Premiers pas',
    excerpt:
      'De l’état des lieux initial aux baux dématérialisés et au suivi des loyers, voici la méthode pas à pas pour louer en toute sérénité.',
    content: {
      lead: 'Faire l’acquisition de son premier investissement locatif constitue une étape financière majeure. Mais une fois l’acte notarié signé, la gestion concrète commence. Adopter des réflexes structurés et outillés dès le premier jour fait toute la différence entre un investissement serein et une charge mentale permanente.',
      subheadings: [
        {
          title: 'Étape 1 : Établir l’état des lieux de référence du logement',
          paragraphs: [
            'Avant de mettre en location, constituez un dossier numérique exhaustif du logement. Prenez des photos datées de chaque pièce, relevez les numéros de série des équipements et repérez les vannes d’arrêt d’eau.',
            'Dans My Rents, configurez la fiche de l’immeuble, précisez s’il compte plusieurs logements et sauvegardez vos artisans de confiance (plombier, électricien) ainsi que vos contacts d’assurance.',
          ],
        },
        {
          title: 'Étape 2 : Sécuriser les baux et le dépôt de garantie',
          paragraphs: [
            'Ne vous fiez jamais à un accord verbal ou à un modèle générique trouvé au hasard sur le web. Utilisez un contrat conforme à la législation en vigueur précisant la date d’exigibilité du loyer, les charges et la répartition des réparations.',
            'Conservez le bail signé numériquement dans l’application pour le retrouver instantanément à tout moment.',
          ],
        },
        {
          title: 'Étape 3 : Instaurer une routine rigoureuse pour les encaissements',
          paragraphs: [
            'Définissez les règles du jeu dès le premier mois : moyen de paiement convenu, date d’échéance et rappels automatiques.',
            'Dès la réception du virement, validez le paiement dans l’application pour émettre la quittance sans délai.',
          ],
          takeaways: [
            'Rédigez toujours un état des lieux d’entrée contradictoire et signé par le locataire.',
            'Conservez le dépôt de garantie sur un compte bancaire dédié.',
            'Enregistrez chaque paiement et dépense le jour même de sa survenance.',
          ],
        },
      ],
      summaryBox: {
        title: 'Conseil clé pour les propriétaires',
        text: 'Une organisation rigoureuse dès le premier mois sécurise votre patrimoine, prévient les litiges coûteux et permet d’agrandir votre parc locatif en toute tranquillité.',
      },
    },
  },
]

export const frenchBlogContent: BlogSectionContent = {
  eyebrow: 'Centre de connaissances pour propriétaires',
  title: 'Guides pratiques et conseils pour propriétaires indépendants',
  description:
    'Conseils d’experts sur la gestion locative, l’optimisation fiscale, le renouvellement des baux, la communication avec les locataires et le développement de votre patrimoine.',
  readMoreLabel: 'Lire le guide complet',
  backToArticlesLabel: 'Retour à tous les articles',
  articles: frenchBlogArticles,
}
