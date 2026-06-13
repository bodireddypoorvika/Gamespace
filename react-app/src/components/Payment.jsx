import { useState } from 'react'
import '../styles/Payment.css'

function Payment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gameTitle: '',
    amount: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const [orderPlaced, setOrderPlaced] = useState(false)

  const gameOptions = [
    { title: 'Call of Duty: Black Ops 6', price: 69.99 },
    { title: 'Blackout', price: 59.99 },
    { title: 'Alien Shooter', price: 49.99 },
    { title: 'Cricket 7', price: 59.99 },
    { title: 'Dark Age', price: 59.99 },
    { title: 'FC 25', price: 69.99 },
    { title: 'GTA Online', price: 39.99 },
    { title: 'GTA V', price: 59.99 },
    { title: 'PUBG', price: 29.99 },
    { title: 'Need for Speed', price: 59.99 },
    { title: 'Red Dead Redemption', price: 59.99 },
    { title: 'Rugby Champions', price: 49.99 },
    { title: 'Speed Racer', price: 39.99 },
    { title: 'Tomb Raider', price: 49.99 },
    { title: 'WWE 2K', price: 69.99 },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'gameTitle' && {
        amount: gameOptions.find(g => g.title === value)?.price || '',
      }),
    }))
  }

  const handleCardNumberInput = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length <= 16) {
      value = value.replace(/(\d{4})(?=\d)/g, '$1 ')
      setFormData(prev => ({ ...prev, cardNumber: value }))
    }
  }

  const handleExpiryInput = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length <= 4) {
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2)
      }
      setFormData(prev => ({ ...prev, expiryDate: value }))
    }
  }

  const handleCvvInput = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length <= 3) {
      setFormData(prev => ({ ...prev, cvv: value }))
    }
  }

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.gameTitle ||
        !formData.cardNumber || !formData.expiryDate || !formData.cvv) {
      alert('Please fill in all fields')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert('Please enter a valid email')
      return false
    }
    if (formData.cardNumber.replace(/\s/g, '').length !== 16) {
      alert('Card number must be 16 digits')
      return false
    }
    if (formData.expiryDate.length !== 5) {
      alert('Expiry date must be MM/YY')
      return false
    }
    if (formData.cvv.length !== 3) {
      alert('CVV must be 3 digits')
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setOrderPlaced(true)
      setTimeout(() => {
        setOrderPlaced(false)
        setFormData({
          name: '',
          email: '',
          gameTitle: '',
          amount: '',
          cardNumber: '',
          expiryDate: '',
          cvv: '',
        })
      }, 3000)
    }
  }

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-header">
          <h1>Secure Checkout</h1>
          <p>Complete your purchase with confidence</p>
        </div>

        {orderPlaced ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your purchase, {formData.name}!</p>
            <p>Check your email for the download link and receipt.</p>
          </div>
        ) : (
          <form className="payment-form" onSubmit={handleSubmit}>
            {/* Customer Information */}
            <div className="form-section">
              <h3>Customer Information</h3>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Game Selection */}
            <div className="form-section">
              <h3>Select Game</h3>
              <div className="form-group">
                <label htmlFor="gameTitle">Game Title *</label>
                <select
                  id="gameTitle"
                  name="gameTitle"
                  value={formData.gameTitle}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Choose a game...</option>
                  {gameOptions.map((game, idx) => (
                    <option key={idx} value={game.title}>
                      {game.title} - ${game.price.toFixed(2)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount *</label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  value={formData.amount ? `$${formData.amount}` : ''}
                  readOnly
                  placeholder="$0.00"
                />
              </div>
            </div>

            {/* Payment Information */}
            <div className="form-section">
              <h3>Payment Information</h3>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number *</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleCardNumberInput}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date *</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleExpiryInput}
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV *</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleCvvInput}
                    placeholder="123"
                    maxLength="3"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Complete Purchase
            </button>

            <p className="security-note">
              🔒 Your payment information is secure and encrypted
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default Payment
