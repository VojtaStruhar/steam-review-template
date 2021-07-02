import './Option.css';
import React from 'react';
import MyCheckbox from './MyCheckbox';
import { useWindowWidth } from '@react-hook/window-size'

export default function CheckboxOption(props) {
    props = props.props
    const windowWidth = useWindowWidth()

    console.log("CheckboxOption function call i guess")

    const create_checkboxes = () => {
        var array = []
        for (let i = 0; i < props.options.length; i++) {
            const element = props.options[i];
            array.push(<MyCheckbox props={{title: element, index: i, isOn: false}} />)
        }
        return array
    }
    const checkboxes = create_checkboxes()

    props.get_selected = () => {
        var checked = []
        checkboxes.forEach(element => {
            if (element.props.props.isOn) {
                checked.push(element.props.props.title)
            }
        });
        return checked
    }
    
    return (
        <div className="radio-container" style={{width: (windowWidth < 1000 ? '90%' : '40%')}}>
            <h3 className="snug">{props.title}</h3>
            {checkboxes}
        </div>
    );

}

