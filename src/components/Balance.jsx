import React from "react";
import { signOut } from "firebase/auth";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { useGetActivities } from "../hooks/useGetActivities";
import { auth } from "../auth/firebase-config";
import { useNavigate } from "react-router-dom";

export const Balance = ({ lightmode }) => {
  const { activities } = useGetActivities();
  const { avatar } = useGetUserInfo();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const amounts = activities.map((activity) => Number(activity.amount));

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const sign = total < 0 ? "-" : "+";

  return (
    <div className="header">
      <div>
        <h2>Budget Planner</h2>
        <h5>Your Balance</h5>
        <h1>{sign}${Math.abs(total)}</h1>
      </div>
      {avatar && (
        <div className="avatar">
          <img
            src={avatar}
            alt="avatar"
            className={`profile-pix ${lightmode ? "" : "darkmode"}`}
          />
          <button
            className={`btn sign-out ${lightmode ? "" : "darkmode"}`}
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};
