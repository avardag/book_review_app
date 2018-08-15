import React, { Component } from 'react';
import axios from "axios";
class App extends Component {
  
  componentDidMount() {
    console.log('cdm')
     axios.get("/api/books?skip=3&limit=2&order=asc")
    //  axios.get("/api/book?id=5b7235b48f142834e6161aeb")
     .then(res =>{
        console.log(res.data)
     })
  }
  

  render() {
    return (
      <div >
        Hello
      </div>
    );
  }
}

export default App;
