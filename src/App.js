import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [
      {id : 1, name : "Sindhura", age : 31},
      {id : 2, name : "Surya", age : 26},
      {id : 3, name : "Priyanka", age : 23},
    ],
    showPersons : false
  }
  // switchNameHandler = (newName) => {
  //       //console.log("This was clicked");
  //       this.setState ({
  //           persons :[ 
  //           {name : newName, age : 31},
  //           {name : "Surya", age : 26},
  //           {name : "Priyanka", age : 24}
  //         ]
  //       });
  //     }

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ({persons : persons});
  }
  togglePersonHandler = () => {
    const showBox = this.state.showPersons;
    this.setState({showPersons : !showBox});
  }
  deleteNameHandler = (personIndex) =>{
   // const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  render(){
    const style = {
      backgroundColor : 'green',
      color: 'white',
      padding: '10px',
      border: '1px solid black',
      boxShadow: '0 1px 2px grey',
    }
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deleteNameHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangeHandler(event, person.id)}/>
          }) }
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            change={this.nameChangeHandler}>My hobbies are : Drawing, Sketching
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "Sindhura Shetty !!!!")}>My hobbies are : Singing
          </Person> */}
        </div> 
      )
      style.backgroundColor = 'red';
    }
   // const classes = ['red', 'bold'].join(' ');
   const classes = [];
   if (this.state.persons.length >= 2) {
      classes.push('red');
   }
   if (this.state.persons.length <= 1) {
      classes.push('bold');
   }
   const classArray = classes.join(' ');
    return (
        <div className="App">
          <h1>Hi, I am a react app</h1>
          <p className={classArray}>Yipeee, this works!</p>
          <button 
          style = {style}
          onClick={this.togglePersonHandler}>Switch Name</button>
          {persons}
        </div>
    );
  }
}

export default App;
// const app = props => {
  
//   const [personsState, setPersonsState] = useState({
//     persons :[ 
//       {name : "Sindhura", age : 31},
//       {name : "Surya", age : 26},
//       {name : "Priyanka", age : 23},
//     ],
//     //otherState : "Some other state" 
   
//   })
//   const [otherState, setOtherState] = useState({otherState : "Some other state"});
//   console.log (personsState, otherState);
//   const switchNameHandler = () => {
//     //console.log("This was clicked");
//     setPersonsState ({
//         persons :[ 
//         {name : "Sindhura Shetty", age : 31},
//         {name : "Surya", age : 26},
//         {name : "Priyanka", age : 24}
//       ]
//     });
//   }

//     return (
//       <div className="App">
//         <h1>Hi, I am a react app</h1>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies are : Drawing, Sketching</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My hobbies are : Singing</Person>
//       </div>
//     );
//    // return React.createElement('div', {className:'App'}, React.createElement('h1', null ,'I am a react app'));
// }

// export default app;




