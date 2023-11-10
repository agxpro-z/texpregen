import { Poppins } from "next/font/google";
import Navbar from "./Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600'
});

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="brand">
          <h1 className={poppins.className}>texpregen</h1>
        </div>
        <Navbar />
      </div>
    </header>
  )
}
