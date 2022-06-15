import React from "react";
import { selectSignedIn } from "../../features/userSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="nav">
      <h1 className="nav__header">Blogmania</h1>
      {}
    </div>
  );
};

export default Navbar;
