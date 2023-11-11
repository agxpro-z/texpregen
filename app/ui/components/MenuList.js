import Menu from "./Menu"
import styles from "./menulist.module.css"

export default function MenuList({ list }) {
  return (
    <div>
      {list.map((item) => {
        console.log(item)
        return (
          <>
            <span className={styles.menu_heading}>{item.name}</span>
            <Menu list={item.list} />
          </>
        )
      })}
    </div>
  )
}
