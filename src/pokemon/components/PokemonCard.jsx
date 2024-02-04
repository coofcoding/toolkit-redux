import './PokemonCard.css';

export const PokemonCard = ({ pokemon }) => {
  return (
    <>
      <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pokémon)`} target='_blank'  rel="noreferrer noopener">
        <div className="pokemon-card">
          <div className='poke-img'>
            <img src={pokemon.gif} />
          </div>
        </div>
        <div className='info'>
          <h2>{pokemon.name}</h2>
        </div>
      </a>
    </>
  )
}
