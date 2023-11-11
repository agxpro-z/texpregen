import Header from "../components/Header";
import Footer from "../components/Footer";
import "./style.css"

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
