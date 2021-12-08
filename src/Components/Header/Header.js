import TabBar from "./TabBar";
const Header = (props) => {
  const headerLinks = [
    { title: "Home", active: true },
    { title: "Profile" },
    { title: "Resume" },
    { title: "Contact" }
  ];
  return <TabBar links={headerLinks} />;
};

export default Header;
