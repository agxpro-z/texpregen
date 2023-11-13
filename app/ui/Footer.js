import NavList from "./components/NavList"
import styles from './footer.module.css'

export default function Footer() {
  const list = [
    {
      'name': 'Contact',
      'link': '/contact',
      'icon': 'ri-mail-line',
      'icon2': 'ri-mail-fill',
    },
    {
      'name': 'Support',
      'link': '/support',
      'icon': 'ri-money-dollar-circle-line',
      'icon2': 'ri-money-dollar-circle-fill',
    },
    {
      'name': 'GitHub',
      'link': 'https://github.com',
      'icon': 'ri-github-line',
      'icon2': 'ri-github-fill',
    },
    {
      'name': 'Terms',
      'link': '/terms',
      'icon': 'ri-article-line',
      'icon2': 'ri-article-fill',
    },
    {
      'name': 'Security',
      'link': '/security',
      'icon': 'ri-shield-user-line',
      'icon2': 'ri-shield-user-fill',
    },
    {
      'name': 'Privacy',
      'link': '/privacy',
      'icon': 'ri-lock-2-line',
      'icon2': 'ri-lock-2-fill',
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <NavList list={list} />
      </div>
    </footer>
  )
}
