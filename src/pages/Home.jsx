import { useEffect, useState } from "react";
import SWImageUrl from "../assets/img/Star_Wars_Logo.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getElement,getElementIndex } from "../services/api.js";
import Card from "../components/Card.jsx";

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
	console.log(peopleList);
	return (
		<>
			<div id="carouselid" className="carousel slide bg-black" data-bs-ride="carousel"> 
				<div className="carousel-inner py-5 mx-5 px-5">
					{/*<div className="carousel-item active">
						<div className="card-wrapper mx-5 px-5 d-flex">*/}
						{ 
						vehicleList.map((element,idx)=>(
							( idx % 6 === 0 || idx === 0 ) ? 
								( <div className="carousel-item active"><div className="card-wrapper mx-5 px-5 d-flex"> ) 
								: ("")

							<Card title={element.name} text={idx} url={element.url} />						
							
							( idx % 5 == 0 ) ? ( </div></div> ) : ("")
 
							

						))}
						{/*
						</div>
					</div>
						*/}
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselid" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselid" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div id="carouselid2" className="carousel slide bg-black" data-bs-ride="carousel"> 
				<div className="carousel-inner py-5 mx-5 px-5">
					<div className="carousel-item active">
						<div className="card-wrapper mx-5 px-5 d-flex">
							{ 
							peopleList.map((element)=>(
								<Card title={element.name} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit. ssss" url={element.url} />
							))}
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselid" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselid" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div id="carouselid3" className="carousel slide bg-black" data-bs-ride="carousel"> 
				<div className="carousel-inner py-5 mx-5 px-5">
					<div className="carousel-item active">
						<div className="card-wrapper mx-5 px-5 d-flex">
							{ 
							planetList.map((element)=>(
								<Card title={element.name} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit. ssss" url={element.url} />
							))}
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselid" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselid" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		
      	</>
	);
}; 