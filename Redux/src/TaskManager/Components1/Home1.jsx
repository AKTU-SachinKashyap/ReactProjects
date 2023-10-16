import React from 'react'
import './Home1.css'
import {connect} from 'react-redux'
import { addTodo } from '../Services1/Actions1/action1'

class AddTodo extends React.Component{

  handleAddTodo =()=>{
    // dispatches actions to add todo 
    this.props.addTodo(this.state.input)

    // sets state back to empty string 
    this.setState({input:''})
  }
  render(){
    return(
      <div>
        <input
        onChange={(e) => this.updateInput(e.target.value)} value={this.state.input}></input>
        <button className='add-todo' onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    )
  }
}

export default connect(null,{addTodo})(AddTodo)

// const Home1 = () => {
//   return (
//     <div className='main'>
//         {/* <h1>Hello</h1>
//         <input type='text' placeholder='Enter Your Task'></input>
//         <button>Add</button>
//         <button>Edit</button>
//         <button>Remove</button> */}
//     </div>
//   )
// }
// export default Home1
