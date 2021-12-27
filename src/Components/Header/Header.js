import { Fragment } from "react";
import NavBar from "./NavBar";
const Header = (props) => {
  const headerLinks = [
    { title: "home" },
    { title: "portfolio" },
    { title: "resume" },
    { title: "contact" }
  ];
  return (
    <Fragment>
      <NavBar links={headerLinks} setActivePage={props.setPage} />;
    </Fragment>
  );
};

export default Header;
