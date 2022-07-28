import React from "react"

const POKEMON_API = 'https://raw.githubusercontent.com/' +
'PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props) {
    let spriteImg = `${POKEMON_API}${props.id}.png`

    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{ props.name }</div>
            <img className="Pokecard-img" src={spriteImg}></img>
        </div>
    )
}

export default Pokecard;