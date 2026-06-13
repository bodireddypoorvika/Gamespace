// Hero banner — GTA VI featured section
// Hover to reveal the two info overlays and the order button
function HeroSection() {
  return (
    <section className="hero" id="Home">
      {/* Decorative side images (fade out on hover) */}
      <div className="hero-img-left" />
      <div className="hero-img-right" />

      {/* Left text overlay */}
      <div className="hero-left">
        <div>
          <strong>TOP of the Charts</strong>
          <br /><br />
          Available this Winter. Get ready to witness the greatest
          open-world game with an exciting story-line.
          <br /><br />
          !! Click the button below to Pre-Order !!
        </div>
      </div>

      {/* Right text overlay */}
      <div className="hero-right">
        <div>
          <strong>Release:</strong> Expected Fall 2025 — confirmed by Take-Two Interactive.
          <br /><br />
          <strong>Setting:</strong> Modern Vice City inspired by Miami. Protagonists Lucia &amp; Jason on high-stakes heist missions.
          <br /><br />
          <strong>Platforms:</strong> PS5, Xbox Series X|S, PC
        </div>
      </div>

      {/* Pre-order button */}
      <button className="order-btn">Pre-Order</button>
    </section>
  )
}

export default HeroSection
