import './Option.css';
import React, { useState } from 'react';
import { FormControlLabel, Radio, FormLabel, RadioGroup, FormControl } from '@material-ui/core';


export default function RadioOption(props) {
    props = props.props // This is kinda dumb, i dont get why JS does this to me
    props.selectedState = ""

    const radioClicked = (event) => {
        props.selectedState = event.target.value
    };

    const choices = () => {
        var array = []
        for (let i = 0; i < props.options.length; i++) {
            const element = props.options[i];
            array.push(<FormControlLabel value={element} control={<Radio color="primary" />} label={element} />)
        }
        return array
    }

    return (
        <div className="radio-container">
            <h3 className="snug">{props.title}</h3>
            <RadioGroup onChange={radioClicked}>
                {choices()}
            </RadioGroup>
        </div>
    );
};

