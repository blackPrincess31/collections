// // import React from 'react';
// // import { ListGroup } from 'react-bootstrap';
// // import { connect } from 'react-redux';
// // import { addCollection } from '../../redux/actions';
// // import { useSelector } from 'react-redux'

// // import store from '../../redux/store';

// // class AddCollection extends React.Component {

// //   constructor(props) {
// //     super(props);
// //     this.state = { input: '' };
// //   }

// //   updateInput = input => {
// //     this.setState({ input });
// //   };



// //   handleAddTodo = () => {
// //     this.props.addCollection(this.state.input);

// //     console.log(this.props)
// //     console.log(this.state.input)
// //     this.setState({ input: "" });
    
// //     // store.dispatch({
// //     //   type: 'ADD_COLLECTION',
// //     //   input: this.state.input,
// //     // })
   
// //     // store.dispatch(addCollection(this.state.input));
// //     console.log(store.getState());
// //     console.log (this.TodoList());
// //   };
   
// //   // selectTodos = state => this.state

// //    TodoList = () => {
    
// //     const todos = useSelector(this.state.input)
  
// //     // since `todos` is an array, we can loop over it
// //     const renderedListItems = todos.map(todo => {
// //       return <AddCollection key={todo.id} todo={todo} />
// //     })
  
// //     return <ul className="todo-list">{renderedListItems}</ul>
// //   }


// //   render() {
// //     return (
// //       <div>
// //         <input
// //           onChange={e => this.updateInput(e.target.value)}
// //           value={this.state.input}
// //         />
// //         <button className="add-collection" onClick={this.handleAddTodo}>
// //           Add-Collection
// //         </button>
// //       <div>
        
// //       </div>
// //       </div>
      
// //     );
// //   }
// // }



// // export default connect(
// //   null,
// //   { addCollection }
// // )(AddCollection);
// // // export default AddTodo;






// // // Эта функция передаёт в компонент методы для обновления 
// // // необходимого поля store.
// // // const mapDispatchToProps = dispatch => {
// // //   return {
// // //     onAddCollection: collection => {
// // //       dispatch(addCollection(collection));
// // //     }
// // //   };
// // // };

// // // const add = () => 
// // // connect(
// // //   null,
// // //   mapDispatchToProps
// // // )(NewCollection);

// // // export default add;

// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../../store/actions";

// export default function AddItem() {
//   const dispatch = useDispatch();
//   const [input, setInput] = useState("");

//   const handleInputChange = event => {
//     return setInput(event.target.value);
//   };

//   const handleSubmit = () => {
//     dispatch(actionCreators.addToList(input));
//     setInput("");
//   };

//   const handleClear = () => {
//     dispatch(actionCreators.clearItems());
//   };

//   return (
//     <div>
//       <input
//         className="input"
//         placeholder="Add item..."
//         value={input}
//         onChange={handleInputChange}
//       />
//       <Button className="button" variant="outline-dark" onClick={handleSubmit}>
//         Add
//       </Button>
//       <Button className="button" variant="outline-dark" onClick={handleClear}>
//         Clear
//       </Button>
//     </div>
//   );
// }

