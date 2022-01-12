// // import React from 'react'
// // import PropTypes from 'prop-types'
// // import AddCollection from './AddCollection';

// // import store from "../../redux/store";


// // const CollectionsList = ({ collections }) => (
// //   <ul> console.log(collections);
// //       {collections.map(todo =>
// //           <AddCollection
// //               key={todo.content}
// //               {...todo}
// //           />
// //       )}
     
// //   </ul>
// // );




// // const CollectionsList = ({collections, AddCollection}) =>(
// //   <ul>
// //   {collections.map(todo =>
// //       <AddCollection
// //           key={todo.content}
// //           {...todo}
// //           onClick={() => AddCollection(todo.content)}
// //       />
// //   )}
// // </ul>

// // )

// // CollectionsList.propTypes = {
// //   collections: PropTypes.arrayOf(PropTypes.shape({
// //       id: PropTypes.number.isRequired,
// //       completed: PropTypes.bool.isRequired,
// //       content: PropTypes.string.isRequired
// //   }).isRequired).isRequired,
// // };

// // export  default CollectionsList

// // const CollectionsList = () =>(
// //   <div>
// //     {
// //       store.getState().content.map((item) => {
// //         console.log(store.getState())
// //         return(
// //           <ListItem/>
// //         );
// //       })
// //     }
// //   </div>
// // );

// // const ListItem = () =>{
// //   const myState = useSelector((state) => state );
// //   const dispatch = useDispatch(); 
// // }

// // import React from 'react'
// // import { useSelector } from 'react-redux'
// // import AddCollection from "./AddCollection";



// // const selectTodos = state => state.content

// // const TodoList = () => {
// //   const todos = useSelector(selectTodos)

// //   // since `todos` is an array, we can loop over it
// //   const renderedListItems = todos.map(todo => {
// //     return <AddCollection key={todo.id} todo={todo} />
// //   })

// //   return <ul className="todo-list">{renderedListItems}</ul>
// // }

// // export default TodoList

// import React from "react";
// import { ListGroup } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { actionCreators } from "../../store/actions";

// export default function ShoppingList() {
//   const dispatch = useDispatch();
//   const items = useSelector(state => state.items);

//   const addItemToBasket = index => {
//     dispatch(actionCreators.addToBasket(index));
//   };

//   const removeItemFromList = index => {
//     dispatch(actionCreators.removeItem(index));
//   };

//   return (
//     <ListGroup className="m-4" variant="flush">
//       {items.map((item, index) => {
//         return item.inBasket ? (
//           <ListGroup.Item
//             key={index}
//             variant="dark"
//             onClick={() => removeItemFromList(index)}
//           >
//             {item.value}
//           </ListGroup.Item>
//         ) : (
//           <ListGroup.Item
//             key={index}
//             variant="danger"
//             onClick={() => addItemToBasket(index)}
//           >
//             {item.value}
//           </ListGroup.Item>
//         );
//       })}
//     </ListGroup>
//   );
// }
