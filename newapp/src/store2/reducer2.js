const initialState = {
    items: []
  };
  let id = 0;
  const addItem = (array, action) => {
    return array.map((item, index) => {
      if (index !== action.payload) {
        return item;
               
      }
  
      return {
        ...item,
        inCollection: true,
      };
    });
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
              inCollection: true,
              id: ++id,
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
  