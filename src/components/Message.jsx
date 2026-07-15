import { ExternalLink } from 'lucide-react'

export default function Message({ role, text, actions = [] }) {
  return (
    <article className={`message ${role}`}>
      {role === 'bot' && <div className="avatar">VC</div>}
      <div className="bubble">
        <span>{text}</span>
        {actions.length > 0 && (
          <div className="message-actions">
            {actions.map((action) => (
              <a key={`${action.label}-${action.url}`} href={action.url} target="_blank" rel="noreferrer">
                {action.label}<ExternalLink size={14} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
