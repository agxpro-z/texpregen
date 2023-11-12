"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import clsx from "clsx"
import styles from "./menu.module.css"

export default function Menu({ list }) {
  const pathName = usePathname();
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key="" className={styles.menuitem}>
            <Link href={item.link} className={clsx(styles.link, {[styles.active]: pathName == item.link})}>{item.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}
