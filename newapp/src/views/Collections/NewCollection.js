



// function NewCollection (props) {
//   state = {
//     content: ''
//   };

// //   handleInputChange = e => {
// //     this.setState({
// //       [e.target.name]: e.target.value
// //     });
// //   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.content.trim()) {
//       this.props.onAddCollection(this.state);
//       this.handleReset();
//     }
//   };

//   handleReset = () => {
//     this.setState({
//       id: '',
//       content: ''
//     });
//   };

//   render()
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           placeholder="title"
//           name="title"
//           onChange={this.handleInputChange}
//           value={this.state.title}
//         />
//         <input
//           type="text"
//           placeholder="URL"
//           name="url"
//           onChange={this.handleInputChange}
//           value={this.state.url}
//         />
//         <hr />
//         <button type="submit">Add collection</button>
//         <button type="button" onClick={this.handleReset}>
//           Reset
//         </button>
//       </form>
//     );
  
// }

// function NewCollection(props) {
  


// handleAddCollection = () => {
//   // dispatches actions to add todo
//   this.props.addCollection(this.state.input)

//   // sets state back to empty string
//   this.setState({ input: '' })
// }


//   return (
//     <div>
//       <input
//         onChange={(e) => this.updateInput(e.target.value)}
//         value={this.state.input}
//       />
//       <button className="add-collection" onClick={this.handleAddCollection}>
//         Add Collection
//       </button>
//     </div>
//   )
// }

// import React from "react";
// import { connect } from "react-redux";
// import { addCollection, deleteCollection } from "../../redux/actions";
// import AddCollection from "./AddCollection";
// import store from "../../redux/store";

// const NewCollection = ({ collection}) => (
//   <li  onClick={() => addCollection(collection.content)}>
//     <span >
//       {collection.content};
//          </span>
//   </li>
// );

// // export default Todo;
// export default connect(
//   null,
//   { addCollection }
// )(NewCollection);

import React from 'react'
import PropTypes from 'prop-types'

const Collection = ({ onClick, completed, content }) => (
  <li
    onClick={onClick}

  >
    {content}
  </li>
)

Collection.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired
}

export default Collection

// export default NewCollection;