import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "../../store/slices/pokemon/thunks";
import { startLoadingPokemons, setPokemons } from '../../store';
import { useSelector } from "react-redux";

export const PokemonApp = () => {

  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  console.log(pokemons)

  useEffect(() => {

    dispatch(getPokemons());

  }, [page])

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      {
        (isLoading) ? <span className="loading-alert">Loading...</span> : ''
      }

      {
        pokemons.map((pokemon) => (
          <div>
            {pokemon.name}
          </div>
        ))
      }

      {/* <button onClick={ () => dispatch( getPokemons(page) ) }>
        Next
      </button> */}
    </>
  )
}
