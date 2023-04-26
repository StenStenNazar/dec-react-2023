export const reducer = (state, action) => {
    switch (action.type) {
        case 'save':
            return {...state, dogs: [...state.dogs, action.payload.dog]}
        case 'delete':
            const remove = state.dogs.filter(dog => dog !== action.payload)
            return {...state, dogs: [...remove]}
    }
    return {...state}
}