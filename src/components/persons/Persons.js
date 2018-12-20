import React , {Component} from 'react';

import Person from './person/Person';

class Persons extends Component {
  render(){
    return this.props.persons.map( ( person, index ) => {
      return <Person
        click={() => this.props.clicked( index )}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={( event ) => this.props.changed( event, index)} />
    } );
  }
}


export default Persons;