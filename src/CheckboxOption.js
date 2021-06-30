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
            array.push(<MyCheckbox props={{title: element, index: i, isOn: false}} />)
        }
        return array
    }
    const checkboxes = create_checkboxes()

    props.get_selected = () => {
        var checked = []
        checkboxes.forEach(element => {
            console.log(element.props)
            console.log("parent view:", element.props.props.title ,element.props.props.isOn)
            if (element.props.props.isOn) {
                checked.push(element.props.props.title)
            }
        });
        return checked
    }
    
    return (
        <div className="radio-container">
            <h3 className="snug">{props.title}</h3>
            {checkboxes}
        </div>
    );

}

