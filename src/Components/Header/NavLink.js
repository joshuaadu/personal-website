import "./NavLink.css";
const NavLink = (props) => {
  console.log(props.name, props.active);
  return (
    <li
      id={props.name}
      onClick={props.setActive}
      className={`navlink ${props.active ? "active" : ""}`}
    >
      <a href="#">{props.name}</a>
    </li>
  );
};
export default NavLink;
