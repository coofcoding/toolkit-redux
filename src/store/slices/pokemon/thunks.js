import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // TODO: realizar peticion http
        // const resp = await fetch(`${import.meta.env.VITE_API_URL}pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        // console.log(data)

        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);

        const withImagesPromises = data.results.map(async (pokemonInfo) => {

            try {
                const { data } = await pokemonApi.get(`pokemon/${pokemonInfo.name}`);

                const { front_default } = await data.sprites.other.showdown;

                return {
                    ...pokemonInfo,
                    gif: front_default
                }

            } catch (e) {
                throw new Error('No data geted')
            }

        })

        const withImages = await Promise.all(withImagesPromises);
        console.log(withImages)

        dispatch(setPokemons({
            pokemons: withImages,
            page: page + 1
        })
        )
    }
}