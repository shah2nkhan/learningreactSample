import React, { Component } from 'react';
import './Person.css';

const Person=(props)=>{
    
return (
    <div className='Person' >
        <p onClick={props.click}>I am {props.name}, i am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" value={props.name} onChange={props.changeName}/>
    </div>
    );
};
export default Person;
