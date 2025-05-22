import { useEffect, useState } from "react";
import SWImageUrl from "../assets/img/Star_Wars_Logo.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getElement,getElementIndex } from "../services/api.js";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const [peopleList,setPeopleList] = useState([]);
  const [vehicleList,setVehicleList] = useState([]);
  const [planetList,setPlanetList] = useState([]);

	useEffect(()=>{
		const handlegetLists= async () => {
			setPeopleList ( await getElementIndex('people'));
			setVehicleList( await getElementIndex('vehicles'));
			setPlanetList( await getElementIndex('planets'));
		}
		handlegetLists();
	},[]);
	return (
		<div className="text-center mt-5 bg-dark text-light">
			<div className="d-flex flex-column mb-3">
				<div className="d-flex flex-row mb-3">
					{ 
					vehicleList.map((element)=>(
					<div className="card p-2" style={{width:"10rem;"}}>
						<img src="" className="card-img-top" alt="" />
						<div className="card-body">
							<h5 className="card-title">{element.name}</h5>
							<p className="card-text">
								{element.name}
							</p>
							<a href={element.url} className="btn btn-primary"> {element.name} </a>
						</div>
					</div>
					))}
				</div>
				<div className="d-flex flex-row mb-3">
					{ 
					peopleList.map((element)=>(
					<div className="card p-2" style={{width:"10rem;"}}>
						<img src="" className="card-img-top" alt="" />
						<div className="card-body">
							<h5 className="card-title">{element.name}</h5>
							<p className="card-text">
								{element.name}
							</p>
							<a href={element.url} className="btn btn-primary"> {element.name} </a>
						</div>
					</div>
					))}
				</div>
				<div className="d-flex flex-row mb-3">
					{ 
					planetList.map((element)=>(
						<div className="card p-2" style={{width:"10rem;"}}>
							<img src="" className="card-img-top" alt="" />
							<div className="card-body">
								<h5 className="card-title">{element.name}</h5>
								<p className="card-text">
									{element.name}
								</p>
								<a href={element.url} className="btn btn-primary"> {element.name} </a>
							</div>
						</div>
					))}
				</div>
			</div>
			<p><img src={SWImageUrl} /></p>
		</div>
	);
}; 