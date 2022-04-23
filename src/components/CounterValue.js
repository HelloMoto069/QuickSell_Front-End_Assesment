import React from 'react'
import "../styles/CounterValue.css";
import { useSelector } from "react-redux"


function CounterValue() {

    const value = useSelector(state => state.value);

    return (
        <div className="counter_value">
            Counter value: {value}
        </div>
    )
}

export default CounterValue
