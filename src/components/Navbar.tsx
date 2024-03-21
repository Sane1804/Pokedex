import { Link } from "react-router-dom"
import pokemonLogo from "../images/pokemon-logo.svg"

export default function Navbar() {
  return (
    <nav id="navbar">
      <div>
        <img src={pokemonLogo} alt="pokemon logo" id="logo"/>
      </div>
        <ul id="nav-list">
            <li className="nav-btn"><Link to={"/"}>Home</Link></li>
            <li className="nav-btn"><Link to={"/pokemons"}>Pokemons</Link></li>
        </ul>
    </nav>
  )
}
