import NavListItem from './NavListItem'
import styles from '@/app/ui/components/navList.module.css'

export default function NavList({ list }) {
  return (
    <>
      <ul className={styles.ul}>
        {list.map((item) => {
          return (
            <NavListItem item={item} />
          )
        })}
      </ul>
    </>
  )
}
