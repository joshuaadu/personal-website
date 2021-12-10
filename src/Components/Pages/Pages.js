import Home from "./Home";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";

const Pages = (props) => {
  switch (props.page) {
    case "home":
      return <Home />;

    case "portfolio":
      return <Portfolio />;

    case "resume":
      return <Resume />;

    case "contact":
      return <Contact />;

    default:
      return;
  }
};

export default Pages;
