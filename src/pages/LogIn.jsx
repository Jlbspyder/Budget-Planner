import { useNavigate } from "react-router-dom";
import { auth, provider } from "../pages/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { BsMoon, BsMoonFill } from "react-icons/bs";

export const LogIn = ({ mode, lightmode }) => {
  const navigate = useNavigate();

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

  return (
    <>
      <div className="mode set" onClick={mode}>
        {lightmode ? (
          <BsMoon className="moon" />
        ) : (
          <BsMoonFill className="fill" />
        )}
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
