"use client"

import Link from "next/link"
import { useState } from "react"
import 'remixicon/fonts/remixicon.css'
import styles from "./navListItem.module.css"

export default function NavListItem({ item }) {
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = () => { setIsHovering(true) }
  const onMouseLeave = () => { setIsHovering(false) }

  return (
    <li key="" className={`${styles.li} footer_line`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link href={item.link} className={styles.link}>
        {isHovering ? <i className={`${item.icon2} ${styles.icon}`}></i> : <i className={`${item.icon} ${styles.icon}`}></i>}
        <span className={styles.name}>{item.name}</span>
      </Link>
    </li>
  )
}
