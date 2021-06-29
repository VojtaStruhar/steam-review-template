import './Option.css';
import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';


export default class Option extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isChecked: false
        };
    }

    toggle() {
        const currentState = this.state.isChecked;
        this.setState({ isChecked: !currentState }); 
        console.log("bru")
    }

    render() {

        return (
            <div>
                <FormControlLabel
                    // value="top"
                    control={<Checkbox color="primary" onClick={this.toggle} />}
                    label={this.props.description}
                    labelPlacement="end"
                    checked={this.state.isChecked}
                />
            </div>
        );
    }
}

