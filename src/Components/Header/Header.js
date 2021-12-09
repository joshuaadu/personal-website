import TabBar from "./TabBar";
const Header = (props) => {
  const headerLinks = [
    { title: "home" },
    { title: "profile" },
    { title: "resume" },
    { title: "contact" }
  ];
  return <TabBar links={headerLinks} />;
};

export default Header;
