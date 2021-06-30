import './Category.css';
import React from 'react';
import CheckboxOption from './CheckboxOption';
import RadioOption from './RadioOption';
import { Button } from '@material-ui/core';

export default function Categories(props) {

    const create_categories = () => {
        var array = []
        for (let i = 0; i < props.props.length; i++) {
            const element = props.props[i];
            if (element.type === "radio") {
                array.push(<RadioOption props={element} />)
            } else if (element.type === "check") {
                array.push(<CheckboxOption props={element} />)
            }
        }
        return array
    }
    const categoryComponents = create_categories()

    const generate_review = () => {
        var reviewString = ""

        console.log("generate review")
        for (let i = 0; i < props.props.length; i++) {
            const categoryJson = props.props[i];
            const component = categoryComponents[i];

            console.log(i, categoryJson.title)

            reviewString = reviewString + "---{ " + categoryJson.title + " }---\n"


            // With radio, only one option is selected
            if (categoryJson.type === "radio") {
                categoryJson.options.forEach(option => {
                    reviewString += ((component.props.props.selectedState === option ? "☑ " : "☐ ") + option)
                    reviewString += "\n"
                });
            } else if (categoryJson.type === "check") {
                console.log(component.props)
                console.log("category", component.props.props.get_selected())
            }
            

            reviewString += "\n"
        }
        console.log(reviewString)
    }

    return (
        <div>
            <div className="centered">
                <div>
                    {categoryComponents}
                </div>
            </div>
            <div className="button-centered">
                <Button variant="contained" color="primary" onClick={generate_review}>
                    Generate Steam Review
                </Button>
            </div>
        </div>
    )
}

