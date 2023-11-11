import NavList from "./components/NavList"
import styles from './footer.module.css'

export default function Footer() {
  const list = [
    {
      'name': 'Contact',
      'link': '/contact',
      'icon': 'ri-mail-line',
    },
    {
      'name': 'Support',
      'link': '/support',
      'icon': 'ri-money-collar-circle-line',
    },
    {
      'name': 'GitHub',
      'link': 'https://github.com',
      'icon': 'ri-github-line',
    },
    {
      'name': 'Terms',
      'link': '/terms',
      'icon': 'ri-article-line',
    },
    {
      'name': 'Security',
      'link': '/security',
      'icon': 'ri-shield-user-line',
    },
    {
      'name': 'Privacy',
      'link': '/privacy',
      'icon': 'ri-lock-2-line',
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
