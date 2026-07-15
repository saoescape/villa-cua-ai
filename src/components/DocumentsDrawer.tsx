type Props = {
  open: boolean
  onClose: () => void
}

export function DocumentsDrawer({ open, onClose }: Props) {
  return (
    <>
      <div className={`drawer-overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer-header">
          <div>
            <small>Villa Cua</small>
            <h2>Documentazione ufficiale</h2>
          </div>
          <button onClick={onClose} aria-label="Chiudi">×</button>
        </div>

        <a href="./docs/brochure-generale.pdf" target="_blank" rel="noreferrer">
          <strong>Brochure generale</strong>
          <span>Servizi, attrazioni, ristoranti e trasporti</span>
        </a>
        <a href="./docs/istruzioni-checkin-checkout.pdf" target="_blank" rel="noreferrer">
          <strong>Check-in e check-out</strong>
          <span>Accessi, codici, card e orari</span>
        </a>
        <a href="./docs/mappa-parcheggio.pdf" target="_blank" rel="noreferrer">
          <strong>Mappa parcheggio</strong>
          <span>Ingresso e disposizione dei posti auto</span>
        </a>
      </aside>
    </>
  )
}
