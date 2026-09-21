import type { LegalPage, LegalPageKey } from '../siteContent'

export const dutchLegalPages: Record<LegalPageKey, LegalPage> = {
  terms: {
    eyebrow: 'Gebruiksvoorwaarden',
    title: 'Gebruiksvoorwaarden voor My Rents',
    intro:
      'Deze gebruiksvoorwaarden zijn van toepassing op het gebruik van My Rents, deze website en het bijbehorende forum, beheerd door Daniel Rodríguez.',
    updatedAt: '11 maart 2026',
    sections: [
      {
        title: 'Verantwoordelijke partij',
        paragraphs: [
          'My Rents is een verhuurbeheer-app en onlinedienst aangeboden door Daniel Rodríguez als zelfstandig ontwikkelaar.',
          'Deze voorwaarden gelden voor de mobiele app, deze website en alle daaraan verbonden ondersteuningskanalen.',
        ],
      },
      {
        title: 'Acceptatie en geschiktheid',
        paragraphs: [
          'Door My Rents te downloaden of te gebruiken stemt u in met deze voorwaarden en het privacybeleid.',
          'De dienst is uitsluitend bestemd voor personen van 13 jaar en ouder.',
        ],
      },
      {
        title: 'Dienstverlening',
        paragraphs: [
          'My Rents biedt functionaliteiten voor het structureren van verhuurpanden, contracten, betalingen, bonnen en contactpersonen.',
          'My Rents is een administratief hulpmiddel. U blijft zelf verantwoordelijk voor de naleving van toepasselijke wet- en regelgeving.',
        ],
      },
      {
        title: 'PRO-abonnementen en in-app aankopen',
        paragraphs: [
          'Voor bepaalde geavanceerde functies is een PRO-abonnement vereist. Betalingen en verlengingen verlopen via de betreffende app store (zoals Google Play).',
        ],
      },
      {
        title: 'Toepasselijk recht en contact',
        paragraphs: [
          'Op deze voorwaarden is het recht van Spanje van toepassing, onverminderd dwingend consumentenrecht in uw woonland.',
          'Voor vragen kunt u contact opnemen via info@myrents-app.com.',
        ],
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacybeleid',
    title: 'Privacybeleid voor My Rents',
    intro:
      'Dit privacybeleid beschrijft hoe Daniel Rodríguez persoonsgegevens verwerkt bij het gebruik van My Rents en gerelateerde diensten overeenkomstig de AVG (GDPR).',
    updatedAt: '23 maart 2026',
    sections: [
      {
        title: 'Verwerkingsverantwoordelijke',
        paragraphs: [
          'De verwerkingsverantwoordelijke in de zin van de AVG is Daniel Rodríguez. E-mail: info@myrents-app.com.',
        ],
      },
      {
        title: 'Gegevensverwerking en doeleinden',
        paragraphs: [
          'Wij verwerken uw e-mailadres, inloggegevens en de door u ingevoerde gegevens over uw verhuurbeheer (huurders, betalingen, facturen).',
          'Deze gegevens worden strikt gebruikt voor het leveren van de dienst. Wij verkopen geen gegevens aan derden en hanteren geen advertentiecookies.',
        ],
      },
      {
        title: 'Uw rechten',
        paragraphs: [
          'U heeft conform de AVG het recht op inzage, rectificatie, wissing en overdraagbaarheid van uw persoonsgegevens.',
        ],
      },
    ],
  },
  eula: {
    eyebrow: 'Licentieovereenkomst voor eindgebruikers',
    title: 'EULA voor My Rents',
    intro:
      'Deze licentieovereenkomst regelt de rechten en plichten bij het gebruik van de software My Rents.',
    updatedAt: '11 maart 2026',
    sections: [
      {
        title: 'Licentieverlening',
        paragraphs: [
          'Daniel Rodríguez verleent u een persoonlijke, niet-exclusieve en niet-overdraagbare licentie om My Rents op uw apparaten te gebruiken.',
        ],
      },
      {
        title: 'Intellectuele eigendom',
        paragraphs: [
          'Alle intellectuele eigendomsrechten op de software berusten uitsluitend bij Daniel Rodríguez.',
        ],
      },
    ],
  },
  dataDeletion: {
    eyebrow: 'Gegevensverwijdering',
    title: 'Verwijdering van persoonsgegevens voor My Rents',
    intro:
      'Instructies voor het indienen van een verzoek tot definitieve verwijdering van uw account en gegevens.',
    updatedAt: '11 maart 2026',
    sections: [
      {
        title: 'Verwijderingsverzoek indienen',
        paragraphs: [
          'U kunt uw account verwijderen in de app-instellingen of via een verzoek per e-mail naar info@myrents-app.com.',
        ],
      },
      {
        title: 'Gevolgen van verwijdering',
        paragraphs: [
          'Bij verwijdering worden alle panden, contracten, bonnen, foto’s en bestanden die aan uw account zijn gekoppeld definitief gewist.',
        ],
      },
    ],
  },
}
