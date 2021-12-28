import React, { useState } from "react";

const Pages = (props) => {
	const [activePageIndex, setActivePageIndex] = useState(2);

	const selectActivePage = (activePage) => {
		setActivePageIndex(activePage);
	};

	const children = React.Children.map(props.children, (child) => {
		return React.cloneElement(child, {
			activeIndex: activePageIndex,
			selectPage: selectActivePage,
		});
	});
	return <React.Fragment>{children}</React.Fragment>;
};

export default Pages;
