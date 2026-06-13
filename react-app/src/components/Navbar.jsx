function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      <a href="#Home" onClick={() => setCurrentPage('home')}>Home</a>
      <a href="#AboutUS">About Us</a>
      <a href="#Shop">Shop</a>
      <a href="#Blog">Blog</a>
      <a href="#Sale">Sale</a>
      <span>
        <label htmlFor="categories">Categories</label>
        <select name="categories" id="categories">
          <option value="action">Action</option>
          <option value="role">Role-Playing</option>
          <option value="sports">Sports</option>
          <option value="sliceoflife">Slice of Life</option>
          <option value="survival">Survival</option>
          <option value="battle">Battle Royal</option>
        </select>
      </span>
      <div className="nav-buttons">
        <button onClick={() => setCurrentPage('home')}>Register</button>
        <button onClick={() => setCurrentPage('payment')}>🛒 Checkout</button>
      </div>
    </nav>
  )
}

export default Navbar
