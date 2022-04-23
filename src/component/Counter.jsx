import { useEffect, useState } from "react";
import "./counter.css";

export const Counter = function () {
  const [val, setVal] = useState(1);

  function handleInc() {
    setVal(val + 1);
  }
  function getValue() {
    fetch(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/bhanu.json"
    )
      .then((res) => res.json())
      .then((res) => setVal(res == null ? 1 : res));
  }
  useEffect(() => {
    getValue();
  }, []);
  function handleDec() {
    setVal(val - 1);
  }
  const handleSubmit = (e) => {
    let data = e.target.value;
    fetch(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bhanu: Number(data) }),
      }
    )
      .then((d) => d.json())
      .then((res) => {
        console.log("putjsdhf", res);
        getValue();
      });
  };
  return (
    <>
      <div className="box">
        <div className="sub-box">
          <div className="main">
            Saving Counter Value...
            <div className="sub-main">
              <div className="left">
                <button disabled={val === 0 ? true : false} onClick={handleDec}>
                  -
                </button>
              </div>
              <div className="middle">
                <p>{val}</p>
              </div>
              <div className="right">
                <button
                  disabled={val === 1000 ? true : false}
                  onClick={handleInc}
                >
                  +
                </button>
              </div>
            </div>
            <div className="input-bar">
              <label htmlFor="">Counter value :</label>
              <input
                type="text"
                onInput={handleSubmit}
                placeholder="Enter MAX_VALUE"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
