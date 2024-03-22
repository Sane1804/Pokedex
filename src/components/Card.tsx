import ImageSymbolType from "./ImageSymbolType"
import PokemonImage from "./PokemonImage"


interface SpritesInterface {
    front_default : string,
    front_shiny: string,
}

interface CardInterface {
    id : number,
    name : string,
    order : number,
    sprites : SpritesInterface
    types: string[]
}

interface PokemoDataInterface {
    pokemonData : CardInterface[],
    searched : string
}



export default function Card({pokemonData, searched}: PokemoDataInterface) {
    
    let copyPokemonData = pokemonData.slice().sort((a, b) => a.id - b.id)


    let content;
    if (searched === ""){

    content = copyPokemonData.map((item) => <div key={item.id} className="card">
        <p className="pokemonId">{item.id}</p>
        <ImageSymbolType types={item.types}/>
        <PokemonImage front_default={item.sprites.front_default} front_shiny={item.sprites.front_shiny} name={item.name}/>
    </div>)

    } else {

        let filteredData = copyPokemonData.filter((item) => item.name.includes(searched) || item.id === Number(searched) || item.types.includes(searched));

        if (filteredData.length > 0){
        content = filteredData.map((item) => <div key={item.id} className="card">
            <p className="pokemonId">{item.id}</p>
            <ImageSymbolType types={item.types}/>
            <PokemonImage front_default={item.sprites.front_default} front_shiny={item.sprites.front_shiny} name={item.name}/>
        </div>)

        } else {
            content = <div id="no-result">No Results</div>
        }

    }



  return (
    <>
    {content}
    </>
  )
}
