import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'

export default function Navbar() {
  return (
    <nav className="header-navbar">
      <ul>
        <li><i className="ri-home-gear-line inline_icon"></i>Home</li>
        <li><i className="ri-information-line inline_icon"></i>About</li>
        <li><i className="ri-account-circle-line inline_icon"></i><Link href={"/account"} className='link'>Sign-in</Link></li>
      </ul>
      <div className="navbar-menu">
        <i className="ri-menu-fold-line inline_icon"></i>
      </div>
    </nav>
  )
}
