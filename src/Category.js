import './Category.css';
import React from 'react';
import CheckboxOption from './CheckboxOption';
import RadioOption from './RadioOption';

export default function Category(props) {
    return (
        <div>
            <div className="centered">
                <div>
                    <p>Paragraph</p>
                    <CheckboxOption description="description custom" />
                    <RadioOption props={props.props[0]} />
                </div>
            </div>
        </div>
    )
}

