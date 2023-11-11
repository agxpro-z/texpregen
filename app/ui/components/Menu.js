import Link from "next/link"
import styles from "./menu.module.css"

export default function Menu({ list }) {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key="" className={styles.menuitem}>
            <Link href={item.link} className={styles.link}>{item.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}
