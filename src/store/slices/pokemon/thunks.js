import { startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {
    return ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: realizar peticion http
    }
}