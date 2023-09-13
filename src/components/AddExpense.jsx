import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddExpense = ({ lightmode }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState({});

  const { addActivity } = useContext(GlobalContext);


  const onSubmit = (e) => {
    e.preventDefault();
    if (!text && !amount) {
      setError({
        text: "Please enter activity",
        amount: "Please enter amount",
      });
      setTimeout(() => {
        setError({});
      }, 3000);
    } else if (!text) {
      setError({
        text: "Please enter activity",
      });
      setTimeout(() => {
        setError({});
      }, 3000);
    } else if (!amount) {
      setError({
        amount: "Please enter amount",
      });
      setTimeout(() => {
        setError({});
      }, 3000);
    } else {
      const newActivity = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
      };

      addActivity(newActivity);
      setText("");
      setAmount("");
    }
  };

  return (
    <>
      <h3>Add new activity</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label className={error.text ? "error" : "label"} htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            className={`input ${lightmode ? "darkmode" : ""} ${error.text ? "input-error" : ""}`}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
          {error.text && <small className="error">{error.text}</small>}
        </div>
        <div className="form-control">
          <label className={error.amount ? "error" : "label"} htmlFor="amount">
            Amount 
            <small>(negative - expense, positive - inflow)</small>
          </label>
          <input
            type="number"
            value={amount}
            className={`input ${lightmode ? "darkmode" : ""} ${error.amount ? "input-error" : ""}`}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
          {error.amount && <small className="error">{error.amount}</small>}
        </div>
        <button className={`btn ${lightmode ? "" : "darkmode"}`} >Add Activity</button>
      </form>
    </>
  );
};
