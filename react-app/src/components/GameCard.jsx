// Single game card — hover to expand and see title, description & buttons
function GameCard({ game }) {
  return (
    <div
      className="game-card"
      style={{ backgroundImage: `url(${game.img})` }}
      title={game.title}
    >
      <div className="card-overlay">
        <div className="card-title">{game.title}</div>
        <div className="card-desc">{game.desc}</div>
        <div className="card-buttons">
          <a href={game.trailer} target="_blank" rel="noreferrer">
            ▶ Trailer
          </a>
          <a href={game.buy} target="_blank" rel="noreferrer">
            🛒 Buy
          </a>
        </div>
      </div>
    </div>
  )
}

export default GameCard
