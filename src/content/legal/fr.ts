import type { LegalPage, LegalPageKey } from '../siteContent'

export const frenchLegalPages: Record<LegalPageKey, LegalPage> = {
  terms: {
    eyebrow: "Conditions d'utilisation",
    title: "Conditions d'utilisation de My Rents",
    intro:
      "Les présentes conditions régissent l'utilisation de My Rents, de ce site web et du forum public associé, exploités par Daniel Rodríguez.",
    updatedAt: '11 mars 2026',
    sections: [
      {
        title: 'Éditeur du service',
        paragraphs: [
          'My Rents est une application de gestion locative et un service en ligne proposé par Daniel Rodríguez, développeur indépendant.',
          "Ces conditions s'appliquent à l'application mobile, au présent site et à tous les canaux d'assistance associés.",
        ],
      },
      {
        title: 'Acceptation et éligibilité',
        paragraphs: [
          'En téléchargeant ou en utilisant My Rents, vous acceptez les présentes conditions ainsi que la Politique de confidentialité.',
          "Vous devez être âgé d'au moins 13 ans pour utiliser My Rents.",
        ],
      },
      {
        title: 'Comptes et sécurité',
        paragraphs: [
          'Un compte peut être requis pour accéder à certaines fonctionnalités. Vous êtes responsable du maintien de la confidentialité de vos identifiants.',
          'Veuillez nous signaler rapidement toute utilisation non autorisée de votre compte.',
        ],
      },
      {
        title: 'Services fournis',
        paragraphs: [
          'My Rents permet d’enregistrer et de gérer des biens, baux, charges, quittances, contacts et documents.',
          'My Rents est un outil d’organisation. Vous demeurez responsable de la conformité fiscale et réglementaire de votre activité.',
        ],
      },
      {
        title: 'Achats et abonnements PRO',
        paragraphs: [
          'Certaines fonctionnalités avancées nécessitent un abonnement PRO. La facturation et les renouvellements sont gérés par la plateforme de téléchargement (ex. Google Play).',
        ],
      },
      {
        title: 'Droit applicable et contact',
        paragraphs: [
          'Les présentes conditions sont régies par le droit espagnol, sous réserve des règles impératives de protection des consommateurs de votre pays de résidence.',
          'Pour toute question, contactez-nous à info@myrents-app.com.',
        ],
      },
    ],
  },
  privacy: {
    eyebrow: 'Politique de confidentialité',
    title: 'Politique de confidentialité de My Rents',
    intro:
      'La présente politique détaille le traitement de vos données personnelles lors de l’utilisation de My Rents et de ses services associés.',
    updatedAt: '23 mars 2026',
    sections: [
      {
        title: 'Responsable du traitement',
        paragraphs: [
          'Le responsable de traitement au sens du RGPD est Daniel Rodríguez. Contact : info@myrents-app.com.',
        ],
      },
      {
        title: 'Données collectées et finalités',
        paragraphs: [
          'Nous traitons votre adresse e-mail, vos identifiants de compte ainsi que les données de gestion locative que vous enregistrez (biens, baux, factures, quittances).',
          'Ces données sont exclusivement destinées au fonctionnement de l’application. Aucune donnée n’est vendue ni exploitée à des fins publicitaires.',
        ],
      },
      {
        title: 'Bases légales et droits',
        paragraphs: [
          'Les traitements reposent sur l’exécution du contrat (Art. 6-1-b du RGPD) et l’intérêt légitime (sécurité et maintenance du service).',
          'Vous disposez des droits d’accès, de rectification, d’effacement et de portabilité de vos données personnelles.',
        ],
      },
    ],
  },
  eula: {
    eyebrow: 'Contrat de licence utilisateur final',
    title: 'CLUF pour My Rents',
    intro: 'Ce contrat définit les droits concédés pour l’utilisation du logiciel My Rents.',
    updatedAt: '11 mars 2026',
    sections: [
      {
        title: 'Concession de licence',
        paragraphs: [
          'Daniel Rodríguez vous accorde une licence personnelle, non exclusive et non transférable d’utilisation du logiciel My Rents.',
        ],
      },
      {
        title: 'Propriété intellectuelle',
        paragraphs: [
          'Tous les droits de propriété intellectuelle afférents au logiciel demeurent la propriété exclusive de Daniel Rodríguez.',
        ],
      },
    ],
  },
  dataDeletion: {
    eyebrow: 'Suppression des données',
    title: 'Suppression des données pour My Rents',
    intro:
      'Instructions pour demander la suppression définitive de votre compte et de vos données.',
    updatedAt: '11 mars 2026',
    sections: [
      {
        title: 'Comment demander la suppression',
        paragraphs: [
          'Vous pouvez supprimer votre compte directement dans les paramètres de l’application ou en écrivant à info@myrents-app.com.',
        ],
      },
      {
        title: 'Conséquences de la suppression',
        paragraphs: [
          'La suppression de votre compte entraîne l’effacement irréversible de l’ensemble de vos biens, baux, dépenses, photos et documents rattachés.',
        ],
      },
    ],
  },
}
