import TabBar from "./TabBar";
const Header = (props) => {
  const headerLinks = [
    { title: "home" },
    { title: "portfolio" },
    { title: "resume" },
    { title: "contact" }
  ];
  return <TabBar links={headerLinks} setActivePage={props.setPage} />;
};

export default Header;
