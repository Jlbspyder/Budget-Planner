import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Expense = ({ activity }) => {
  const { deleteActivity } = useContext(GlobalContext);

  const sign = activity.amount < 0 ? "-" : "+";

  return (
    <li className={activity.amount < 0 ? "minus" : "plus"}>
      {activity.description}{" "}
      <span>
        {sign}${Math.abs(activity.amount)}
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
