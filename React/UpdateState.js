// App.js => 
// State should only be owned by one Component
// Never duplicate a state 
// Never assign a state from props 
// It is better to turn every Component without a state into a stateless functional component
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    
    setTimeout(() => {
      const rdmInsIndex = Math.floor(
         Math.random() * this.state.instructors.length
      );
      const rdmHobbyIndex = Math.floor(
         Math.random() * this.state.instructors[rdmInsIndex].hobbies.length
      );
      
      const instructors = this.state.instructors.map((v,i) => {
        if (i === rdmInsIndex) {
          const hobbies = [...v.hobbies].splice(rdmHobbyIndex,1);
          return {
            ...v,
            hobbies
          }
        }
        return v
      });
      // instructors[rdmInsIndex] = Object.assign({},instructors[rdmInsIndex]);
      // instructors[rdmInsIndex].hobbies = instructors[rdmInsIndex].hobbies.slice();
      // instructors[rdmInsIndex].hobbies.splice(rdmHobbyIndex, 1);
      
      this.setState({instructors});
    }, 3000)
  }
  render() {
    const instructors = this.state.instructors.map((v,i) => (
      <li key ={i}> 
        <h3>{v.name}</h3>      
        <h4>Hobbies: {v.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
       <ul>
        {instructors}
       </ul>
      </div>  
    )
  }
}

export default App;
