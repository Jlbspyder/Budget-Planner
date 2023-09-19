import { useNavigate, Navigate } from "react-router-dom";
import { auth, provider } from "../auth/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

export const LogIn = ({ mode, lightmode }) => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo()
  const handleClick = async () => {
    const res = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: res.user.uid,
      name: res.user.displayName,
      avatar: res.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/homepage");
  };

  if (isAuth) {
    return <Navigate to='/homepage' />
  }

  return (
    <>
      <div className="mode" onClick={mode}>
        {lightmode ? (
          <BsMoon className="moon" />
        ) : (
          <BsMoonFill className="fill" />
        )}
        <h2>Budget Planner</h2>
      </div>
      
      <div className="log-in">
        <div className="sign-in">Please sign in with google to continue</div>
        <button
          className={`btn sign ${lightmode ? "" : "darkmode"}`}
          onClick={handleClick}
        >
          Sign In
        </button>
      </div>
    </>
  );
};
