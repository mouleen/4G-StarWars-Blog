import { useEffect, useState } from "react";
import SWImageUrl from "../assets/img/Star_Wars_Logo.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getElement,getElementIndex } from "../services/api.js";
import CardScroll from "../components/CardScroll.jsx";

export const Home = () => {
	const {store, dispatch} =useGlobalReducer()
	
	const handleGetElements= async (type,action) => {
		let elements = await getElementIndex(type);
		dispatch({type: action,payload: elements });
	}
	/*const handleGetElements= async () => {
		let vehicles = await getElementIndex('vehicles');
		dispatch({type: "get_vehicles",payload: vehicles })
		let people =  await getElementIndex('people');
		dispatch({type: "get_people",payload: people })
		let planets =  await getElementIndex('planets');
		dispatch({type: "get_planets",payload: planets })
	}*/
	useEffect(()=>{
		handleGetElements("people","get_people");
		handleGetElements("planets","get_planets");
		handleGetElements("vehicles","get_vehicles");
	},[]);
	
	//console.log(store);
	return (
		<>
			<div className="card-group card-group-scroll">
				{ 
				store.vehicles.map((element,idx)=>(
					<CardScroll key={idx} text={element.name} type='vehicles' id={element.uid} />		
				))}
			</div>
			<div className="card-group card-group-scroll">
				{ 
				store.people.map((element,idx)=>(
					<CardScroll key={idx} text={element.name} type='people' id={element.uid}  />		
				))}
			</div>
			<div className="card-group card-group-scroll">
				{ 
				store.planets.map((element,idx)=>(
					<CardScroll key={idx} text={element.name} type='planets' id={element.uid}  />		
				))}
			</div>
		
      	</>
	);
}