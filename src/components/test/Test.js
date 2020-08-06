import React, { Component } from 'react'

export default class test extends Component {
    
    state = {
        title:'',
        id:''
    };


    //fired off after the component mounts
    // http methods get called inside this and if you fetching data within the component this is usefull and putting it insde the component state
    componentDidMount(){
        console.log("componenet DID mount called")

        fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    this.setState({
        title:data.title,
        id:data.id
    })  
    console.log(data)})
    }
    
    //this will run before the did mount method
        //method depricated and we have to add the flag as UNSAFE_ in the front of the method name
    // componentWillMount(){
    //     console.log("componenet Will mount called")

    // }
    
    // //only runs when the component updates(changing the state ) to see take this method above the contacts component render method 
    // // this will run after re rendering of the component
    // componentDidUpdate(){
    //     console.log("component did update called");
    // }

    // //this method will execute befoire the did update method once the component re re rendered
    //     //method depricated and we have to add the flag as UNSAFE_ in the front of the method name
    // componentWillUpdate(){
    // console.log("component will update called");
    // }

    // //this executes when the component runs the properties finds the new properties used with the Redux
    // // new props can be taken from the nextProps and they can be manipulated 
    // //method depricated and to use it we have to add the flag as UNSAFE_ in the front of the method name
    // componentWillReceiveProps(nextProps,nextState){
    //     console.log("component WillReceiveProps  called");
    // }

    // // return a state or null must be returned 
    // static getDerivedStateFromProps(nextProps, prevState){
       
       
    //    // here need to return a state not to use the set state 
    //     // return null;

    //     return{
    //         test:'new state'
    //     }
    // }

    // // this is executed before the dom is updated
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log("component getSnapshotBeforeUpdate  called");

    // }


    render() {

        const{title,id} = this.state

        return (
            <div>
            <h1>{title}</h1>
            <h1>{id}</h1>
            </div>
        )
    }
}
