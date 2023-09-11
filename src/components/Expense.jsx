import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
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

export const Expense = ({ activity }) => {
  const { deleteActivity } = useContext(GlobalContext);

  const sign = activity.amount < 0 ? "-" : "+";

  return (
    <li className={activity.amount < 0 ? "minus" : "plus"}>
      {activity.text}{" "}
      <span>
        {sign}
        {moneyFormatter(activity.amount)}
      </span>
      <button
        onClick={() => deleteActivity(activity.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
