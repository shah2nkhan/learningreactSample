import React, { Component } from 'react';
import Person from'./person/Person';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state= {
    persons:[
      {
        name:'shanky', age:32 , id:1
      },
      {
        name:'Raiyaan', age:4 , id:2
      }
    ],
    showpersons:false

  }
  switchNameHandler = ()=>{

    this.setState({persons:[
      {
        name:'Raiyan', age:4
      },
      {
        name:'shanky', age:32
      }
    ]})
  }
  changeName =(event, index) => {   
    const person = {...this.state.persons[index]};
    person.name = event.target.value;
    const persons=[...this.state.persons];
    persons[index] = person;
    this.setState({persons:persons});   
  }

  toggleShowPerson=()=>{
    const doesShow=this.state.showpersons;
    this.setState({showpersons:!doesShow })
  }

  deletePersonHandler =(index)=>{
    const persons=[...this.state.persons];

    persons.splice(index,1);
    this.setState({persons:persons});
  }

  render() {
    const style ={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1x solid blue',
      padding:'8px',
      cursor:'pointer',
     
    };
    let person = null;
    if(this.state.showpersons)
    {
      person =(
        <div>
          {this.state.persons.map((p,index)=> {
           return <Person 
            name={p.name} 
            age ={p.age} 
            click={()=>this.deletePersonHandler(index)} 
            changeName={(event)=>this.changeName(event,index)}
            key={p.id}
             />
          })}        
      </div>  
      );
      style.backgroundColor = 'red';
      

    }
    let classes =['red','bold'].join(' ');

    return (
      <div className="App">
        <h1>Test</h1>   
        <p className={classes}>This is nice</p>   
        <button style={style} onClick={this.toggleShowPerson} >Play With PersonList</button>    
        {person}        
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