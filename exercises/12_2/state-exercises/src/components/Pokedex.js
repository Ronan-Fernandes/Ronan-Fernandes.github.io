import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            index : 0,
            disabled : false,
            type: 'all',
        };
    }

    nextPokemon = (NumeroPokemons) => {
        this.setState(state => ({
            index: (state.index + 1) % NumeroPokemons
        }));
    }

    filterType = () => {
        const { pokemons } = this.props;
        const types = pokemons.reduce((acc, pokemon) => {
            if(!acc[pokemon.type]) acc[pokemon.type] = [];
            acc[pokemon.type].push(pokemon)
            return acc;
        }, {})
        console.log(types.Fire.length)
        return types;
    }

    setType(type, pokemonsByType) {
        this.setState({
            type: type,
            disabled: (pokemonsByType[type].length <= 1) ? true : false
        });
    }

    render() {
        const { pokemons } = this.props;
        const typesOfPokemons = this.filterType();
        const keysOfTypes = Object.keys(typesOfPokemons);
        const length = (this.state.type === 'all') ? pokemons.length : typesOfPokemons[this.state.type].length
        console.log(typesOfPokemons);
        // console.log(Object.keys(this.filterType())
        // console.log(pokemons.length)
        // console.log(this.state.index)
        // console.log(pokemons[this.state.index]);
        return (
            <div>
                <Pokemon pk={(this.state.type === 'all') ? pokemons[this.state.index] : typesOfPokemons[this.state.type][this.state.index]} 
                    key={(this.state.type === 'all') ? pokemons[this.state.index].id : typesOfPokemons[this.state.type][this.state.index].id}/>
                
                <button disabled={this.state.disabled} onClick={() => this.nextPokemon(length)}>Next Pokemon</button>
                {keysOfTypes.map(type => <button onClick={() => this.setType(type, typesOfPokemons)} key={type}>{type}</button>)}
            </div>
        )
    }
}

export default Pokedex;