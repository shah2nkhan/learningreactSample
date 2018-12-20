import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component{
    componentDidMount()
    {
        //setting focus or media state
        if(this.props.position ===0)
        {
            this.inputElement.focus();
        }
    }
    render(){
        return(
        <>
            <p onClick={this.props.click}>I am {this.props.name}, i am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input 
            ref={(inp)=>{this.inputElement=inp}}
            type="text" value={this.props.name} onChange={this.props.changed}/>
        </>
        )
    }
}

Person.propTypes={
    name: PropTypes.string,
    age : PropTypes.number,
    click: PropTypes.func,
    changed:PropTypes.func
};

export default withClass(Person, classes.Person);
