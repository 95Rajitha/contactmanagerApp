import React, { Component } from "react";
import axios from "axios";


const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        Contactss: state.Contactss.filter(
          (contact) => contact.id !== action.payload
        ),
      };
      case "ADD_CONTACT":
      return {
        ...state,
        Contactss:[action.payload,...state.Contactss]
      };
      case "UPDATE_CONTACT":
        return {
          ...state,
          Contactss:state.Contactss.map(contact =>
            contact.id === action.payload.id? (contact = action.payload):contact)
        };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    Contactss: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  async componentDidMount(){
    
    // on behalf of refactoring with async and await /changed the method signature
    // axios.get('https://jsonplaceholder.typicode.com/users')
    // .then(res=> this.setState({Contactss:res.data}));

    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
   this.setState({Contactss:res.data});
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
