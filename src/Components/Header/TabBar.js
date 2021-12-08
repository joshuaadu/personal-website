import NavLink from "./NavLink";
import "./TabBar.css";
const TabBar = (props) => {
  const setLinkActive = (event) => {
    props.links.forEach((link) => {
      event.target.textContent === link.title
        ? (link.active = true)
        : (link.active = false);
    });
  };
  return (
    <ul className="tabBar">
      {props.links.map((link) => (
        <NavLink
          name={link.title}
          active={link.active}
          setActive={setLinkActive}
        />
      ))}
    </ul>
  );
};

export default TabBar;
