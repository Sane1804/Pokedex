import { useState, useEffect } from "react"

interface SpritesInterface {
    front_default: string,
    front_shiny: string,
}

interface DataType {
    name: string,
    id: number,
    sprites: SpritesInterface,
    types: object[],
}



export default function CardContainer() {
    const [pokemon, setPokemon] = useState<DataType[]>([]);

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=49&offset=0", {
            method: "GET",
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json",
            }
        }).then((response) => response.json()).then((dataArr):void => {
            for (let i = 0; i < dataArr.results.length; i++){
                fetch(dataArr.results[i].url, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        'Content-type': "application/json"
                    }
                }).then((response) => response.json()).then((data) => {
                    let {name, id, sprites, types} = data;

                    let {front_default, front_shiny} = sprites;

                    sprites = {
                        "front_default" : front_default,
                        "front_shiny" : front_shiny,
                    }

                    let newObj = {
                        "name" : name,
                        "id" : id,
                        "sprites" : sprites,
                        "types" : types,
                    }
                    setPokemon(prevPokemon => [...prevPokemon, newObj])
                });
            }
        })
    }
    useEffect(fetchData, []);
  return (   

    <section id="card-container">
        
            {pokemon.map(item => <div key={item.id} className="card">
                <figure>
                    <img src={item.sprites.front_default} alt={`images of pokemon ${item.name}`}/>
                </figure>
                <h1>{item.name}</h1>
            </div>)}
    </section>
  )
}
