import { ReactElement } from "react"


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

type SubArray = CardInterface[]

type SubArrElement = ReactElement[]

export default function Card({pokemonData, searched}: PokemoDataInterface) {
    let copyPokemonData = pokemonData.slice().sort((a, b) => a.id - b.id)
    let pokemonGroups: SubArray[] = []
    let data: SubArrElement[] = []

    for (let i = 0; i < copyPokemonData.length; i+=3){
        pokemonGroups.push(copyPokemonData.slice(i, i+3))
    }


    if (searched === ""){
        for(let i = 0; i < pokemonGroups.length; i++){
            data.push(pokemonGroups[i].map((item) => <div key={item.id} className="card">
            <figure>
                <img src={item.sprites.front_default} alt="" />
            </figure>
            <h1>{item.name}</h1>
        </div>))
        }
    } else {
        let copyData = pokemonGroups.filter((item) => {
            for (let j = 0; j < item.length; j++){
                if (item[j].name.includes(searched)){
                    return item;
                }
            }
        })
        for (let i = 0; i < copyData.length; i++){
            data.push(copyData[i].map((item) => <div key={item.id} className="card">
                <figure>
                    <img src={item.sprites.front_default} alt="" />
                </figure>
                <h1>{item.name}</h1>
            </div>))
        }

    }

    let content = data.map((item, index) => <div key={index} className="big-card">{item}</div>)



  return (
    <>
    {content}
    </>
  )
}
