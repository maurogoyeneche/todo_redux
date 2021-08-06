import React from "react";
import { Input, Fab } from "@material-ui/core";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import shoppingListActions from "../redux/actions/shoppingListActions";

const ShoppingList = () => {
  const [newItemName, setNewItemName] = useState([]);
  const dispatch = useDispatch(); //despachdor de acciones
  const items = useSelector((state) => state.list);
  console.log(items);

  return (
    <>
      <div className="container mt-4">
        <div className="">
          <form
            className="d-flex"
            onSubmit={(event) => {
              event.preventDefault();
              if (newItemName !== "") {
                dispatch(shoppingListActions.addItem(newItemName));
                setNewItemName("");
              }
            }}
          >
            <Fab
              className="me-3"
              type="submit"
              color="primary"
              size="small"
              aria-label="add"
            >
              +
            </Fab>
            <Input
              id="inputNewItem"
              placeholder="Add item"
              value={newItemName}
              inputProps={{ "aria-label": "description" }}
              className=" mb-3 "
              onChange={(event) => {
                setNewItemName(event.target.value);
              }}
            />
          </form>
        </div>
        <ul className="list-group">
          {items
            .sort((a, b) => {
              return a.bought - b.bought;
            })
            .map((item) => {
              return (
                <div className="row align-items-center justify-content-between">
                  <div className="col-10">
                    <li
                      key={item.id}
                      className="list-group-item list-group-item-action "
                      onClick={() => {
                        dispatch(shoppingListActions.boughtItem(item));
                      }}
                    >
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={item.id}
                          name={item.name}
                          // value={item}
                          checked={item.bought}
                        />
                        <label
                          className="form-check-label"
                          value={item.name}
                          // htmlFor={item.id}  // BUG
                        >
                          {item.bought === false ? (
                            <strong>{item.name}</strong>
                          ) : (
                            <span className="text-muted text-danger text-decoration-line-through">
                              {" "}
                              {item.name}{" "}
                            </span>
                          )}
                        </label>
                      </div>
                    </li>
                  </div>
                  <div className="col-2 p-0 g-0">
                    {item.bought === false && (
                      <i
                        class="fas fa-minus-circle text-danger fs-5"
                        onClick={() => {
                          dispatch(shoppingListActions.deleteItem(item));
                        }}
                      ></i>
                    )}
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default ShoppingList;
