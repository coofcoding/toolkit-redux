import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);

        const withImagesPromises = data.results.map(async (pokemonInfo) => {

            const { data } = await pokemonApi.get(`pokemon/${pokemonInfo.name}`);

            const { front_default } = await data.sprites.other.showdown;

            return {
                ...pokemonInfo,
                gif: front_default
            }

        })

        const withImages = await Promise.all(withImagesPromises);

        dispatch(setPokemons({
            pokemons: withImages,
            page: page + 1
        })
        )
    }
}