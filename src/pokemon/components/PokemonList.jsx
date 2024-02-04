import { PokemonCard } from "./"
import './PokemonList.css';

export const PokemonList = ({ pokemons }) => {
    return (
        <div className="poke-list">
            {
                pokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        pokemon={pokemon}
                    />
                ))
            }
        </div>
    )
}
