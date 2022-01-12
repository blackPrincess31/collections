// import { ADD_COLLECTION , DELETE_COLLECTION} from "../actions/types";

// export const initialState = {
//   id: [],
//   content:[],
// };

// export default function reducer (state = initialState, action) {
//   switch (action.type) {
//     case ADD_COLLECTION: 
//     {
//       return {
//         ...state,
//           id: action.payload.id,
//           content: action.payload.content,
//       }
//     }
    
//     case DELETE_COLLECTION: {
//       const { id } = action.payload;
//       return {
//         ...state,
//         byIds: {
//           ...state.byIds,
//           [id]: {
//             ...state.byIds[id],
//           }
//         }
//       };
//     }
//     default:
//       return state;
//   }
// }

 
// export default function (state = initialState(), action) {
//     switch (action.type) {
//       case ADD_COLLECTION: 
//       {
//         return {
//           ...state,
//         content: [
//           ...state.content,
//           {            
//             value: action.content,
//         }
        
//       default:
//         return state;
//     }
//   }

const initialState = {
  items: []
};

const updateObjectInArray = (array, action) => {
  return array.map((item, index) => {
    if (index !== action.payload) {
      return item;
    }

    return {
      ...item,
    };
  });
};

const removeItem = (array, action) => {
  return array.filter((item, index) => index !== action.payload);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        items: [
          ...state.items,
          {            
            value: action.payload,
          }
        ]
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        items: updateObjectInArray(state.items, action)
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: removeItem(state.items, action)
      };
    case "CLEAR_ITEMS": {
      return {
        items: []
      };
    }
    default:
      return state;
  }
};