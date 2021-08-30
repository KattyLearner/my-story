import logger from 'redux-logger'
import rootReducer from "./root-reducer";
import {applyMiddleware, createStore} from "redux";


const middlewares = [logger]
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store