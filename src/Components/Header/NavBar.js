import React, { useContext } from "react";

import "./NavBar.css";
import ActivePageContext from "../../store/activepage-context";

const NavBar = (props) => {
  const { activeIndex, selectPage } = useContext(ActivePageContext);

  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      key: child.props.children,
      active: index === activeIndex,
      onSelect: () => {
        selectPage(index);
      }
    });
  });
  return (
    <nav>
      <ul className="tabBar">{children}</ul>
    </nav>
  );
};

export default NavBar;
