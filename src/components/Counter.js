import axios from 'axios';
import React, { useEffect } from 'react'
import "../styles/Counter.css"
import { useSelector, useDispatch } from 'react-redux'
import { actionGenerator } from "./redux/action";
import {
    getUrl,
    putUrl,
    handleIncrement,
    handleDecrement,
    handleChange,
    handleSaving
} from "./redux/constant";

let timeout;

function Counter(props) {

    const {
        value,
        maxValue,
        isSaving
    } = useSelector(state => state)

    const dispatch = useDispatch();

    function increment() {
        if (value < maxValue) dispatch(actionGenerator(handleIncrement, null));
    }

    function decrement() {
        if (value > 0) dispatch(actionGenerator(handleDecrement, null));
    }

    function setValue(data) {
        dispatch(actionGenerator(handleChange, data));
    }

    function saving(flag) {
        dispatch(actionGenerator(handleSaving, flag));
    }

    useEffect(async () => {
        if (value === "") {
            let res = await axios.get(getUrl)
                .catch(err => console.log(err));
            if (res.data === "") {
                let putData = await axios.put(putUrl, { counter: 1 })
                    .catch(err => console.log(err));
                setValue(putData.data.counter);
            }
            else {
                setValue(+res.data);
            }
        }
        else {
            clearTimeout(timeout);
            timeout = setTimeout(async () => {
                if (value > maxValue) {
                    setValue(maxValue);
                }
                else if (value < 0) {
                    setValue(0);
                }
                else if (value !== "") {
                    let res = await axios.get(getUrl);
                    if (value !== res.data) {
                        saving(true);
                        await axios.put(putUrl, { counter: value });
                        saving(false);
                    }
                }
            }, 600);
        }
    }, [value]);

    return (
        <div className="counter_container">
            {(value === "" || isSaving) ? <div className="saving"><div className="loading"></div><span>Saving counter value</span></div> : ""}
            <div className="counter">
                <button className="decrement" onClick={decrement}>
                    -
                </button>
                <input className="count" type="number" onChange={e => setValue(+e.target.value)} value={value} />
                <button className="increment" onClick={increment}>
                    +
                </button>
            </div>
        </div>
    )
}

export default Counter
