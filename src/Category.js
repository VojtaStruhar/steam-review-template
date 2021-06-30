import './Category.css';
import React from 'react';
import CheckboxOption from './CheckboxOption';
import RadioOption from './RadioOption';

export default function Category(props) {

    const categories = () => {
        var array = []
        for (let i = 0; i < props.props.length; i++) {
            const element = props.props[i];
            if (element.type === "radio") {
                array.push(<RadioOption props={element}/>)
            } else {
                array.push(<CheckboxOption props={element}/>)
            }
        }

        return array
    }

    return (
        <div>
            <div className="centered">
                <div>
                    {categories()}
                    <CheckboxOption description="description custom" />
                    <RadioOption props={props.props[0]} />
                </div>
            </div>
        </div>
    )
}

