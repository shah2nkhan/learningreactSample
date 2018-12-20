import React, { PureComponent } from 'react';
import Persons from'../components/persons/Persons';
//import logo from './logo.svg';
import classes from './App.css';
//import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry'
import Cockpit from '../components/cockpit/Cockpit';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[APP.js] constructor called');
    this.state= {
      persons:[
        {
          name:'shanky', age:32 , id:1
        },
        {
          name:'Raiyaan', age:4 , id:2
        }
      ],
      otherState: 'some other value',
      showPersons:false  
    }

  }
  // componentWillMount(){
  //   console.log('[APP.js] Component with  mount ');
  // }
  
  // componentDidMount(){
  //   console.log('[APP.js] Component Did  mount ');
  // }
  
  // shouldComponentUpdate(){
  //   console.log('[APP.js] shouldComponentUpdate');
  // }

  changeName =(event, index) => {   
    const person = {...this.state.persons[index]};
    person.name = event.target.value;
    const persons=[...this.state.persons];
    persons[index] = person;
    this.setState({persons:persons});   
  }

  toggleShowPerson=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow })
  }

  deletePersonHandler =(index)=>{
    const persons=[...this.state.persons];

    persons.splice(index,1);
    this.setState({persons:persons});
  }

  render() {
    console.log('[APP.js] render called');
    let persons = null;
    if(this.state.showPersons)
    {
      persons = <Persons
      persons={this.state.persons}
      clicked={this.deletePersonHandler}
      changed={this.changeName} />;    

    }

    return (
      <div className={classes.App}>
       <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.toggleShowPerson} />
        {persons}      
      </div>
    );
  }
}

export default  App;
/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */