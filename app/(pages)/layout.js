import MenuList from "../ui/components/MenuList"
import "./style.css"

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
    <section className="main-section">
      <aside className="menu-list">
        <MenuList list={list} />
      </aside>
      <main className="main-content">
        {children}
      </main>
    </section>
  )
}
