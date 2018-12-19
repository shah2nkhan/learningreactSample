import React, { Component } from 'react';
import classes from './Person.css';


const Person=(props)=>{
    // const rnd = Math.random();
    // if(rnd > .6)
    // {
    //     throw new Error ('something went wrong');
    // }
    return (
    
        <div className={classes.Person} >
            <p onClick={props.click}>I am {props.name}, i am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changeName}/>
        </div>
        );
};
export default Person;
