import './Option.css';
import React, { Component, useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

export default function MyCheckbox(props) {
    const [isChecked, setIsChecked] = useState(false)

    const toggle = () => {
        props.props.isOn = !isChecked;
        setIsChecked(!isChecked)
        console.log("toggle", props.props.isOn)
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