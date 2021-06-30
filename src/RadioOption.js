import './Option.css';
import React, { useState } from 'react';
import { FormControlLabel, Radio, FormLabel, RadioGroup, FormControl } from '@material-ui/core';


export default function RadioOption(props) {

    const [selectedValue, setSelectedValue] = useState("");
    props = props.props

    const radioClicked = (event) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value)
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

