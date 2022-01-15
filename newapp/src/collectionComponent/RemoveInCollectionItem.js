import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store2/actions2";
import { CloseButton } from "react-bootstrap";

export default function RemoveInCollectionItem({ item, index }) {
  const dispatch = useDispatch();

  const removeItemFromList = index => {
    dispatch(actionCreators.removeItem(index));
  };

  return (
    <ListGroup.Item
      key={index}
      variant="dark" >
        <CloseButton onClick={() => removeItemFromList(index)} />
      {item.value}
    </ListGroup.Item>
  );
}
