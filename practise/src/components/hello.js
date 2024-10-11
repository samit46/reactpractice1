import React, { useState, useEffect } from "react";


function Hello() {
  const intialData = {
    number1: "",
    number2: "",
    result: "",
  };
  const [histories, sethistory] = useState([]);
  const [data, setData] = useState({ intialData });
  const updateNumber1 = (e) => {
    setData({
      ...data,
      number1: parseFloat(e.target.value),
    });
  };
  const updateNumber2 = (e) => {
    setData({
      ...data,
      number2: parseFloat(e.target.value),
    });
  };

  const updateResult = (action) => {
    if (action == "add") {
      const Result = data.number1 + data.number2;
      setData({ ...data, result: Result });
      const newhis = data.number1 + "+" + data.number2 + "=" + Result;
      sethistory((previoushis) => [newhis, ...previoushis]);
    } else if (action == "sub") {
      const Result = data.number1 - data.number2;
        setData({ ...data, result: Result });
        const newhis = data.number1 + "-" + data.number2 + "=" + Result;
        sethistory((previoushis) => [newhis, ...previoushis]);
      if (data.number1 >= data.number2) {
      } else {
        alert(" number1  should be greater than number 2");
      }
    } else if (action == "mul") {
      const Result = data.number1 * data.number2;
      setData({ ...data, result: Result });
      const newhis = data.number1 + "*" + data.number2 + "=" + Result;
      sethistory((previoushis) => [newhis, ...previoushis]);
    } else if (action == "div") {
      const Result = data.number1 / data.number2;
      setData({ ...data, result: Result });
      const newhis = data.number1 + "/" + data.number2 + "=" + Result;
      sethistory((previoushis) => [newhis, ...previoushis]);
    } else {
      setData(intialData);
    }
  };

  const clearHistory = () => {
    sethistory([]);
  };

  return (
    <div className="row">
      <div className="container col-md-8 md">
        <h1>result :{data.result}</h1>
        <label htmlFor="number1">Number 1:</label>
        <input
          className="m-5"
          type="number"
          placeholder="Enter your number"
          id="number1"
          value={data.number1}
          onChange={updateNumber1}
        />
        <label htmlFor="number2">Number 2:</label>
        <input
          className="m-5"
          type="number"
          placeholder="Enter your number"
          id="number2"
          value={data.number2}
          onChange={updateNumber2}
        />

        <div>
          <input
            type="button"
            className="m-2 p-3"
            value={"+"}
            onClick={() => updateResult("add")}
          />
          <input
            type="button"
            className="m-2 p-3"
            value={"-"}
            onClick={() => updateResult("sub")}
          />
          <input
            type="button"
            className="m-2 p-3"
            value={"*"}
            onClick={() => updateResult("mul")}
          />
          <input
            type="button"
            className="m-2 p-3"
            value={"/"}
            onClick={() => updateResult("div")}
          />
          <input
            type="button"
            className="m-2 p-3"
            value={"c"}
            onClick={() => updateResult("c")}
          />
        </div>
      </div>
      <div className="container col-md-4">
        <h1>history</h1>
        <ol>
          {histories.map((history, key) => (
            <li key={key}>{history}</li>
          ))}
        </ol>
        <input type="button" value="clear" onClick={clearHistory} />
      </div>
    </div>
  );
}

export default Hello;