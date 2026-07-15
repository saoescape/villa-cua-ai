# Villa Cua AI Concierge v1.0

Concierge digitale gratuito basato sui documenti ufficiali di Villa Cua.

## Funzioni
- React + Vite
- grafica nero/oro responsive
- ricerca locale senza API e senza costi
- memoria basilare dell'argomento
- collegamenti alle brochure ufficiali
- pubblicazione automatica su GitHub Pages

## Avvio locale
```bash
npm install
npm run dev
```

## Pubblicazione su GitHub Pages
1. Crea un repository pubblico, ad esempio `villa-cua-ai`.
2. Carica tutti i file del progetto nel branch `main`.
3. Apri **Settings > Pages**.
4. In **Source** seleziona **GitHub Actions**.
5. Il workflow incluso costruirà e pubblicherà automaticamente il sito.

L'indirizzo finale sarà simile a:
`https://NOME-UTENTE.github.io/villa-cua-ai/`

## Aggiornare le risposte
Modifica `public/knowledge/villa_cua.json`.

## Documenti
I PDF ufficiali sono nella cartella `public/assets`.
