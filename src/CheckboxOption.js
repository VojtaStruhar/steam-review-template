import './Option.css';
import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';


function MyCheckbox(props) {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <FormControlLabel
                value={props.index}
                control={<Checkbox color="primary" 
                                   onClick={() => { setIsChecked(!isChecked) }} />}
                label={props.title}
                labelPlacement="end"
                checked={isChecked}
            />
    );
}

export default function CheckboxOption(props) {
    props = props.props

    const create_checkboxes = () => {
        var array = []
        for (let i = 0; i < props.options.length; i++) {
            const element = props.options[i];
            console.log(element)
            array.push(<MyCheckbox title={element} index={i}/>)
        }
        return array
    }

    return (
        <div className="radio-container">
            <h3 className="snug">{props.title}</h3>
            { create_checkboxes() }
        </div>
    );

}

