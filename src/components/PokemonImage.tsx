import { useState } from "react";

export default function PokemonImage({front_default, front_shiny, name} : {front_default: string; front_shiny: string; name:string} ) {

    const [imgSwitch, setImgSwitch] = useState<boolean>(true);

    const handleSwitchImage = () => {
        setImgSwitch(!imgSwitch)
    }

    let url;
    let pokemonName;
    if (imgSwitch){
        url = front_default
        pokemonName = name;
    } else {
        url = front_shiny
        pokemonName = name + " shiny";
    }

  return (
    <>
    <figure>
        <img src={url} alt={`images of ${pokemonName} pokemon`}/>
        <input type="checkbox" className="card-checkbox" onClick={handleSwitchImage}/>
    </figure>
    <p className="pokemon-name">{pokemonName}</p>
    </>
  )
}
