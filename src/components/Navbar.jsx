import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	const {store,dispatch} =useGlobalReducer()
	const navigate=useNavigate();

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
	//https://lumiere-a.akamaihd.net/v1/images/corellia-main_621fbca8.jpeg
	return (
		<nav className="navbar navbar-dark p-4 pb-5">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img className="float-start img-fluid" style={{height:"40px"}}src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png" alt="Logo Starwars" />
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