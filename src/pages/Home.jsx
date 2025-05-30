import { useEffect, useState } from "react";
import SWImageUrl from "../assets/img/Star_Wars_Logo.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getElement,getElementIndex } from "../services/api.js";
import CardScroll from "../components/CardScroll.jsx";


export const Home = () => {
	const {store, dispatch} =useGlobalReducer()
	
	const handleGetElements= async (type,action) => {
		const Element=localStorage.getItem(type);
		const objElement=JSON.parse(Element);
		if (objElement) {
			dispatch({type: action,payload: objElement });
		}else{
				let elements = await getElementIndex(type);
				dispatch({type: action,payload: elements });
				const strElement = JSON.stringify(elements);
				localStorage.setItem(type,strElement);
			}
	}

	useEffect(()=>{
		handleGetElements("people","get_people");
		handleGetElements("planets","get_planets");
		handleGetElements("vehicles","get_vehicles");
	},[]);
	
	return (
		<>
			<h4 className="ms-5 text-secondary mt-5">Vehicles</h4>
			<hr className="text-light"/>						   
			<div className="card-group card-group-scroll mx-4 scrollbar-custom pb-4" >
				{ 
				store.vehicles.map((element,idx)=>(
					<CardScroll key={idx} text={element.name} type='vehicles' id={element.uid} />		
				))}
			</div>
			<h4 className="ms-5 text-secondary mt-5">People</h4>
			<hr className="text-light"/>
			<div className="card-group card-group-scroll mx-4 scrollbar-custom  pb-4">
				{ 
				store.people.map((element,idx)=>(
					<CardScroll key={idx} text={element.name} type='people' id={element.uid}  />		
				))}
			</div>
			<h4 className="ms-5 text-secondary mt-5">Planets</h4>
			<hr className="text-light"/>
			<div className="card-group card-group-scroll mx-4 scrollbar-custom  pb-4">
				{ 
				store.planets.map((element,idx)=>(
					<CardScroll key={idx} text={element.name} type='planets' id={element.uid}  />		
				))}
			</div>
		
      	</>
	);
}