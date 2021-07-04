import './Option.css';
import React, { Component, useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

export default function MyCheckbox(props) {
    const [isChecked, setIsChecked] = useState(false)

    const toggle = () => {
        props.props.isOn = !isChecked;
        var saved = JSON.parse(sessionStorage.getItem(props.props.category) || "[]")
        
        if (!isChecked) {
            saved.push(props.props.title)
            
        } else {
            saved = arrayRemove(saved, props.props.title)
        }
        sessionStorage.setItem(props.props.category, JSON.stringify(saved))

        setIsChecked(!isChecked)
    }

    return (
        <FormControlLabel
            value={props.props.index}
            control={<Checkbox color="primary"
                onClick={ toggle } />}
            label={props.props.title}
            labelPlacement="end"
            checked={isChecked}
        />
    );
}