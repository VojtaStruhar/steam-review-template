import './Category.css';
import React from 'react';
import CheckboxOption from './CheckboxOption';

export default class Category extends React.Component {
    render() {
        return (
            <div>
                <div className="centered">
                    <div className="section">
                        <p>Paragraph</p>
                        <CheckboxOption description="description custom" />
                    </div>
                </div>
            </div>
        );
    }
}

