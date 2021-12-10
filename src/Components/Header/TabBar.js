import { useState } from "react";
import NavLink from "./NavLink";
import "./TabBar.css";

const TabBar = (props) => {
  const [activeTab, setActiveTab] = useState("home");
  console.log(activeTab);
  props.setActivePage(activeTab);
  const setLinkActive = (event) => {
    props.setActivePage(activeTab);
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
