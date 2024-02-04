import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "../../store/slices/pokemon/thunks";
import { useSelector } from "react-redux";
import { PokemonList } from "../components";

export const PokemonApp = () => {

  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getPokemons(page));

  }, [page])

  return (
    <>
      <h1>Pokémon List</h1>
      {
        (isLoading)
          ? <span className="loading-alert">Loading...</span>
          : <PokemonList
            pokemons={pokemons}
          />
      }

      <div className="buttons">
        <button disabled={(isLoading || page === 0 ? 'disabled' : '')} onClick={() => dispatch(getPokemons(page-1))}>
          Prev
        </button>
        <button disabled={(isLoading ? 'disabled' : '')} onClick={() => dispatch(getPokemons(page+1))}>
          Next
        </button>
      </div>
    </>
  )
}
