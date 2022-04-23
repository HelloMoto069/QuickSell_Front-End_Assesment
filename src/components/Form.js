import React from 'react'
import "../styles/Form.css"
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { actionGenerator } from "./redux/action";
import {
    handleSubmit,
    handleInitialValue,
    handleMaxValue,
    putUrl
} from "./redux/constant"


function Form() {

    const {
        initialValue,
        maxValue
    } = useSelector(state => state);

    const dispatch = useDispatch();

    function getInitialValue(e) {
        dispatch(actionGenerator(handleInitialValue, +e.target.value));
    }

    function getMaxValue(e) {
        dispatch(actionGenerator(handleMaxValue, +e.target.value));
    }

    async function submit(e) {
        e.preventDefault();
        await axios.put(putUrl, { counter: initialValue });
        dispatch(actionGenerator(handleSubmit, true))
    }

    return (
        <>
            <h1 className="title">Submit the Form to open Counter</h1>
            <form className="form" onSubmit={submit}>
                <div className="form_control">
                    <label>Initial Value</label>
                    <input type="number"
                        onChange={getInitialValue}
                        value={initialValue} />
                </div>
                <div className="form_control">
                    <label>Max Value</label>
                    <input type="number" onChange={getMaxValue} value={maxValue} />
                </div>
                <div className="form_control">
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form
