import { BsMoon, BsMoonFill } from "react-icons/bs";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

export const Header = ({ mode, lightmode }) => {
  const { name } = useGetUserInfo();

  return (
    <div className="mode" onClick={mode}>
      {lightmode ? (
        <BsMoon className="moon" />
      ) : (
        <BsMoonFill className="fill" />
      )}
      <h6>Hello, {name}</h6>
    </div>
  );
};
