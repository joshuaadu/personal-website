// import React, { useState } from "react";
import { ActivePageContextProvider } from "./store/activepage-context";

const Pages = (props) => {
  // const [activePageIndex, setActivePageIndex] = useState(2);

  // const selectActivePage = (activePage) => {
  // 	setActivePageIndex(activePage);
  // };

  // const children = React.Children.map(props.children, (child) => {
  // 	return React.cloneElement(child, {
  // 		activeIndex: activePageIndex,
  // 		selectPage: selectActivePage,
  // 	});
  // });
  return (
    <ActivePageContextProvider>{props.children}</ActivePageContextProvider>
  );
};

export default Pages;
