export default function shoppingListReducer(state = [], action) {
  switch (action.type) {
    case "ADD_LIST":
      return state;
    case "ADD_ITEM":
      const item = state.find((i) => i.name === action.payload.name);
      // errores o notificaciones con render, en el componente
      if (!item) {
        return [...state, action.payload];
      } else {
        return state;
      }

    case "DELETE_ITEM":
      const newState = state.filter((i) => i.id !== action.payload.id);
      return newState;

    case "BUY_ITEM":
      return state.map((item) => {
        if (item.name !== action.payload.name) return item;
        return {
          ...item,
          bought: !action.payload.bought,
        };
      }, console.log(action.payload.bought));

    default:
      return state;
  }
}
