import type { Message } from '../types'

export function MessageBubble({ message }: { message: Message }) {
  const isAssistant = message.role === 'assistant'

  return (
    <article className={`message-row ${message.role}`}>
      {isAssistant && <div className="avatar">VC</div>}
      <div className="message-bubble">
        <p>{message.text}</p>
        {message.actions && message.actions.length > 0 && (
          <div className="message-actions">
            {message.actions.map((action) => (
              <a
                key={`${message.id}-${action.url}`}
                href={action.url}
                target="_blank"
                rel="noreferrer"
              >
                {action.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
