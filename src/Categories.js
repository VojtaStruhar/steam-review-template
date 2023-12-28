import './Categories.css';
import React, { useState } from 'react';
import CheckboxOption from './components/CheckboxOption';
import RadioOption from './components/RadioOption';
import { Button } from '@material-ui/core';

export default function Categories(props) {

    const [reviewInfo, setReviewInfo] = useState("")

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

        function appendCategoryTitle(title) {
            localReviewString += "---{ " + title + " }---\n"
        }

        function appendOption(option, checked) {
            localReviewString += (checked ? "☑ " : "☐ ") + option + "\n"
        }

        for (let i = 0; i < props.props.length; i++) {
            const categoryJson = props.props[i];

            appendCategoryTitle(categoryJson.title)

            // With radio, only one option is selected
            if (categoryJson.type === "radio") {
                const saved = sessionStorage.getItem(categoryJson.title) || ""
                categoryJson.options.forEach(option => {
                    appendOption(option, saved === option)
                });
            } else if (categoryJson.type === "check") {
                // With checkbox, multiple options can be selected
                const selectedOptions = JSON.parse(sessionStorage.getItem(categoryJson.title) || "[]")
                categoryJson.options.forEach(option => {
                    appendOption(option, selectedOptions.includes(option))
                });
            } else {
                localReviewString += "ERROR - bad category type. (radio | check)\n"
            }

            // newline under every category
            localReviewString += "\n"
        }

        // Credit 
        localReviewString += "\nGrab this review template here! 👉 https://vojtastruhar.github.io/steam-review-template/\n"

        navigator.clipboard.writeText(localReviewString).then(function () {
            console.log('Async: Copying to clipboard was successful!');
            setReviewInfo("The review has been copied into your clipboard!")
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
            setReviewInfo("Copying into clipboard failed. New window with the review should appear, please, copy it manually.")
            check_review_in_new_window(localReviewString)
        });
    }

    const check_review_in_new_window = (text) => {
        var newWin = window.open('url', 'Steam review', 'height=700,width=500,scrollbars=yes,resizable=yes');
        newWin.document.write(String.raw`${text.replaceAll("\n", "<br/>")}`);
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
                    Steamレビューを生成（クリップボードにコピーされます）
                </Button>
                {reviewInfo !== "" &&
                    <p className="review" >{reviewInfo}</p>
                }
            </div>
        </div>
    )
}

