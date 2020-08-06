import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import {Link} from "react-router-dom"

class Contacts extends Component {
  //below mentiobned
  //     static propTypes = {
  //     name: PropTypes.string.isRequired,
  //     email: PropTypes.string.isRequired,
  //     phone: PropTypes.string.isRequired,
  //   };

  state = {
    showContactInfo: false,
  };

  // refactoring wih await async in the arrow function
  onDeleteClick = async (id, dispatch) => {
    
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      console.log("exception triggered");
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }

    console.log("delete clicked in Contacts");
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fa fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                  <Link to={`contact/edit/${id}`}>
                  <i 
                  className="fas fa-pencil-alt"
                  style={{
                    cursor:'pointer',
                    float:'right',
                    color:'black',
                    marginRight:'1rem'
                  }}
                  ></i>
                  </Link>

              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">phone number:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// this is as usull in custom proptyeps but we can include this in the class itslelf as a static object as above
Contacts.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default Contacts;
