import React, { Component } from "react";
import Contacts from "./Contacts";
import {  Consumer } from '../../context';


class ContactList extends Component {
 


  render() {

      return(
        <Consumer>
        {value => {
          const {Contactss} = value;
          return(
            
            <React.Fragment>
            <h1 className= "display-4 mb-2"><span className ="text-danger">Contact</span>List</h1>
            {Contactss.map((contact) => (
              <Contacts
                key={contact.id}
                contact={contact}
              />
            
            ))}
          </React.Fragment>


          )
        }}
        </Consumer>
      )


  }
}
export default ContactList;
