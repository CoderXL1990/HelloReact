import React from "react";
import { NavLink } from "react-router";

const Tabs = () => {
  return (
    <div>
      <div>
        <NavLink to="/" end>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/todo" end>
          Todo
        </NavLink>
      </div>
    </div>
  );
};

export default Tabs;
