import { v4 as uuidv4 } from "uuid";

const addItem = (newItemName) => ({
  type: "ADD_ITEM",
  payload: { id: uuidv4(), name: newItemName, bought: false },
});

const deleteItem = (item) => ({
  type: "DELETE_ITEM",
  payload: item,
});

const boughtItem = (item) => ({
  type: "BUY_ITEM",
  payload: item,
});

const actions = { addItem, boughtItem, deleteItem };
export default actions;
