import React, { Component } from "react"
import { connect } from "react-redux"

class CreateTodo extends Component {
  state = { todo: "" }

  changeHandler = e => {
    // console.log("change now!")
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({ todo: "" })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        Create Todo Component
        <form onSubmit={this.submitHandler}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              name="todo"
              onChange={this.changeHandler}
              value={this.state.todo}
            />
          </p>
          <input type="submit" />
        </form>
        {/* {this.state.todo} */}
      </div>
    )
  }
}

// on submission of our form we want to send the value that we've captured in the local state to be added to our Redux store
const mdp = dispatch => {
  return {
    addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
  }
}

export default connect(null, mdp)(CreateTodo)
