import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import {RemoveInCollectionItem } from ".";

export default function List() {
  const items = useSelector(state => state.items);

  return (
    <ListGroup className="m-4" variant="flush">
      {items.map((item, index) => {

         
         return( <RemoveInCollectionItem item={item} index={index} key={item.id}/>)
        
         
      })}
    </ListGroup>
  );
}