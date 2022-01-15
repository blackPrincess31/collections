const initialState = {
    items: []
  };
   
  const removeItemFromList = (array, action) => {
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
              id: Date.now()
            }
          ]
        };
      
      case "REMOVE_ITEM":
        return {
          ...state,
          items: removeItemFromList(state.items, action)
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
  