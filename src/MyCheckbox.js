import './Option.css';
import React, { Component, useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

export default class MyCheckbox extends Component {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)

        console.log("eeej", props)

        this.state = {
            title: props.title,
            index: props.index
        };
    }

    toggle() {
        this.isChecked = !this.isChecked
    }

    render() {

        return (
            <FormControlLabel
                value={ this.state.index }
                control={<Checkbox color="primary"
                    onClick={ this.toggle } />}
                label={ this.state.title }
                labelPlacement="end"
                checked={ this.isChecked }
            />
        );
    };
}