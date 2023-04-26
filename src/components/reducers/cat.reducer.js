export const catReducer = (state, action) => {
    switch (action.type) {
        case 'save':
            return {...state, cats: [...state.cats, action.payload.cat]}
        case 'delete':
            const remove = state.cats.filter(cat => cat !== action.payload)
            return {...state, cats: [...remove]}
    }
    return {...state}
}


