
export const catReducer = (state, action) => {
    switch (action.type){
        case 'save':
            return{...state,cats:[...state.cats,action.payload.cat]}
            console.log(state)
        case 'delete':
            console.log(state)
            console.log(action.payload.cat)
           // const remove = state.cats.filter((cat) =>cat !== action.payload.cat)
           //  return {...state,cats:[...state.cats,remove]}
    }
    return {...state}
}