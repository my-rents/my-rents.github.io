import type { BlogArticle, BlogSectionContent } from '../blogContent'

export const italianBlogArticles: BlogArticle[] = [
  {
    slug: 'organize-rental-property-receipts-tax-season',
    title: 'Come organizzare le ricevute di affitto per la dichiarazione dei redditi',
    readingTime: '5 min di lettura',
    date: '18 marzo 2026',
    category: 'Fisco & Finanza',
    excerpt:
      'Scopri come i proprietari gestiscono scontrini e fatture di manutenzione, deducono le spese ammesse ed evitano il caos dei fogli di calcolo durante la stagione fiscale.',
    content: {
      lead: 'Per i locatori indipendenti, il periodo della dichiarazione dei redditi coincide spesso con un fine settimana caotico alla ricerca di scontrini, fatture nei cassetti, estratti conto e vecchie email per ricostruire dodici mesi di spese immobiliari. Tracciare le spese in tempo reale durante tutto l’anno trasforma la dichiarazione in un controllo rapido di 15 minuti.',
      subheadings: [
        {
          title: '1. Perché conti promiscui e ricevute cartacee creano un incubo fiscale',
          paragraphs: [
            'L’errore più comune tra i piccoli proprietari è acquistare materiali, pagare interventi urgenti di idraulici o elettrodomestici con carte personali o contanti senza archiviare subito il documento d’acquisto.',
            'La carta termica degli scontrini si cancella in pochi mesi per via del calore e della luce solare. In caso di verifica fiscale, ricevute sbiadite o addebiti bancari privi di giustificativo possono comportare la perdita di deduzioni o detrazioni e l’applicazione di sanzioni. La regola d’oro: digitalizza ogni ricevuta appena la ricevi.',
          ],
          takeaways: [
            'Non affidarti alla carta per più di 24 ore: digitalizza subito.',
            'Separa chiaramente le entrate e le uscite della locazione dalle tue spese personali quotidiane.',
            'Fotografa le fatture direttamente in cassa o al termine dell’intervento.',
          ],
        },
        {
          title: '2. Le 5 principali categorie di spesa immobiliare da monitorare',
          paragraphs: [
            'Classificare le spese in categorie standard evita dimenticanze e consente di beneficiare di tutte le agevolazioni e deduzioni consentite:',
            'Riparazioni e manutenzione ordinaria: Interventi di routine come la riparazione di rubinetti, pulizia delle grondaie, manutenzione della caldaia e tinteggiatura.',
            'Manutenzione straordinaria e ristrutturazioni: Opere di rilevante entità come il rifacimento del tetto o la ristrutturazione del bagno, spesso soggette a detrazione pluriennale.',
            'Imposte locali e assicurazioni: IMU, TARI a carico del proprietario, polizze assicurative sull’immobile e assicurazione tutela legale/morosità.',
            'Spese professionali e software: Canoni di app di gestione immobiliare come My Rents, parcelle del commercialista, consulenze legali o spese di registrazione contrattuale.',
            'Interessi sul mutuo e utenze: La quota di interessi passivi del mutuo sull’immobile locato e le spese condominiali non a carico dell’inquilino.',
          ],
        },
        {
          title: '3. Acquisizione digitale: scatta e allega direttamente sul posto',
          paragraphs: [
            'Il modo migliore per non smarrire una spesa è fotografare lo scontrino o la ricevuta direttamente nell’app di gestione mentre sei alla cassa del negozio o stai verificando il lavoro svolto.',
            'Associando immediatamente la foto all’immobile e alla specifica unità, non ti chiederai più dopo sei mesi a quale appartamento fosse destinata quella valvola.',
          ],
        },
        {
          title: '4. Di cosa ha davvero bisogno il tuo commercialista',
          paragraphs: [
            'Il tuo consulente fiscale non vuole ricevere una busta di scontrini stropicciati. Ha bisogno di un report chiaro e ordinato in PDF o foglio elettronico con i ricavi per immobile, le spese classificate e i giustificativi digitali allegati.',
            'Un’app per proprietari come My Rents ti permette di esportare il riepilogo finanziario annuale per ogni proprietà con un solo tocco.',
          ],
        },
      ],
      summaryBox: {
        title: 'Punto chiave per i proprietari',
        text: 'La registrazione immediata dallo smartphone fa risparmiare mediamente 14 ore di lavoro per le pratiche fiscali e protegge le tue deduzioni legittime.',
      },
    },
  },
  {
    slug: 'landlord-lease-renewals-rent-increase-guide',
    title: 'Guida per proprietari: rinnovo del contratto di locazione e adeguamento del canone',
    readingTime: '6 min di lettura',
    date: '14 marzo 2026',
    category: 'Gestione contratti',
    excerpt:
      'Guida pratica per locatori su scadenze contrattuali, calcolo dell’adeguamento ISTAT, preavvisi di legge e fidelizzazione degli inquilini affidabili.',
    content: {
      lead: 'Conservare inquilini affidabili, puntuali nei pagamenti e rispettosi dell’immobile è il presupposto per un investimento a reddito sereno e profittevole. Tuttavia, la gestione delle scadenze e la comunicazione degli aumenti possono generare disagio. Con una pianificazione chiara e una comunicazione trasparente, il rinnovo diventa un passaggio lineare e prevedibile.',
      subheadings: [
        {
          title: '1. Il calendario 90-60-30 giorni prima della scadenza',
          paragraphs: [
            'La gestione efficace di un rinnovo contrattuale inizia con largo anticipo rispetto all’ultimo mese di locazione. Una tempistica chiara tutela sia il locatore che il conduttore:',
            '90 giorni prima: Analizza i costi di gestione (aumenti assicurativi, imposte, spese di manutenzione media) e confronta i canoni attuali nella stessa zona.',
            '60 giorni prima: Invia all’inquilino una comunicazione scritta con la proposta di rinnovo, i termini aggiornati e l’eventuale adeguamento del canone, richiedendo riscontro entro 30 giorni.',
            '30 giorni prima: Sottoscrivi la proroga o il nuovo contratto. Se l’inquilino decide di lasciare l’immobile, hai tempo a sufficienza per avviare la ricerca e le visite, azzerando i periodi di sfitto.',
          ],
        },
        {
          title: '2. Adeguamento del canone vs costo dello sfitto',
          paragraphs: [
            'Un errore comune tra i proprietari inesperti è forzare l’aumento al massimo possibile, rischiando di far andare via un inquilino modello. Considera il vero costo di un cambio inquilino:',
            'Il cambio conduttore costa spesso tra i 1.500 € e i 4.000 € fra mensilità perse, pulizie approfondite, sostituzione serrature, tinteggiatura e costi di agenzia. Un aumento di 40 € al mese (480 € all’anno) viene vanificato da un singolo mese di immobile vuoto.',
            'Quando adegui il canone (es. variazione ISTAT), illustra con garbo le motivazioni e mantieni condizioni vantaggiose per chi si prende cura dell’immobile.',
          ],
          takeaways: [
            'Calcola il costo effettivo di 30 giorni di sfitto prima di definire un aumento del canone.',
            'Un conduttore affidabile con un canone di poco inferiore ai massimi di mercato è più redditizio di un nuovo inquilino ignoto.',
            'Verifica sempre i vincoli di legge e gli indici applicabili alla tua tipologia di contratto.',
          ],
        },
        {
          title: '3. Rispetto dei termini di legge: preavviso e canone concordato',
          paragraphs: [
            'Molti ordinamenti prevedono termini perentori per la disdetta o il rinnovo (spesso da 3 a 6 mesi nei contratti a canone concordato o libero).',
            'Verifica con attenzione le scadenze legali del contratto. Una notifica digitale tracciata garantisce una prova temporale incontestabile.',
          ],
        },
        {
          title: '4. Centralizzare documenti e scadenze in un unico posto',
          paragraphs: [
            'Memorizzare scadenze su calendari sparsi porta inevitabilmente a dimenticanze. Quando un contratto si proroga tacitamente senza controllo, perdi flessibilità gestionale.',
            'Un’app specifica ti avvisa con il giusto anticipo e tiene il contratto firmato sempre disponibile sul telefono.',
          ],
        },
      ],
      summaryBox: {
        title: 'Punto chiave per i proprietari',
        text: 'Anticipare il rinnovo con 60 giorni di preavviso salvaguarda il buon rapporto con l’inquilino, elimina il rischio di sfitto e garantisce flussi di cassa costanti.',
      },
    },
  },
  {
    slug: 'spreadsheets-vs-landlord-app-why-spreadsheets-fail',
    title: 'Perché Excel e i fogli di calcolo frenano i proprietari nel 2026',
    readingTime: '4 min di lettura',
    date: '8 marzo 2026',
    category: 'Tecnologia & Produttività',
    excerpt:
      'Perché gestire gli immobili in affitto con Excel o Google Fogli porta a pagamenti dimenticati, formule compromesse e ore di tempo sprecate.',
    content: {
      lead: 'Quasi tutti i locatori privati iniziano con un foglio Excel. È uno strumento conosciuto, gratuito e apparentemente personalizzabile. Ma non appena si aggiunge un secondo contratto, la restituzione di una cauzione, una fattura di manutenzione infrannuale o un sollecito, i fogli di calcolo mostrano i loro limiti strutturali.',
      subheadings: [
        {
          title: '1. La trappola della scrivania: gli affitti si gestiscono sul campo',
          paragraphs: [
            'Gli immobili a reddito non si gestiscono comodamente davanti a due schermi in ufficio. Li gestisci all’ingresso dopo l’intervento dell’idraulico, in auto dopo un alert bancario o rispondendo a una chiamata urgente dell’inquilino.',
            'Aprire un foglio di calcolo complesso dallo smartphone è scomodo e fonte di errori. Poiché inserire dati su mobile è faticoso, si finisce per rimandare, accumulando ricevute dimenticate e perdendo deduzioni fiscali.',
          ],
        },
        {
          title: '2. Formule fragili e sovrascritture involontarie',
          paragraphs: [
            'I fogli elettronici si basano su celle delicate, formule SOMMA e collegamenti tra schede. Un tasto errato o una riga cancellata per sbaglio può alterare silenziosamente il bilancio dell’intero anno senza alcun messaggio di avviso.',
            'A differenza di un database con controlli rigorosi, un foglio di calcolo non impedisce dati duplicati o date incoerenti.',
          ],
          takeaways: [
            'I fogli di calcolo non offrono convalida automatica dei dati né cronologia delle modifiche.',
            'L’eliminazione accidentale di una riga falsa i totali annuali senza mostrare errori.',
            'Modificare formule complesse da dispositivo mobile causa frequentemente corruzione dei dati.',
          ],
        },
        {
          title: '3. Cosa offre un’app dedicata che un foglio Excel non potrà mai dare',
          paragraphs: [
            'Le applicazioni moderne come My Rents poggiano su dati relazionali: un immobile contiene unità; un’unità contiene contratti; un contratto collega inquilini, scadenziari e spese.',
            'Questa struttura sblocca funzionalità immediate impossibili su foglio elettronico senza decine di ore di programmazione:',
            'Notifiche automatiche di morosità se il canone non risulta incassato entro la scadenza.',
            'Foto delle ricevute collegate direttamente a ciascuna voce di costo.',
            'Funzionamento offline per registrare dati anche in scantinati privi di copertura di rete.',
            'Portali protetti per gli inquilini per la consultazione autonoma di documenti e ricevute.',
          ],
        },
      ],
      summaryBox: {
        title: 'Punto chiave per i proprietari',
        text: 'Passare dai fogli di calcolo a un’app ideata appositamente per proprietari fa risparmiare dalle 4 alle 6 ore ogni mese e cancella definitivamente gli errori di conteggio.',
      },
    },
  },
  {
    slug: 'tenant-portal-benefits-small-landlords',
    title: 'Portale inquilini: come l’accesso condiviso semplifica ricevute e comunicazioni',
    readingTime: '5 min di lettura',
    date: '28 febbraio 2026',
    category: 'Gestione operativa',
    excerpt:
      'Come i portali web dedicati agli inquilini azzerano i dubbi su contratti, spese e pagamenti senza richiedere il download di app pesanti.',
    content: {
      lead: 'Quando gli inquilini hanno un dubbio sulla data di scadenza del contratto, sul deposito cauzionale o sulla ricezione dell’ultimo bonifico, cosa fanno? Spesso mandano un messaggio su WhatsApp la domenica sera alle 21:00. Mettere a disposizione un portale self-service elimina le incomprensioni e consolida la tua professionalità.',
      subheadings: [
        {
          title: '1. Il limite dei complessi software aziendali per gli inquilini',
          paragraphs: [
            'Molti software immobiliari aziendali costringono gli inquilini a registrare account elaborati, ricordare password o scaricare app da 200 MB solo per visualizzare un contratto.',
            'I conduttori sono riluttanti a installare ulteriori applicazioni e dimenticano le credenziali in due settimane. Per chi gestisce da 1 a 20 unità, un portale accessibile via web offre un’esperienza di gran lunga superiore.',
          ],
        },
        {
          title: '2. Il Centro Documenti: semplicità protetta da codice d’accesso',
          paragraphs: [
            'My Rents risolve questa esigenza con il Centro Documenti. Per ciascun contratto è possibile generare un link crittografato protetto da un codice di sicurezza impostato dal proprietario.',
            'L’inquilino apre il link dal proprio telefono o PC, inserisce il codice e consulta subito:',
            'Il contratto di locazione firmato e gli allegati in formato PDF nitido.',
            'L’estratto pagamenti verificato con le date di incasso e l’eventuale saldo.',
            'Le ricevute per le spese condominiali ripartite o gli interventi concordati.',
          ],
          takeaways: [
            'Nessuna app da scaricare per gli inquilini: funziona in qualsiasi browser.',
            'Codici dedicati che limitano la visibilità unicamente al proprio contratto.',
            'Immediata riduzione delle continue richieste di copie di documenti e quietanze.',
          ],
        },
        {
          title: '3. La trasparenza previene discussioni e contenziosi',
          paragraphs: [
            'Quando sia il proprietario sia l’inquilino hanno visibilità 24 ore su 24 sullo storico dei versamenti e sulle ricevute, i malintesi si risolvono prima di diventare problemi.',
            'Se sorge un dubbio sull’avvenuto accredito di una mensilità, il portale fornisce una tracciatura oggettiva e verificabile da entrambe le parti.',
          ],
        },
      ],
      summaryBox: {
        title: 'Punto chiave per i proprietari',
        text: 'Un portale web snello migliora la soddisfazione dell’inquilino, qualifica la tua immagine e fa risparmiare tempo prezioso evitando messaggi continui.',
      },
    },
  },
  {
    slug: 'getting-started-diy-landlord-guide',
    title: 'Come gestire il tuo primo immobile in affitto: la guida passo dopo passo',
    readingTime: '7 min di lettura',
    date: '20 febbraio 2026',
    category: 'Primi passi',
    excerpt:
      'Dall’inventario iniziale e contratti digitali alla registrazione dei canoni e delle manutenzioni: la guida pratica per una gestione senza stress.',
    content: {
      lead: 'L’acquisto del primo immobile da mettere a reddito è una tappa fondamentale. Ma una volta firmato il rogito, inizia la vera gestione pratica. Impostare abitudini organizzate ed efficienti fin dal primo giorno distingue gli investitori sereni dai proprietari costantemente sotto pressione.',
      subheadings: [
        {
          title: 'Passo 1: Definisci la scheda iniziale dell’immobile',
          paragraphs: [
            'Prima di pubblicare l’annuncio o stipulare il contratto, crea una documentazione digitale completa dell’appartamento. Scatta foto datate di ogni ambiente, segna i numeri di serie degli elettrodomestici e la posizione dei rubinetti d’arresto dell’acqua.',
            'In My Rents puoi creare il profilo dell’immobile, specificare le unità e memorizzare i contatti dei tuoi professionisti di riferimento (idraulico, elettricista, assicuratore).',
          ],
        },
        {
          title: 'Passo 2: Formalizza contratti e cauzione a norma di legge',
          paragraphs: [
            'Non affidarti mai ad accordi verbali o a modelli generici trovati su internet. Utilizza un contratto redatto con cura secondo la legislazione vigente che indichi chiaramente giorno di pagamento, ripartizione spese e manutenzioni.',
            'Salva il contratto firmato digitalmente nell’app per averlo sempre a portata di mano in qualsiasi evenienza.',
          ],
        },
        {
          title: 'Passo 3: Fissa un metodo chiaro per gli incassi',
          paragraphs: [
            'Condividi modalità di pagamento e scadenze fin dal primo giorno, impostando promemoria automatici.',
            'Non appena il bonifico arriva, registra l’incasso nell’app per generare una ricevuta chiara per te e per l’inquilino.',
          ],
          takeaways: [
            'Redigi sempre un verbale di consegna dell’immobile firmato dall’inquilino.',
            'Custodisci il deposito cauzionale su un conto dedicato e conforme alla normativa.',
            'Registra incassi e spese lo stesso giorno in cui si verificano.',
          ],
        },
      ],
      summaryBox: {
        title: 'Punto chiave per i proprietari',
        text: 'Un’organizzazione metodica fin dal primo mese tutela il valore del tuo immobile, previene discussioni onerose e getta le basi per far crescere la tua attività.',
      },
    },
  },
]

export const italianBlogContent: BlogSectionContent = {
  eyebrow: 'Centro risorse per proprietari',
  title: 'Guide pratiche e consigli per proprietari indipendenti',
  description:
    'Consigli di esperti su gestione degli affitti, ottimizzazione fiscale, rinnovi contrattuali, comunicazione con gli inquilini e crescita del portafoglio immobiliare.',
  readMoreLabel: 'Leggi la guida completa',
  backToArticlesLabel: 'Torna a tutti gli articoli',
  articles: italianBlogArticles,
}
