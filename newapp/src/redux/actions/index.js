
// import { ADD_COLLECTION, DELETE_COLLECTION } from './types';


// let nextAddCollectionId = 0;

// export const addCollection = content => ({
//   type: ADD_COLLECTION,
//   payload: {
//     id: ++ nextAddCollectionId ,
//     content,
//   }
// } 

// );

// export const deleteCollection = id => ({
//   type: DELETE_COLLECTION,
//   payload: {
//     id
//   }
// });


export const actionCreators = {
  addToList: data => ({ type: "ADD_TO_LIST", payload: data }),
  removeItem: data => ({ type: "REMOVE_ITEM", payload: data }),
  clearItems: () => ({ type: "CLEAR_ITEMS" })
};