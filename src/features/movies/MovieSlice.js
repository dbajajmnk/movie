import { createSlice} from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
    movies:[]
}
const movieSlice = createSlice({name:"movieSlice",
initialState,
reducers:{
    addMovies:(state,{payload})=>{
        state.addMovies= payload;
    }
}
})
export const {addMovies} = movieSlice.actions;
export const getMovies = (state)=> state.movies.movies;
export default movieSlice.reducer;