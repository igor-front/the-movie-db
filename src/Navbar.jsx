import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

	return (
		<header>
			<ul className="navbar__menu">
				<li className="navbar__item"><Link to='/'>Home</Link></li>
				<li className="navbar__item"><Link to='popular'>Popular</Link></li>
				<li className="navbar__item"><Link to='tvshows'>TV SHOWS</Link></li>
			</ul>
		</header>
	);
};

export default Navbar;
