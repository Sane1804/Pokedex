import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div id="home">
      <header id="background-header"></header>
      <main id="main">
        <h1 className="welcome-header">Welcome to my Pokedex</h1>
        <p>Here you'll find a list of the first 150 pokemons from the first generation</p>
        <Link to={"/pokemons"}><button>Go take a look</button></Link>
      </main>
    </div>
  )
}
