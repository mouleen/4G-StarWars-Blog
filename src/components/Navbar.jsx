import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	const {store,dispatch} =useGlobalReducer()
	
	const handleDeleteFavorites=(type,id)=>{
		let fav=[...store.favorites]
		let favFiltered=fav.filter(persona => (persona.type == type && persona.id == id))
		if(favFiltered.length > 0){
			let favFilterRemove=fav.filter(persona => (!(persona.type == type && persona.id == id)))
			dispatch({type: 'get_favorites',payload: favFilterRemove });    
		}else{
			alert('no existe el elemento que intenta eliminar')
		}
	}
	
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
								<li key={idx} style={{width:'300px'}}>
									<button className="dropdown-item" style={{display: "inline-block",width:"90%"}} type="button">{item.name}</button>
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