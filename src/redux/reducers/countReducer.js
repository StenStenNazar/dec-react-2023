
const stateInit = 0
export const countReducer = (state=stateInit,action)=>{
    switch (action.type){
        case 'INC':
            return  state +=1;
        case 'DEC':
            return state -=1;
        case "RES":
            return state =0
    }
    return state
}