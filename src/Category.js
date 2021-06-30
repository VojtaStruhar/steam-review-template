import './Category.css';
import React, { useState } from 'react';
import CheckboxOption from './CheckboxOption';
import RadioOption from './RadioOption';
import { Button } from '@material-ui/core';

export default function Categories(props) {

    const [reviewString, setReviewString] = useState("")
    const [reviewInfo, setReviewInfo] = useState("")
    const [clipboardFailed, setClipboardFailed] = useState(false) 
    
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
        var localReviewString = ""

        for (let i = 0; i < props.props.length; i++) {
            const categoryJson = props.props[i];
            const component = categoryComponents[i];


            localReviewString = localReviewString + "---{ " + categoryJson.title + " }---\n"


            // With radio, only one option is selected
            if (categoryJson.type === "radio") {
                categoryJson.options.forEach(option => {
                    localReviewString += ((component.props.props.selectedState === option ? "☑ " : "☐ ") + option)
                    localReviewString += "\n"
                });
            } else if (categoryJson.type === "check") {
                const selectedOptions = component.props.props.get_selected()
                categoryJson.options.forEach(option => {
                    // This check could have lesser complexity...
                    localReviewString += ((selectedOptions.includes(option) ? "☑ " : "☐ ") + option)
                    localReviewString += "\n"
                });
            } else {
                localReviewString += "ERROR - bad category type. (radio | check)\n"
            }
            localReviewString += "\n"
        }
        // Credit for Steam's formatting system
        localReviewString += "[hr][/hr]\n"
        localReviewString += "Grab this review template [url=https://vojtastruhar.github.io/steam-review-template/] here [/url].\n"

        console.log(localReviewString)
        setReviewString(localReviewString)

        navigator.clipboard.writeText(localReviewString).then(function () {
            console.log('Async: Copying to clipboard was successful!');
            setReviewInfo("The review has been copied into your clipboard!")
            setClipboardFailed(false)
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
            setReviewInfo("Copying into clipboard failed.")
            setClipboardFailed(true)
        });
    }

    const check_review_in_new_window = () => {
        var newWin = window.open('url','Steam review','height=700,width=400,scrollbars=yes,resizable=yes');
        newWin.document.write(String.raw`${reviewString.replaceAll("\n", "<br/>")}`);
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
                {reviewInfo !== "" &&
                    <p className="review" >{reviewInfo}</p>
                }
                {clipboardFailed &&
                    <Button onClick={check_review_in_new_window}>View text in separate window</Button>
                }
            </div>
        </div>
    )
}

