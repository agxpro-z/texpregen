import 'remixicon/fonts/remixicon.css'

export default function Navbar() {
  return (
    <nav className="header-navbar">
      <ul>
        <li><i className="ri-home-gear-line"></i>Home</li>
        <li><i className="ri-information-line"></i>About</li>
        <li><i className="ri-account-circle-line"></i>Sign-in</li>
      </ul>
      <div className="navbar-menu">
        <i className="ri-menu-fold-line"></i>
      </div>
    </nav>
  )
}
