import React, { useState } from "react";
import NavLink from "./NavLink";
import "./NavBar.css";

const NavBar = (props) => {
	const { activeIndex, selectPage } = props;
	const children = React.Children.map(props.children, (child, index) => {
		return React.cloneElement(child, {
			key: child.props.children,
			active: index === activeIndex,
			onSelect: () => {
				selectPage(index);
			},
		});
	});
	return (
		<nav>
			<ul className="tabBar">{children}</ul>
		</nav>
	);
};

export default NavBar;
