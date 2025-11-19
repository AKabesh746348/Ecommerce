import { combineReducers } from "redux"

const initialAddstate ={
    result : 0,
}

const addReducer = (state = initialAddstate , action) =>{
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                result : state.result + action.payload,
            }
            default:
                return state
    }
}

const initialSubstate ={
    result : 0,
}


const subReducer = (state = initialSubstate , action) =>{
    switch(action.type){
        case 'SUB':
            return{
                ...state,
                result : state.result - action.payload,
            }
            default:
                return state
    }
}

const initialMUltistate ={
    result : 1,
}


const multiplyReducer = (state = initialMUltistate , action) =>{
    switch(action.type){
        case 'MULTIPLY':
            return{
                ...state,
                result : state.result * action.payload,
            }
            default:
                return state
    }
}

const initialDividestate ={
    result : 1,
}


const divideReducer = (state = initialDividestate , action) =>{
    switch(action.type){
        case 'DIVIDE':
            return{
                ...state,
                result : state.result / action.payload,
            }
            default:
                return state
    }
}

const initialModulusstate ={
    result : 64,
}


const modulusReducer = (state = initialModulusstate , action) =>{
    switch(action.type){
        case 'MODULUS':
            return{
                ...state,
                result : state.result % action.payload,
            }
            default:
                return state
    }
}


const rootReducer = combineReducers({
    add : addReducer,
    subtract : subReducer,
    multiply : multiplyReducer,
    divide : divideReducer,
    modulus : modulusReducer,
})

export default rootReducer;