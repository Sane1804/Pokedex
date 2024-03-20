import CardContainer from "./CardContainer"
import Searchbar from "./Searchbar"
import { useState } from "react"
import { ChangeEvent } from "react";




export default function Pokemons() {

  const [searchbarValue, setSearchbarValue] = useState<string>("");

  const updateSearchbarValue = (e: ChangeEvent<HTMLInputElement>) => {
    let searchbarValue = e.target.value.toLowerCase();
    setSearchbarValue(searchbarValue)
  }

  return (
    <div id="pokemons">
        <Searchbar updater={updateSearchbarValue} value={searchbarValue}/>
        <CardContainer searchbar={searchbarValue}/>
    </div>
  )
}
