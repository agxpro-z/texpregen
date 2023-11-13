import Menu from './Menu'
import styles from './menuList.module.css'

export default function MenuList({ list }) {
  return (
    <div>
      {list.map((item) => {
        return (
          <>
            <span className={styles['menu-heading']}>{item.name}</span>
            <Menu list={item.list} />
          </>
        )
      })}
    </div>
  )
}
