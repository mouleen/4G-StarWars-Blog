import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import SWImageUrl from "../assets/img/Star_Wars_Logo_W.png";

export const Navbar = () => {
	const {store,dispatch} = useGlobalReducer();
	const navigate = useNavigate();

	const handleDeleteFavorites = (type,id)=>{
		let objFavorites=[...store.favorites];
		let favFiltered=objFavorites.filter(persona => (persona.type == type && persona.id == id));

		if(favFiltered.length > 0){
			let favFilteredRemove=objFavorites.filter(persona => (!(persona.type == type && persona.id == id)));
			dispatch({type: 'get_favorites',payload: favFilteredRemove });    
			const lsFavorites = JSON.stringify(favFilteredRemove);
			localStorage.setItem('favorites',lsFavorites);
		}else{
			alert('no existe el elemento que intenta eliminar');
		}
	}


	return (
		<nav className="navbar navbar-dark p-4 pb-5">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img className="float-start img-fluid" style={{height:"40px"}}src={SWImageUrl} alt="Logo Starwars" />
					</span>
				</Link>
				<div className="ml-auto rounded float-end">
					<div className="dropdown">
						<button className="btn btn-dark border border-dark-subtle dropdown-toggle ml-5 px-4 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites {store.favorites.length}
						</button>
						<ul className="dropdown-menu">
							{
								store.favorites.map((item,idx)=>(
								<li key={idx} style={{width:'300px'}}>
									<button className="dropdown-item" style={{display: "inline-block",width:"90%"}} type="button" onClick={()=>{navigate('/elementdetail/'+ item.type +'/'+ item.id )}}>{item.name}</button>
									<i class="fa-regular fa-trash-can" style={{display: "inline-block",width:"10%"}} onClick={()=>{handleDeleteFavorites(item.type,item.id)}}></i>
								</li>
								))
							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};