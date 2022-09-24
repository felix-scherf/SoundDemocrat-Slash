import { Link } from "react-router-dom";

import infocircle from "./img/info-circle.svg";

export const NavbarBottomAdd = () => {




	return (
		<div>

			<Link to="/info" className="info">
				<img alt="img" className="info-img" src={infocircle} /></ Link>
			<nav className="nav under-navbar">
				<Link to="/people" className="nav__link navitem-link hidden" style={{
					textDecoration: "none",
					color: "white"
				}}>
					<i className="material-icons nav__icon navitem" style={{
						fontSize: "60px"
					}}>people</i>
					<span className="nav__text strong">People</span>
				</Link>
				<Link to="/add" className="nav__link nav__link--active navitem-link" style={{
					textDecoration: "none",
					color: "white"
				}}>
					<i className="material-icons nav__icon" style={{
						fontSize: "80px"
					}}>add_circle_outline</i>
					<span className="nav__text"></span>
				</Link>

				<a href="https://paypal.com" className="nav__link navitem-link" style={{
					textDecoration: "none",
					color: "white"
				}}>
					<i className="material-icons nav__icon" style={{
						fontSize: "60px"
					}} >volunteer_activism</i>
					<span className="nav__text strong">Give a tip</span>
				</a>
				

			</ nav>
		</div>


	)





}


