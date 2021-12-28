import "./NavLink.css";
const NavLink = (props) => {
	const isActive = false;
	return (
		<li
			// id={props.name}
			onClick={props.onSelect}
			className={`navlink ${props.active ? "active" : ""}`}
		>
			{/* <a href="#">{props.name}</a> */}
			<a href="#">{props.children}</a>
		</li>
	);
};
export default NavLink;
