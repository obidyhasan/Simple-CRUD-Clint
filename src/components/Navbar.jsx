import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink className={"margin-right"} to={"/"}>
        Home
      </NavLink>
      <NavLink className={"margin-right"} to={"/users"}>
        Users
      </NavLink>
    </div>
  );
};

export default Navbar;
