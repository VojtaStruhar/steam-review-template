import './Option.css';
import React, { Component, useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import MyCheckbox from './MyCheckbox';

export default function CheckboxOption(props) {
    props = props.props



    const create_checkboxes = () => {
        var array = []
        for (let i = 0; i < props.options.length; i++) {
            const element = props.options[i];
            console.log(element)
            array.push(<MyCheckbox title={element} index={i} />)
        }
        return array
    }
    const checkboxes = create_checkboxes()

    checkboxes.forEach(element => {
        console.log(element.props.foo)
    });

    return (
        <div className="radio-container">
            <h3 className="snug">{props.title}</h3>
            {checkboxes}
        </div>
    );

}

