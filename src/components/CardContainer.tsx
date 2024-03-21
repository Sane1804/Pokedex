import { useState, useEffect } from "react"
import Card from "./Card"

interface SpritesInterface {
    front_default: string,
    front_shiny: string,
}

interface TypeObject {
    name: string, 
    url: string,
}

interface DataType {
    name: string,
    id: number,
    sprites: SpritesInterface,
    types: string[],
    order: number,
}




export default function CardContainer({searchbar}: {searchbar: string}) {

    const [pokemon, setPokemon] = useState<DataType[]>([]);

    

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0", {
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
                    
                    let {name, id, sprites, types, order} = data;
                    let {front_default, front_shiny} = sprites;
                    let newArrOfTypes = types.map((item: {slot: number; type : TypeObject}) => item.type.name);

                    types = newArrOfTypes;

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

                    

                    setPokemon(prev => [...prev, newObj])
                });
            }
        })

    }
    useEffect(fetchData, []);

  return (   

    <section id="card-container">
        <Card pokemonData={pokemon} searched={searchbar}/>
    </section>
  )
}
