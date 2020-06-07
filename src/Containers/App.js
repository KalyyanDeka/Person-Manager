import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: 'Max', age: 28 },
      { id: "kdsd1", name: 'Manu', age: 29 },
      { id: "sdsc1", name: 'stephenie', age: 26 }
    ],
    otherState : "Some other value",
    showPersons: false
  }


  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }



  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }



  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id = id;
    });

    const person = {...this.state.persons[personIndex]};

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

  render() {
  
  let persons = null;

  if(this.state.showPersons) {
    persons = 
                  <Persons 
                    
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />;
  }

    

    return (
        <div className={classes.App}>
            <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler} />
            {persons}           
        </div>
    );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi! I am a react app'))
  }
}

export default App;


