import { BsMoon, BsMoonFill } from "react-icons/bs";

export const Header = ({ mode, lightmode }) => {
  return (
    <div className="mode" onClick={mode}>
      {lightmode ? <BsMoon className="moon" /> : <BsMoonFill className="fill" />}
    </div>
  );
};
