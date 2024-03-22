import { ChangeEvent } from "react"
export default function Searchbar({updater, value} : {updater : (e: ChangeEvent<HTMLInputElement>) => void, value: string}) {
  return (
    <div id="search-bar-container">

        <input type="text" placeholder="Pikachu" onChange={updater} value={value} id="searchbar"/>
    </div>
  )
}
