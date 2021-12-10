import { useState } from "react";
import Header from "./Header/Header";
import Pages from "./Pages/Pages";
import "./Main.css";

const Main = (props) => {
  const [activePage, setActivePage] = useState("home");
  return (
    <div className="main">
      <Header setPage={setActivePage} />
      <Pages page={activePage} />
    </div>
  );
};
export default Main;
