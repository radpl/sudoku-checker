import React from "react";

const InputField = (props) => {
    return (
        <div className="input-main">
            <textarea
                id="sudoku-input"
                rows="4" cols="50"
                name={props.name}
                className="input-text"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
        </div>);
};

export default InputField;
