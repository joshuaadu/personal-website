import { Fragment } from "react";
import NavBar from "./NavBar";
const Header = (props) => {
	const headerLinks = [
		{ title: "home" },
		{ title: "portfolio" },
		{ title: "resume" },
		{ title: "contact" },
	];
	return props.children;

	// return (
	// 	<Fragment>
	// 		{/* <NavBar links={headerLinks} setActivePage={props.setPage} />; */}
	// 		{props.children}
	// 	</Fragment>
	// );
};

export default Header;
