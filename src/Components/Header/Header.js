import { Fragment } from "react";
import NavBar from "./NavBar";
const Header = (props) => {
	const headerLinks = [
		{ title: "home" },
		{ title: "portfolio" },
		{ title: "resume" },
		{ title: "contact" },
	];

	return (
		<header className="header">
			{/* <NavBar links={headerLinks} setActivePage={props.setPage} />; */}
			{props.children}
		</header>
	);
};

export default Header;
