import React, { Component } from 'react'
import Contacts from './Contacts';

class addContacts_ref extends Component {

    constructor(props){
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput =React.createRef();

    }
    onSubmit =  (e) => {
        e.preventDefault();
        const contact ={
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone:this.phoneInput.current.value
        }

        console.log(contact);
    }

        static defaultProps ={
            name:"Rajitha",
            email:"rajitha@gmail.com",
            phone:"0775380009"
        }

    render() {

        const {name,email,phone} = this.props;


        return (
            <div className="card mb-3">
            <div className="card-header"><h2>Add contact</h2>
            </div>
            <div className="card-body">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">

                <label htmlFor="name">Name</label>
                <input type="text" 
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter name..."
                defaultValue={name}
                ref={this.nameInput}
                />

                </div>
                <div className="form-group">

                <label htmlFor="email">email</label>
                <input type="email" 
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email..."
                defaultValue={email}
                ref={this.emailInput}
                />
                
                </div>
                <div className="form-group">

                <label htmlFor="phone">phone</label>
                <input type="text" 
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter phone..."
                defaultValue={phone}
                ref={this.phoneInput}
                />
                </div>
                <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
            </form>

            </div>
            </div>
        )
    }
}

export default addContacts_ref;