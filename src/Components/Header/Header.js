import TabBar from "./TabBar";
const Header = (props) => {
  const headerLinks = [
    { title: "home" },
    { title: "portfolio" },
    { title: "resume" },
    { title: "contact" }
  ];
  return (
    <div>
      <TabBar links={headerLinks} setActivePage={props.setPage} />;
    </div>
  );
};

export default Header;
