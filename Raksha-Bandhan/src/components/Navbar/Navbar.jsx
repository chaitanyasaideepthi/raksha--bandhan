import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Rakhi Bond ❤️
      </div>

      <ul className="nav-links">
        <li>
          <a href="#special">Special</a>
        </li>

        <li>
          <a href="#memories">Memories</a>
        </li>

        <li>
          <a href="#surprise">Surprise</a>
        </li>
      </ul>

      <button className="rakhi-btn">
        🪢 Happy Raksha Bandhan
      </button>
    </nav>
  );
}

export default Navbar;