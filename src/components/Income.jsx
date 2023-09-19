import React from "react";
import { useGetActivities } from "../hooks/useGetActivities";

export const Income = ({ lightmode }) => {
  const { activities } = useGetActivities();

  const amounts = activities.map((activity) => Number(activity.amount));

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className={`inc-exp-container ${lightmode ? "" : "darkmode"}`}>
      <div>
        <h4>Inflow</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};
