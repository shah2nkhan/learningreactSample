import React, { Component } from 'react';
import Radium from 'radium';
import './Person.css';

const Person=(props)=>{
    const style={
        '@media (min-width:500 px)':{
            width:'450px'
        }
    };
return (
    <div className='Person' style={style}>
        <p onClick={props.click}>I am {props.name}, i am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" value={props.name} onChange={props.changeName}/>
    </div>
    );
};
export default Radium(Person);
