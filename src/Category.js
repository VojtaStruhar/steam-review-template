import './Category.css';
import React from 'react';
import Option from './Option';
import { Container } from '@material-ui/core';

export default class Category extends React.Component {
    render() {
        return (
            <div>
                <Container maxWidth="sm" className="section">
                    <p>Paragraph</p>
                    <Option description="description custom" />
                </Container>
            </div>
        );
    }
}

