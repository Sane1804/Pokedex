import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav id="navbar">
        <i id="Logo">Pokemon</i>
        <ul id="nav-list">
            <li className="nav-btn"><Link to={"/"}>Home</Link></li>
            <li className="nav-btn"><Link to={"/pokemons"}>Pokemons</Link></li>
        </ul>
    </nav>
  )
}
