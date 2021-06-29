import './Category.css';
import React from 'react';
import Option from './Option';

export default class Category extends React.Component {
    render() {
        return (
            <div>
                <div className="centered">
                    <p className="inner">inside div</p>
                    <p className="inner">centered</p>
                </div>
                <div className="section">
                    <p>Paragraph</p>
                    <Option description="description custom" />
                </div>
            </div>

        );
    }
}

