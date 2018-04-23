import {combineReducers} from 'redux';
import {todoReducer} from './todoReducer';
import {todoGIFServiceReducer} from "./todoGIFServiceReducer";



export const rootReducer = combineReducers({
    todos: todoReducer,
    imageUrl: todoGIFServiceReducer
});
