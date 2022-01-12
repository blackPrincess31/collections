import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ADD_COLLECTION, DELETE_COLLECTION } from "../../redux/actions/types";

import AddCollection from "./AddCollection";
import TodoList  from "./CollectionsList";
import { AddItem,ShoppingList } from "../../comp2"; 

 const Collections = () => {

  return (
    <Container className="mb-5">
      <h1>Collections</h1>
      <div>
      <h1>Collections List</h1>
      <AddItem />
      <ShoppingList />
      </div>
      </Container>
  )
 }
    
export  {Collections} ;
