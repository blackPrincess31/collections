import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { AddItem,List } from "../collectionComponent"; 

 const Collections = () => {

  return (
    <Container className="mb-5">
      <div > 
      <h1 class = "text-center" >Collections List</h1>
      <AddItem />
      <List />
      </div>
      </Container>
  )
 }
    
export  {Collections} ;
