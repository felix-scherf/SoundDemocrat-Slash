
import { Link } from "react-router-dom";
import { Song } from "./Song";


import { NavbarBottomAdd } from "./NavbarBottomAdd";


export const MostPopular = () => {

	return (
		<div>

			<div className="header">
				<br />



				<h2 className="queue-menu">Queue: </h2>
				<p className="menu-navbar"> <Link to="/" style={{
					textDecoration: "none",
					color: "white"
				}}>Newest
				</ Link> | <Link to="/most-popular" className="strong" style={{
					textDecoration: "none",
					color: "white"
				}}> Most popular </ Link> </p>


			</div>

			<div className="menu">
			<Song  />
			<Song  />
			<Song  />
			
			</div>
			<NavbarBottomAdd />
		</div>




	)
}