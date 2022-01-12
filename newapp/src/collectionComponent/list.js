import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import {InCollectionItem } from ".";

export default function List() {
  const items = useSelector(state => state.items);

  return (
    <ListGroup className="m-4" variant="flush">
      {items.map((item, index) => {

         if(item.inCollection){
         return( <InCollectionItem item={item} index={index} />)
        }
         
      })}
    </ListGroup>
  );
}