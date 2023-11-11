import styles from "@/app/ui/components/navlist.module.css"
import Link from "next/link"
import 'remixicon/fonts/remixicon.css'

export default function NavList({ list }) {
  return (
    <>
      <ul className={styles.ul}>
        {list.map((item) => {
          return (
            <li key="" className={`${styles.li} footer_line`}>
              <Link href={item.link} className={styles.link}>
                <i className={`${item.icon} ${styles.icon}`}></i>
                <span className={styles.name}>{item.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
