 export const reducer =(state,action)=>{
    return{...state,dogs:[...state.dogs,action.payload.dog]}
}