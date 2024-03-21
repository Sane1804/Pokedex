import ImageSymbolType from "./ImageSymbolType"


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

        <figure>
            <img src={item.sprites.front_default} alt={`images of ${item.name} pokemon`} />
        </figure>
        <h1>{item.name}</h1>
    </div>)

    } else {

        let filteredData = copyPokemonData.filter((item) => item.name.includes(searched) || item.id === Number(searched) || item.types.includes(searched))
        content = filteredData.map((item) => <div key={item.id} className="card">
            <p className="pokemonId">{item.id}</p>
            <ImageSymbolType types={item.types}/>
            <figure>
                <img src={item.sprites.front_default} alt={`images of ${item.name} pokemon`} />
            </figure>
            <h1>{item.name}</h1>
        </div>)

    }



  return (
    <>
    {content}
    </>
  )
}
