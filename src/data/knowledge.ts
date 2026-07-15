import type { KnowledgeItem } from '../types'

export const knowledge: KnowledgeItem[] = [
  {
    "id": "checkin-time",
    "topic": "checkin",
    "title": "Orario di check-in",
    "keywords": [
      "check-in",
      "checkin",
      "arrivo",
      "entrare",
      "orario",
      "14",
      "camera pronta"
    ],
    "examples": [
      "A che ora posso entrare?",
      "Quando è il check-in?",
      "Arrivo tardi"
    ],
    "answer": "Il check-in è disponibile a partire dalle ore 14:00. Prima dell'arrivo riceverai tramite e-mail o WhatsApp il link per il check-in online e i codici necessari per accedere alla struttura.",
    "actions": [
      {
        "label": "Istruzioni check-in",
        "url": "./docs/istruzioni-checkin-checkout.pdf"
      }
    ]
  },
  {
    "id": "checkin-online",
    "topic": "checkin",
    "title": "Check-in online e documenti",
    "keywords": [
      "online",
      "documenti",
      "carta identità",
      "passaporto",
      "foto",
      "whatsapp",
      "email",
      "24 ore"
    ],
    "examples": [
      "Come faccio il check-in online?",
      "Quali documenti servono?",
      "Devo inviare i documenti?"
    ],
    "answer": "Il check-in online è obbligatorio. Il link viene inviato via e-mail o WhatsApp almeno 24 ore prima dell'arrivo. Occorre inviare le immagini fronte e retro dei documenti di tutti gli ospiti. Dopo la verifica riceverai il numero della camera e l'abilitazione dei codici."
  },
  {
    "id": "green-door",
    "topic": "checkin",
    "title": "Portone verde su strada",
    "keywords": [
      "portone verde",
      "cancello",
      "strada",
      "213213",
      "primo ingresso",
      "codice"
    ],
    "examples": [
      "Come apro il portone verde?",
      "Qual è il codice del cancello?"
    ],
    "answer": "Per il primo ingresso digita 213213# sul lettore del portone verde su strada. Per uscire premi il pulsante nero posto alla sinistra del portone."
  },
  {
    "id": "floor-door",
    "topic": "checkin",
    "title": "Portone del piano",
    "keywords": [
      "portone marrone",
      "piano",
      "logo",
      "scale",
      "sei cifre",
      "cellulare",
      "pulsante rosso"
    ],
    "examples": [
      "Come apro il portone del piano?",
      "Dove si trova il secondo portone?"
    ],
    "answer": "Dopo il portone verde sali le scale a destra fino al portone marrone con il logo Villa Cua. Per entrare digita le prime sei cifre del tuo numero di cellulare, senza prefisso, seguite da #. Per uscire premi il pulsante rosso."
  },
  {
    "id": "room-door",
    "topic": "checkin",
    "title": "Accesso alla camera",
    "keywords": [
      "camera",
      "pannello touch",
      "sette cifre",
      "card",
      "slot",
      "luce blu",
      "acqua",
      "corrente"
    ],
    "examples": [
      "Come entro in camera?",
      "Dove trovo la card?",
      "Come attivo luce e acqua?"
    ],
    "answer": "Tocca il centro del pannello touch e digita le prime sette cifre del tuo numero di cellulare, senza prefisso, seguite da #. In camera troverai la card nello slot Check-in/Check-out. Inseriscila nello slot con luce blu per attivare luce e acqua."
  },
  {
    "id": "card",
    "topic": "checkin",
    "title": "Uso della card",
    "keywords": [
      "card",
      "tessera",
      "magnetica",
      "codici",
      "porta",
      "batterie",
      "smarrita"
    ],
    "examples": [
      "Posso continuare a usare i codici?",
      "Come uso la card?",
      "La porta segnala le batterie"
    ],
    "answer": "I codici valgono solo per il primo accesso. Nei giorni successivi devi utilizzare esclusivamente la card magnetica e portarla sempre con te quando esci. Se la porta segnala batterie da sostituire, avvisa subito lo staff."
  },
  {
    "id": "checkout",
    "topic": "checkout",
    "title": "Check-out",
    "keywords": [
      "check-out",
      "checkout",
      "partenza",
      "11",
      "lasciare camera",
      "riconsegna card"
    ],
    "examples": [
      "A che ora devo lasciare la camera?",
      "Come faccio il check-out?",
      "Dove lascio la card?"
    ],
    "answer": "Il check-out deve essere effettuato entro le ore 11:00. Prima di uscire rimetti la card nello slot Check-in/Check-out e verifica di avere raccolto tutti gli effetti personali.",
    "actions": [
      {
        "label": "Istruzioni check-out",
        "url": "./docs/istruzioni-checkin-checkout.pdf"
      }
    ]
  },
  {
    "id": "lost-card",
    "topic": "checkout",
    "title": "Perdita della card",
    "keywords": [
      "persa",
      "perso",
      "smarrita",
      "card",
      "addebito",
      "20 euro"
    ],
    "examples": [
      "Ho perso la card",
      "Quanto costa perdere la card?"
    ],
    "answer": "La mancata consegna o la perdita della card comporta un addebito di 20 €."
  },
  {
    "id": "wifi",
    "topic": "wifi",
    "title": "Wi-Fi",
    "keywords": [
      "wifi",
      "wi-fi",
      "internet",
      "password",
      "rete",
      "villa cua 1",
      "villa cua 2",
      "villa cua 3"
    ],
    "examples": [
      "Qual è la password del Wi-Fi?",
      "Come mi collego a internet?"
    ],
    "answer": "Il Wi-Fi è gratuito in tutta la struttura. Le reti disponibili sono Villa Cua 1, Villa Cua 2 e Villa Cua 3. Scegli quella più vicina alla tua camera. La password è: villacua198919911992."
  },
  {
    "id": "breakfast",
    "topic": "breakfast",
    "title": "Colazione",
    "keywords": [
      "colazione",
      "bar nunzia",
      "mattina",
      "8",
      "10",
      "inclusa",
      "bere",
      "mangiare"
    ],
    "examples": [
      "Dove si fa colazione?",
      "A che ora è la colazione?",
      "La colazione è inclusa?"
    ],
    "answer": "La colazione è inclusa e viene servita all'italiana presso il vicino Bar Nunzia, a circa 150 metri, dalle 8:00 alle 10:00. Mostra la scheda magnetica e comunica il nome della struttura. È prevista una cosa da mangiare e una da bere per ciascun ospite."
  },
  {
    "id": "cleaning",
    "topic": "cleaning",
    "title": "Pulizia della camera",
    "keywords": [
      "pulizia",
      "pulizie",
      "riassetto",
      "verde",
      "rosso",
      "ogni due notti",
      "10"
    ],
    "examples": [
      "Quando puliscono la camera?",
      "Come richiedo la pulizia?"
    ],
    "answer": "La pulizia della camera è disponibile una volta ogni due notti. Per richiederla imposta entro le ore 10:00 il cursore sulla porta su verde. Rosso significa Non disturbare."
  },
  {
    "id": "linen",
    "topic": "cleaning",
    "title": "Asciugamani e biancheria",
    "keywords": [
      "asciugamani",
      "lenzuola",
      "biancheria",
      "carta igienica",
      "sapone",
      "laundry bag"
    ],
    "examples": [
      "Quando cambiano gli asciugamani?",
      "Posso avere altra carta igienica?"
    ],
    "answer": "Asciugamani, carta igienica e saponi sono disponibili ogni giorno su richiesta. La biancheria da letto viene cambiata ogni tre notti o su richiesta. Per i soli rifornimenti lascia fuori dalla porta la Laundry Bag con il materiale da sostituire."
  },
  {
    "id": "parking",
    "topic": "parking",
    "title": "Parcheggio",
    "keywords": [
      "parcheggio",
      "garage",
      "posto auto",
      "auto",
      "macchina",
      "10 euro",
      "150 metri",
      "prenotazione"
    ],
    "examples": [
      "C'è il parcheggio?",
      "Quanto costa il parcheggio?",
      "Dove lascio l'auto?"
    ],
    "answer": "Il parcheggio riservato dista circa 150 metri, costa 10 € al giorno, è disponibile solo su prenotazione ed è accessibile dalle 7:00 alle 24:00. Il posto assegnato viene comunicato il giorno precedente al check-in.",
    "actions": [
      {
        "label": "Mappa parcheggio",
        "url": "./docs/mappa-parcheggio.pdf"
      }
    ]
  },
  {
    "id": "parking-address",
    "topic": "parking",
    "title": "Ingresso del parcheggio",
    "keywords": [
      "corso resina 245 a",
      "ingresso",
      "retro muro",
      "posto assegnato"
    ],
    "examples": [
      "Qual è l'indirizzo del parcheggio?",
      "Come devo sistemare l'auto?"
    ],
    "answer": "L'ingresso del parcheggio è in Corso Resina 245 A. Posiziona l'auto nel posto assegnato con il retro verso il muro e il più indietro possibile.",
    "actions": [
      {
        "label": "Apri mappa",
        "url": "./docs/mappa-parcheggio.pdf"
      }
    ]
  },
  {
    "id": "pets-smoking",
    "topic": "rules",
    "title": "Animali e fumo",
    "keywords": [
      "animali",
      "cane",
      "gatto",
      "fumare",
      "fumo",
      "sigarette"
    ],
    "examples": [
      "Accettate animali?",
      "Posso portare il cane?",
      "Posso fumare in camera?"
    ],
    "answer": "Gli animali non sono ammessi. È vietato fumare nelle camere e negli ambienti interni. È consentito fumare esclusivamente negli spazi esterni utilizzando gli appositi posacenere."
  },
  {
    "id": "quiet",
    "topic": "rules",
    "title": "Orari di silenzio",
    "keywords": [
      "silenzio",
      "rumore",
      "22",
      "8",
      "disturbare"
    ],
    "examples": [
      "Quali sono gli orari di silenzio?",
      "Posso fare rumore la sera?"
    ],
    "answer": "Occorre evitare rumori molesti, soprattutto nella fascia oraria 22:00-08:00."
  },
  {
    "id": "visitors",
    "topic": "rules",
    "title": "Persone esterne",
    "keywords": [
      "amici",
      "visitatori",
      "ospiti esterni",
      "non registrati"
    ],
    "examples": [
      "Posso far entrare amici?",
      "Sono ammessi visitatori?"
    ],
    "answer": "Possono accedere esclusivamente gli ospiti regolarmente registrati. Le persone esterne possono entrare soltanto con preventiva autorizzazione dell'host."
  },
  {
    "id": "climate",
    "topic": "services",
    "title": "Climatizzazione",
    "keywords": [
      "aria condizionata",
      "riscaldamento",
      "caldo",
      "freddo",
      "finestra",
      "balcone"
    ],
    "examples": [
      "Come accendo l'aria condizionata?",
      "Perché il climatizzatore si spegne?"
    ],
    "answer": "Il sistema di riscaldamento e raffreddamento è automatico. L'apertura del balcone o della finestra disattiva momentaneamente il sistema."
  },
  {
    "id": "safe",
    "topic": "services",
    "title": "Cassaforte",
    "keywords": [
      "cassaforte",
      "safe",
      "codice",
      "tasto rosso",
      "beep"
    ],
    "examples": [
      "Come uso la cassaforte?",
      "Come imposto il codice?"
    ],
    "answer": "Premi il tasto rosso interno, inserisci un codice di 3-8 cifre e premi A o B. Per aprire, digita il codice, premi A o B, attendi la luce verde e gira la manopola. Dopo tre codici errati la cassaforte si blocca per 20 secondi."
  },
  {
    "id": "ercolano",
    "topic": "tourism",
    "title": "Cosa vedere a Ercolano",
    "keywords": [
      "ercolano",
      "scavi",
      "vesuvio express",
      "villa campolieto",
      "reggia portici",
      "villa favorita",
      "pugliano",
      "mercato resina"
    ],
    "examples": [
      "Cosa posso vedere a Ercolano?",
      "Cosa c'è vicino?"
    ],
    "answer": "Vicino a Villa Cua trovi gli Scavi di Ercolano a circa 5 minuti a piedi, il Mercato di Resina a 7 minuti, Vesuvio Express a 8 minuti, Reggia di Portici e Villa Favorita a 8 minuti, Villa Campolieto a 9 minuti e Basilica di Pugliano a 10 minuti.",
    "actions": [
      {
        "label": "Brochure generale",
        "url": "./docs/brochure-generale.pdf"
      }
    ]
  },
  {
    "id": "nearby",
    "topic": "tourism",
    "title": "Luoghi nei dintorni",
    "keywords": [
      "pompei",
      "portici",
      "pietrarsa",
      "san ciro",
      "torre del greco",
      "capri",
      "napoli",
      "ischia",
      "procida",
      "sorrento",
      "positano",
      "amalfi",
      "ravello"
    ],
    "examples": [
      "Cosa posso visitare nei dintorni?",
      "Quanto dista Pompei?"
    ],
    "answer": "Nei dintorni puoi visitare il Lungomare di Portici, il Museo di Pietrarsa, la Basilica di San Ciro, Pompei e il Lungomare di Torre del Greco. La brochure segnala inoltre Napoli, Capri, Ischia, Procida, Sorrento, Positano, Amalfi e Ravello.",
    "actions": [
      {
        "label": "Apri brochure",
        "url": "./docs/brochure-generale.pdf"
      }
    ]
  },
  {
    "id": "transport",
    "topic": "transport",
    "title": "Trasporti pubblici",
    "keywords": [
      "circumvesuviana",
      "treno",
      "napoli",
      "pompei",
      "sorrento",
      "metropolitana",
      "21:30"
    ],
    "examples": [
      "Come mi muovo con i mezzi?",
      "Come arrivo a Pompei?"
    ],
    "answer": "La Circumvesuviana collega Ercolano con Napoli, Pompei e Sorrento. Per rientrare a Ercolano Scavi controlla le linee per Poggiomarino o Torre Annunziata. La linea per Sorrento non ferma sempre a Ercolano Scavi. L'ultimo treno indicato nella brochure è alle 21:30."
  },
  {
    "id": "transfer",
    "topic": "transport",
    "title": "Transfer",
    "keywords": [
      "transfer",
      "taxi",
      "aeroporto",
      "napoli centrale",
      "porto",
      "pompei",
      "sorrento",
      "amalfi",
      "positano",
      "ravello"
    ],
    "examples": [
      "Avete un transfer?",
      "Quanto costa il transfer per l'aeroporto?"
    ],
    "answer": "Tariffe indicate: Aeroporto 60 €, Napoli Centrale 50 €, Napoli Porto 50 €, Napoli Centro 55 €, Pozzuoli Porto 60 €, Pompei 60 €, Sorrento 180 €, Stazione Ercolano 15 €, Stazione Portici 20 €, Costiera Campania 90 €, Caserta/Reggia 90 €, Amalfi 200 €, Positano 200 €, Ravello 180 €, tour Costiera 450 €, tour Sorrento 300 €."
  },
  {
    "id": "restaurants",
    "topic": "food",
    "title": "Dove mangiare",
    "keywords": [
      "ristorante",
      "pizzeria",
      "osteria",
      "pub",
      "braceria",
      "cena",
      "pranzo",
      "mangiare"
    ],
    "examples": [
      "Dove posso mangiare?",
      "Quali ristoranti consigliate?"
    ],
    "answer": "La brochure consiglia Vico 20, Le Scuderie, Tubba Catubba, Rovi Pizzeria, San Pietro, Terrazza Quattro Venti, Lumos Pub, una braceria e Pappamonte.",
    "actions": [
      {
        "label": "Apri brochure",
        "url": "./docs/brochure-generale.pdf"
      }
    ]
  },
  {
    "id": "shops",
    "topic": "services",
    "title": "Negozi e servizi",
    "keywords": [
      "supermercato",
      "farmacia",
      "tabacchi",
      "bancomat",
      "atm",
      "euroesse",
      "eurospin",
      "noleggio"
    ],
    "examples": [
      "Dov'è il supermercato?",
      "C'è una farmacia vicino?"
    ],
    "answer": "Nei dintorni sono indicati supermercati Euroesse ed Eurospin, farmacia, tabacchi, ATM/bancomat e un servizio di noleggio.",
    "actions": [
      {
        "label": "Apri brochure",
        "url": "./docs/brochure-generale.pdf"
      }
    ]
  },
  {
    "id": "address",
    "topic": "property",
    "title": "Indirizzo",
    "keywords": [
      "indirizzo",
      "dove si trova",
      "corso resina 213",
      "villa cua"
    ],
    "examples": [
      "Qual è l'indirizzo?",
      "Dove si trova Villa Cua?"
    ],
    "answer": "Villa Cua si trova in Corso Resina 213, Ercolano."
  }
] as KnowledgeItem[]
