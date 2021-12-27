import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Pages from "./Components/Pages/Pages";
import "./styles.css";
import PageData from "./Components/Pages/PagesData";
import NavBar from "./Components/Header/NavBar";
import NavLink from "./Components/Header/NavLink";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  console.log();
  return (
    <React.Fragment>
      {/* <Header setPage={setActivePage} /> */}
      {/* <Pages page={activePage} /> */}
      {/* <Header>
        <NavBar>
          <NavLink></NavLink>
          <NavLink></NavLink>
          <NavLink></NavLink>
          <NavLink></NavLink>
        </NavBar>
      </Header> */}
      {/* <Pages>
        <Page></Page>
        <Page></Page>
        <Page></Page>
        <Page></Page>
      </Pages> */}
      <div>{PageData.home}</div>
    </React.Fragment>
  );
}
