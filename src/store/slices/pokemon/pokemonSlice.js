import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: ( state ) => {
            //! https://react-redux.js.org/tutorials/quick-start
            state.isLoading = true;
        },
        setPokemons: ( state, action ) => {
            //! https://react-redux.js.org/tutorials/quick-start
            console.log(action.payload)
        },
    }
});
        
// Action creators are generated for each case reducer function
export const { setPokemons, startLoadingPokemons } = pokemonSlice.actions;