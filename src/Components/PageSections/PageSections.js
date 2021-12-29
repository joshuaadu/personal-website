import React from "react";

const PageSectons = (props) => {
	const { activeIndex, children } = props;
	return <main>{children[activeIndex]}</main>;
};

export default PageSectons;
