import React, { useContext } from "react";
import { Expense } from "./Expense";

import { GlobalContext } from "../context/GlobalState";

export const ExpenseList = ({ lightmode }) => {
  const { activities } = useContext(GlobalContext);

  return (
    <>
      <h3>Activities</h3>
      <ul className={`list ${lightmode ? "" : "darkmode"}`}>
        {activities.map((activity) => (
          <Expense key={activity.id} activity={activity} />
        ))}
      </ul>
    </>
  );
};
