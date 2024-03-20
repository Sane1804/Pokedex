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




export default function CardContainer({searchbar}: {searchbar: string}) {

    const [pokemon, setPokemon] = useState<DataType[]>([]);

    

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=12&offset=0", {
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
                    console.log(data)
                    let {name, id, sprites, types, order} = data;

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
                        "order" : order,
                    }
                    setPokemon((prev) => [...prev, newObj])
                });
            }
        })
    }
    useEffect(fetchData, []);

    let content;
    if (searchbar === ""){
        content = 
            <>
                {pokemon.map((item) => <div key={item.name} className="card">
                    <figure>
                        <img src={item.sprites.front_default} alt={`image of ${item.name} pokemon`} />
                    </figure>
                    <h1>{item.name}</h1>
                </div>)}
            </>
    } else {
        let copyPokemon = pokemon.slice();
        let filtered = copyPokemon.filter((item) => item.name.includes(searchbar))

        content = 
            <>
                {filtered.map((item) => <div key={item.name} className="card">
                    <figure>
                        <img src={item.sprites.front_default} alt={`image of ${item.name} pokemon`} />
                    </figure>
                    <h1>{item.name}</h1>
                </div>)}
            </>
    }
 

  return (   

    <section id="card-container">
        {content}
    </section>
  )
}
