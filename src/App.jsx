import { useEffect, useRef, useState } from 'react'
import { BookOpen, Car, Coffee, Landmark, Menu, Send, Wifi, X } from 'lucide-react'
import Message from './components/Message'
import { findBestAnswer } from './search'

const QUICK = [
  ['Come faccio il check-in?', 'Check-in', BookOpen],
  ['Qual è la password del Wi-Fi?', 'Wi-Fi', Wifi],
  ['Dove si fa colazione?', 'Colazione', Coffee],
  ['Come funziona il parcheggio?', 'Parcheggio', Car],
  ['Cosa posso vedere a Ercolano?', 'Cosa vedere', Landmark],
]

const WELCOME = 'Benvenuto a Villa Cua. Sono il concierge digitale: chiedimi informazioni su check-in, Wi-Fi, colazione, parcheggio, pulizie, trasporti e luoghi da visitare.'

export default function App() {
  const [knowledge, setKnowledge] = useState({ entries: [], fallback: '' })
  const [messages, setMessages] = useState([{ role: 'bot', text: WELCOME }])
  const [question, setQuestion] = useState('')
  const [typing, setTyping] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const [lastTopic, setLastTopic] = useState(null)
  const chatRef = useRef(null)

  useEffect(() => {
    fetch('./knowledge/villa_cua.json')
      .then((response) => {
        if (!response.ok) throw new Error('Base di conoscenza non disponibile')
        return response.json()
      })
      .then(setKnowledge)
      .catch(() => setKnowledge({
        entries: [],
        fallback: "Mi dispiace, questa informazione non è presente nella documentazione ufficiale di Villa Cua, contatta l'host.",
      }))
  }, [])

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  function ask(rawQuestion) {
    const clean = rawQuestion.trim()
    if (!clean || typing) return
    setMessages((current) => [...current, { role: 'user', text: clean }])
    setQuestion('')
    setTyping(true)

    window.setTimeout(() => {
      const result = findBestAnswer(clean, knowledge.entries, knowledge.fallback, lastTopic)
      if (result.topic) setLastTopic(result.topic)
      setMessages((current) => [...current, {
        role: 'bot',
        text: result.answer,
        actions: result.actions || [],
      }])
      setTyping(false)
    }, 450)
  }

  function onSubmit(event) {
    event.preventDefault()
    ask(question)
  }

  return (
    <div className="page-shell">
      <main className="app-card">
        <header className="topbar">
          <div className="brand-seal">VC</div>
          <div className="brand-copy">
            <h1>Villa Cua</h1>
            <p><span className="online-dot" /> AI Concierge</p>
          </div>
          <button className="ghost-button" onClick={() => setDrawer(true)} aria-label="Apri documentazione"><Menu /></button>
        </header>

        <section className="chat" ref={chatRef} aria-live="polite">
          {messages.map((message, index) => <Message key={index} {...message} />)}
          {typing && (
            <article className="message bot">
              <div className="avatar">VC</div>
              <div className="bubble typing"><i /><i /><i /></div>
            </article>
          )}
        </section>

        <nav className="quick-actions" aria-label="Domande rapide">
          {QUICK.map(([prompt, label, Icon]) => (
            <button key={label} onClick={() => ask(prompt)}><Icon size={17} />{label}</button>
          ))}
        </nav>

        <form className="composer" onSubmit={onSubmit}>
          <input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Scrivi la tua domanda..." autoComplete="off" aria-label="Domanda" />
          <button type="submit" aria-label="Invia"><Send size={20} /></button>
        </form>
        <p className="disclaimer">Risposte basate esclusivamente sulla documentazione ufficiale di Villa Cua.</p>
      </main>

      <div className={`overlay ${drawer ? 'open' : ''}`} onClick={() => setDrawer(false)} />
      <aside className={`drawer ${drawer ? 'open' : ''}`} aria-hidden={!drawer}>
        <div className="drawer-header"><h2>Documentazione</h2><button onClick={() => setDrawer(false)}><X /></button></div>
        <a href="./assets/brochure-generale.pdf" target="_blank" rel="noreferrer">Brochure generale</a>
        <a href="./assets/istruzioni-checkin-checkout.pdf" target="_blank" rel="noreferrer">Istruzioni check-in e check-out</a>
        <a href="./assets/mappa-parcheggio.pdf" target="_blank" rel="noreferrer">Mappa del parcheggio</a>
      </aside>
    </div>
  )
}
