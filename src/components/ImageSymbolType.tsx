import bug from "../images/pokemon-icon-type/pokemon_bug_type_icon.svg";
import dark from "../images/pokemon-icon-type/pokemon_dark_type_icon.svg";
import dragon from "../images/pokemon-icon-type/pokemon_dragon_type_icon.svg";
import electric from "../images/pokemon-icon-type/pokemon_electric_type_icon.svg";
import fairy from "../images/pokemon-icon-type/pokemon_fairy_type_icon.svg";
import fighting from "../images/pokemon-icon-type/pokemon_fighting_type_icon.svg";
import fire from "../images/pokemon-icon-type/pokemon_fire_type_icon.svg";
import flying from "../images/pokemon-icon-type/pokemon_flying_type_icon.svg";
import ghost from "../images/pokemon-icon-type/pokemon_ghost_type_icon.svg";
import grass from "../images/pokemon-icon-type/pokemon_grass_type_icon.svg";
import ground from "../images/pokemon-icon-type/pokemon_ground_type_icon.svg";
import ice from "../images/pokemon-icon-type/pokemon_ice_type_icon.svg";
import normal from "../images/pokemon-icon-type/pokemon_normal_type_icon.svg";
import poison from "../images/pokemon-icon-type/pokemon_poison_type_icon.svg";
import pyschic from "../images/pokemon-icon-type/pokemon_psychic_type_icon.svg";
import rock from "../images/pokemon-icon-type/pokemon_rock_type_icon.svg";
import steel from "../images/pokemon-icon-type/pokemon_steel_type_icon.svg";
import water from "../images/pokemon-icon-type/pokemon_water_type_icon.svg";

export default function ImageSymbolType({types} : {types : string[]}) {
    let copyTypes = types.slice();

    let content = copyTypes.map((item) => {
        let img: string= "";
        switch(item){
            case "bug":
                img = bug;
                break;
            case "dark":
                img = dark;
                break;
            case "dragon":
                img = dragon;
                break;
            case "electric":
                img = electric;
                break;
            case "fairy":
                img = fairy;
                break;
            case "fighting":
                img = fighting;
                break;
            case "fire":
                img = fire;
                break;
            case "flying":
                img = flying;
                break;
            case "ghost":
                img = ghost;
                break;
            case "grass":
                img = grass;
                break;
            case "ground":
                img = ground;
                break;
            case "ice":
                img = ice;
                break;
            case "normal":
                img = normal;
                break;
            case "poison":
                img = poison;
                break;
            case "psychic":
                img = pyschic;
                break;
            case "rock":
                img = rock;
                break;
            case "steel":
                img = steel;
                break;
            case "water":
                img = water;         

        }

        return (
            <>
                <img src={img} alt={`Symbol of pokemon type of ${item}`} key={item} className="symbol" title={item}/>
            </>
        )
    })

  return (
    <div id="symbols-container">
        {content}
    </div>
  )
}
