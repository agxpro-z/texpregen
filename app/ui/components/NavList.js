import styles from "@/app/ui/components/navList.module.css"
import NavListItem from "./NavListItem"

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
