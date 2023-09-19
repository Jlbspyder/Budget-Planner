import React from "react";
import { Expense } from "./Expense";
import { useGetActivities } from "../hooks/useGetActivities";

export const ExpenseList = ({ lightmode }) => {
  const { activities } = useGetActivities()

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

