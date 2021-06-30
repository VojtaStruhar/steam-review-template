import './Category.css';
import React from 'react';
import CheckboxOption from './CheckboxOption';
import RadioOption from './RadioOption';

export default class Category extends React.Component {
    render() {
        return (
            <div>
                <div className="centered">
                    <div>
                        <p>Paragraph</p>
                        <CheckboxOption description="description custom" />
                        <RadioOption />
                    </div>
                </div>
            </div>
        );
    }
}

