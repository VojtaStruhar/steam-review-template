import './Option.css';
import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';


function MyCheckbox() {
    return (
        <FormControlLabel
                // value="top"
                control={<Checkbox color="primary" onClick={() => {console.log("click")} } />}
                label={"Label"}
                labelPlacement="end"
                checked={false}
            />
    );
}

export default function CheckboxOption() {

    

    return (
        <div>
            <p>CheckboxOption</p>
        </div>
    );

}

