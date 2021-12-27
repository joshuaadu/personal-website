import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Pages from "./Components/Pages/Pages";
import Page from "./Components/Pages/Page";
import "./styles.css";
import PageData from "./Components/Pages/PagesData";
import NavBar from "./Components/Header/NavBar";
import NavLink from "./Components/Header/NavLink";

export default function App() {
	const [activePage, setActivePage] = useState("home");
	console.log(PageData.Home.name);
	return (
		<React.Fragment>
			{/* <Header setPage={setActivePage} /> */}
			{/* <Pages page={activePage} /> */}
			<Header>
				<NavBar>
					<NavLink>Home</NavLink>
					<NavLink>Portfolio</NavLink>
					<NavLink>Resume</NavLink>
					<NavLink>Contact</NavLink>
				</NavBar>
			</Header>
			<Pages>
				<Page>{PageData.Portfolio()}</Page>
				{/* <Page></Page>
				<Page></Page>
				<Page></Page> */}
			</Pages>
			{/* <div>{PageData.Portfolio()}</div> */}
		</React.Fragment>
	);
}
