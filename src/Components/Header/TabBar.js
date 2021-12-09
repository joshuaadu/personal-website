import { useState } from "react";
import NavLink from "./NavLink";
import "./TabBar.css";

const TabBar = (props) => {
  const [activeTab, setActiveTab] = useState("home");
  const setLinkActive = (event) => {
    setActiveTab(event.target.textContent.trim());
  };
  return (
    <ul className="tabBar">
      {props.links.map((link) => (
        <NavLink
          key={link.title}
          name={link.title}
          active={link.title === activeTab ? true : false}
          setActive={setLinkActive}
        />
      ))}
    </ul>
  );
};

export default TabBar;
