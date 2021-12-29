import Header from "./Components/Header/Header";
import Pages from "./Pages";
import PageSectons from "./Components/PageSections/PageSections";
import PageSecton from "./Components/PageSections/PageSecton";
import PageData from "./Components/PageSections/PagesData";
import NavBar from "./Components/Header/NavBar";
import NavLink from "./Components/Header/NavLink";
import "./styles.css";

export default function App() {
	return (
		<Pages className="App">
			{/* <Header></Header> */}
			<NavBar>
				<NavLink>Home</NavLink>
				<NavLink>Portfolio</NavLink>
				<NavLink>Resume</NavLink>
				<NavLink>Contact</NavLink>
			</NavBar>
			<PageSectons>
				<PageSecton>{PageData.Home()}</PageSecton>
				<PageSecton>{PageData.Portfolio()}</PageSecton>
				<PageSecton>{PageData.Resume()}</PageSecton>
				<PageSecton>{PageData.Contact()}</PageSecton>
			</PageSectons>
		</Pages>
	);
}
