import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { GlobalContext } from "../context/GlobalState";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { auth } from "../auth/firebase-config";
import { useNavigate } from "react-router-dom";

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

export const Balance = ({ lightmode }) => {
  const { activities } = useContext(GlobalContext);
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

  const amounts = activities.map((activity) => activity.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="header">
      <div>
        <h2>Budget Planner</h2>
        <h5>Your Balance</h5>
        <h1>{moneyFormatter(total)}</h1>
      </div>
      {avatar && (
        <div>
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
