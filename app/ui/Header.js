import { Poppins } from "next/font/google";
import NavList from "./components/NavList";
import styles from "./header.module.css"

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600'
});

const list = [
  {
    'name': 'Home',
    'link': '/',
    'icon': 'ri-home-gear-line',
    'icon2': 'ri-home-gear-fill',
  },
  {
    'name': 'About',
    'link': '/about',
    'icon': 'ri-information-line',
    'icon2': 'ri-information-fill',
  },
  {
    'name': 'Sign-in',
    'link': '/account',
    'icon': 'ri-account-circle-line',
    'icon2': 'ri-account-circle-fill',
  },
]

export default function Header() {
  return (
    <header className="ml-8 mr-8">
      <div className="flex items-center justify-between flex-wrap">
        <div className="tracking-wider">
          <h1 className={poppins.className}>texpre-gen</h1>
        </div>
        <nav className="flex justify-center items-center text-lg flex-shrink-0">
          <div className={styles.menubar}>
            <NavList list={list} />
          </div>
          <div className={`${styles['menu-icon']} "m-1 h-6 w-6 items-center"`}>
            <i className="ri-menu-fold-line text-2xl"></i>
          </div>
        </nav>
      </div>
    </header>
  )
}
