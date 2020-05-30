import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component{
    render() {
        const {pokemons} = this.props;
        console.log(this.props.pk);
        return (
            <div>
                {pokemons.map(pokemon => <Pokemon pk={pokemon} key={pokemon.id}/>)}
            </div>
        )
    }
}

export default Pokedex;