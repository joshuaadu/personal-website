// import { FontAwesomeIcon } from "../../@fortawesome/react-fontawesome"

import { useState } from "react";
import "./NavLink.css";
const NavLink = (props) => {
  const [linkIsActive, setLinkActive] = useState();
  setLinkActive(props.active);
  return (
    <li
      id={props.name}
      className={`navlink ${linkIsActive ? "active" : ""}`}
      key={props.name}
      onClick={props.setActive}
    >
      <a href="#">{props.name}</a>
    </li>
  );
};
export default NavLink;
