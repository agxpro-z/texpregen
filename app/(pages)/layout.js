import MenuList from '../ui/components/MenuList'
import styles from './style.module.css'

export default function Layout({ children }) {
  const list = [
    {
      'name': 'Home',
      'list': [
        {'name': 'Home', 'link': '/'},
      ],
    },
    {
      'name': 'Array',
      'list': [
        {'name': 'Sequence', 'link': '/array/sequence', },
      ],
    },
  ];

  return (
    <section className={styles['main-section']}>
      <aside className={styles['menu-list']}>
        <MenuList list={list} />
      </aside>
      <main className={styles['main-content']}>
        {children}
      </main>
    </section>
  )
}
