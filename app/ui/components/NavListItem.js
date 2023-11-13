'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './navListItem.module.css'
import 'remixicon/fonts/remixicon.css'

export default function NavListItem({ item }) {
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = () => { setIsHovering(true) }
  const onMouseLeave = () => { setIsHovering(false) }

  return (
    <li
      className={`${styles.li} footer_line`}
      key=""
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link className={styles.link} href={item.link}>
        {isHovering ? <i className={`${item.icon2} ${styles.icon}`}></i> : <i className={`${item.icon} ${styles.icon}`}></i>}
        <span className={styles.name}>{item.name}</span>
      </Link>
    </li>
  )
}
