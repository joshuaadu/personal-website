import React, { useContext } from "react";
import ActivePageContext from "../../store/activepage-context";

const PageSectons = (props) => {
  const { activeIndex } = useContext(ActivePageContext);
  return <main>{props.children[activeIndex]}</main>;
};

export default PageSectons;
