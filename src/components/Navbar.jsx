import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {
	const {store} =useGlobalReducer()
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Logo Starwars</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites {store.favorites.length}
						</button>
						<ul className="dropdown-menu">
							
							{
								store.favorites.map((item,idx)=>(
								<li key={idx}><button className="dropdown-item" type="button">{item.name}</button></li>
								))
						}
						{/*<li><button className="dropdown-item" type="button">Dropdown item</button></li>
						<li><button className="dropdown-item" type="button">Dropdown item</button></li>
						<li><button className="dropdown-item" type="button">Dropdown item</button></li>*/}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};