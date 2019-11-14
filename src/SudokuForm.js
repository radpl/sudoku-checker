import React from "react";
import InputField from "./InputField";

const SudokuForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <InputField
                name="sudoku"
                value={props.value}
                onChange={props.onChange}
                placeholder="input sudoku numbers"
            />

            <button type="submit" className="form-button">Check</button>
        </form>
    );
};

export default SudokuForm;
