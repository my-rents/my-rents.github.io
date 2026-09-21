import type { LegalPage, LegalPageKey } from '../siteContent'

export const italianLegalPages: Record<LegalPageKey, LegalPage> = {
  terms: {
    eyebrow: 'Termini e Condizioni',
    title: 'Termini e Condizioni di My Rents',
    intro:
      'I presenti Termini e Condizioni regolano l’utilizzo di My Rents, del presente sito web e del forum di supporto gestiti da Daniel Rodríguez.',
    updatedAt: '11 marzo 2026',
    sections: [
      {
        title: 'Titolare del servizio',
        paragraphs: [
          'My Rents è un’applicazione di gestione delle locazioni e un servizio online fornito da Daniel Rodríguez come sviluppatore indipendente.',
          'I presenti termini si applicano all’applicazione mobile, al sito web e a tutti i servizi di supporto correlati.',
        ],
      },
      {
        title: 'Accettazione ed idoneità',
        paragraphs: [
          'Scaricando o utilizzando My Rents, l’utente accetta integralmente i presenti termini e l’Informativa sulla privacy.',
          'L’utilizzo del servizio è consentito a persone di età non inferiore a 13 anni.',
        ],
      },
      {
        title: 'Funzionalità del servizio',
        paragraphs: [
          'My Rents permette di organizzare immobili, contratti di affitto, scadenze, spese, contatti e documenti contabili.',
          'My Rents è uno strumento di supporto gestionale. L’utente è l’unico responsabile della correttezza dei dati inseriti e degli adempimenti fiscali e normativi applicabili.',
        ],
      },
      {
        title: 'Abbonamenti PRO e acquisti in-app',
        paragraphs: [
          'Alcune funzionalità richiedono un abbonamento PRO. I pagamenti, i rinnovi e i rimborsi sono gestiti direttamente dal relativo store applicativo (es. Google Play).',
        ],
      },
      {
        title: 'Legge applicabile e contatti',
        paragraphs: [
          'I presenti termini sono disciplinati dalla legge spagnola, fatte salve le disposizioni inderogabili a tutela del consumatore applicabili nel paese di residenza.',
          'Per qualunque richiesta, è possibile contattarci all’indirizzo info@myrents-app.com.',
        ],
      },
    ],
  },
  privacy: {
    eyebrow: 'Informativa sulla privacy',
    title: 'Informativa sulla privacy di My Rents',
    intro:
      'La presente informativa descrive le modalità di trattamento dei dati personali degli utenti di My Rents in conformità al Regolamento (UE) 2016/679 (GDPR).',
    updatedAt: '23 marzo 2026',
    sections: [
      {
        title: 'Titolare del trattamento',
        paragraphs: [
          'Il Titolare del trattamento è Daniel Rodríguez. Email di contatto: info@myrents-app.com.',
        ],
      },
      {
        title: 'Dati trattati e finalità',
        paragraphs: [
          'Raccogliamo l’indirizzo email, i dati di registrazione e le informazioni inserite volontariamente per la gestione dei propri immobili (contratti, ricevute, scadenze).',
          'I dati vengono trattati esclusivamente per erogare il servizio richiesto. Non cediamo dati a terzi né utilizziamo cookie o identificatori per finalità pubblicitarie.',
        ],
      },
      {
        title: 'Diritti dell’interessato',
        paragraphs: [
          'L’utente può esercitare in qualsiasi momento i diritti previsti dal GDPR, tra cui l’accesso, la rettifica, la cancellazione e la portabilità dei dati personali.',
        ],
      },
    ],
  },
  eula: {
    eyebrow: 'Accordo di licenza con l’utente finale',
    title: 'EULA di My Rents',
    intro:
      'Il presente accordo di licenza stabilisce i diritti e le condizioni d’uso del software My Rents.',
    updatedAt: '11 marzo 2026',
    sections: [
      {
        title: 'Concessione di licenza',
        paragraphs: [
          'Daniel Rodríguez concede una licenza personale, non esclusiva e non trasferibile per l’utilizzo del software My Rents sui dispositivi dell’utente.',
        ],
      },
      {
        title: 'Proprietà intellettuale',
        paragraphs: [
          'Tutti i diritti di proprietà intellettuale relativi al software restano di titolarità esclusiva di Daniel Rodríguez.',
        ],
      },
    ],
  },
  dataDeletion: {
    eyebrow: 'Cancellazione dati',
    title: 'Cancellazione dei dati personali per My Rents',
    intro:
      'Modalità per richiedere la rimozione del proprio account e la cancellazione integrale dei dati personali.',
    updatedAt: '11 marzo 2026',
    sections: [
      {
        title: 'Come richiedere la cancellazione',
        paragraphs: [
          'È possibile eliminare il proprio account direttamente dalle impostazioni dell’app oppure inviando un’email a info@myrents-app.com.',
        ],
      },
      {
        title: 'Ambito di cancellazione',
        paragraphs: [
          'La conferma della cancellazione comporta la distruzione definitiva di tutti i dati immobiliari, contratti, immagini e ricevute caricati sul profilo.',
        ],
      },
    ],
  },
}
