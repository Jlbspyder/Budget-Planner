import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    (p[0].split("")[0] === "-" ? "-" : "") +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Balance = () => {
  const { activities } = useContext(GlobalContext);

  const amounts = activities.map((activity) => activity.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="header">
      <div>
        <h2>Budget Planner</h2>
      </div>
      <div>
        <h5>Your Balance</h5>
        <h1>{moneyFormatter(total)}</h1>
      </div>
    </div>
  );
};
