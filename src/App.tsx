import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { DocumentsDrawer } from './components/DocumentsDrawer'
import { MessageBubble } from './components/MessageBubble'
import { TypingIndicator } from './components/TypingIndicator'
import { knowledge } from './data/knowledge'
import { searchKnowledge } from './lib/search'
import type { Message } from './types'

const quickQuestions = [
  { icon: '🔑', label: 'Check-in', question: 'Come faccio il check-in?' },
  { icon: '📶', label: 'Wi-Fi', question: 'Qual è la password del Wi-Fi?' },
  { icon: '☕', label: 'Colazione', question: 'Dove si fa colazione?' },
  { icon: '🚗', label: 'Parcheggio', question: 'Come funziona il parcheggio?' },
  { icon: '🏛️', label: 'Cosa vedere', question: 'Cosa posso vedere a Ercolano?' },
  { icon: '🍽️', label: 'Ristoranti', question: 'Dove posso mangiare?' },
]

const initialMessage: Message = {
  id: 'welcome',
  role: 'assistant',
  text:
    'Benvenuto a Villa Cua. Sono il concierge digitale e posso aiutarti con check-in, Wi-Fi, colazione, parcheggio, pulizie, trasporti e luoghi da visitare.',
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([initialMessage])
  const [question, setQuestion] = useState('')
  const [typing, setTyping] = useState(false)
  const [lastTopic, setLastTopic] = useState<string>()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const ask = (rawQuestion: string) => {
    const cleanQuestion = rawQuestion.trim()
    if (!cleanQuestion || typing) return

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      text: cleanQuestion,
    }

    setMessages((current) => [...current, userMessage])
    setQuestion('')
    setTyping(true)

    window.setTimeout(() => {
      const result = searchKnowledge(cleanQuestion, knowledge, lastTopic)

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          text: result.answer,
          actions: result.actions,
        },
      ])
      setLastTopic(result.topic)
      setTyping(false)
    }, 500)
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    ask(question)
  }

  const transcriptLabel = useMemo(
    () => `${messages.length} messaggi nella conversazione`,
    [messages.length],
  )

  return (
    <div className="page">
      <main className="app-shell">
        <header className="topbar">
          <div className="brand">
            <div className="brand-logo">VC</div>
            <div>
              <h1>Villa Cua</h1>
              <p><span className="online-dot" /> AI Concierge</p>
            </div>
          </div>

          <button
            className="menu-button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Apri documentazione"
          >
            ☰
          </button>
        </header>

        <section className="chat" aria-label={transcriptLabel} aria-live="polite">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {typing && <TypingIndicator />}
          <div ref={chatEndRef} />
        </section>

        <section className="quick-actions" aria-label="Domande rapide">
          {quickQuestions.map((item) => (
            <button key={item.label} onClick={() => ask(item.question)}>
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </section>

        <form className="composer" onSubmit={submit}>
          <input
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Scrivi la tua domanda..."
            aria-label="Scrivi una domanda"
          />
          <button type="submit" aria-label="Invia domanda" disabled={typing}>
            ➤
          </button>
        </form>

        <footer>
          Le risposte si basano esclusivamente sulla documentazione ufficiale di Villa Cua.
        </footer>
      </main>

      <DocumentsDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  )
}
