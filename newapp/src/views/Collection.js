import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { AddItem,ShoppingList } from "../collectionComponent"; 

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
