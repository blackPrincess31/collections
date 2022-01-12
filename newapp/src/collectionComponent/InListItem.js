import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store2/actions2";

export default function InListItem({ item, index }) {
  const dispatch = useDispatch();

  const addItem = index => {
    dispatch(actionCreators.addToCollection(index));
  };

  return (
    <ListGroup.Item
      key={index}
      variant="danger"
      onClick={() => addItem(index)}
    >
      {item.value}
    </ListGroup.Item>
  );
}

