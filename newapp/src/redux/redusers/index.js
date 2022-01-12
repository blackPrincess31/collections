
// import { createStore, applyMiddleware } from 'redux';
// import { ADD_COLLECTION, DELETE_COLLECTION } from '../actions/types';
// import thunk from 'redux-thunk';

// import { combineReducers } from "redux";

// import collections from "./collections";


// export const store = createStore( CollectionReducer, applyMiddleware(thunk));


// export default function CollectionReducer(state = [], action) {
//   switch (action.type) {
//     case ADD_COLLECTION:
//       return ([...state, action.payload],
//        function (dispatch) {
//         fetch('http://localhost:3000/collections')
//         .then (response => response.json())
//         .then (json => dispatch(ADD_COLLECTION(json))) }
//       )
   
//     case DELETE_COLLECTION:
//       return state.filter(collection => collection.id !== action.payload.id);
//     default:
//       return state;
//   }
// }