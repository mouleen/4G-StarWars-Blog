import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getElement } from "../services/api.js";
import { useEffect, useState } from "react";
import { RandomImage } from "../ImageHelper.js";

const ElementDetail = ({title,text,url}) => {
    const {store} =useGlobalReducer();
    const { elementType,elementId } = useParams();
    const [ element,setElement ] = useState("");
    const [ elementText,setElementText ] = useState("");
    const [ elementImage,setElementImage ] = useState(RandomImage(elementType));
    const [ decalClass,setDecalClass ] = useState("card-decal mb-3");
    const navigate = useNavigate();
    
    const handleGetElement = async (type,id) =>{
        const elementDetail = await getElement(type,id);
        setElement(elementDetail);
        notai(elementDetail)
    }
    const notai = (item) =>{ 
        let string="Created on " + item.properties.created +" by "+item.properties.manufacturer+ " with a capacity for " + item.properties.crew + " passengers and a cargo capacity of " +item.properties.cargo_capacity +  "Kg.  The " + item.properties.name+" model "+item.properties.model+" is a " + item.properties.vehicle_class + " that can reach up to "+ item.properties.max_atmosphering_speed +" maximum speed in the atmosphere."
        setElementText(string)
    }
    const handleDecal = (set)=>{
        let clas=( set === 'hover') ? 'card-decal mb-3 opacity-100':'card-decal  mb-3 opacity-25';
        setDecalClass( clas)
    }
    
    useEffect(()=>{
        handleGetElement(elementType,elementId);
    },[])
    
return (
    <div className="d-flex justify-content-center">
        <button className="btn btn-dark border border-dark-subtle m-2 px-2 text-center" style={{width:"40px"}} type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=>{navigate('/')}}>
            <i className="fa-duotone fa-solid fa-house"></i>
        </button>
        <div className="card" style={{ height: "640px",backgroundColor:"black"}}>
            <div className="row g-0 mx-5 rounded-5">
                <div className="col">
                    <img src={elementImage}  className="img-fluid rounded-start-3" alt="..." onMouseOver={()=>{handleDecal('hover')}} onMouseLeave={()=>{handleDecal()}} />
                </div>
                <div className="col bg-dark" style={{ height: "97%"}}>
                    <div className="card-body bg-dark text-light" style={{ height: "100%"}}>
                        <div className={decalClass} ></div>
                        <h5 className="card-title">{element.description}</h5>
                        {/*<p className="card-text">{ai()}</p>*/}
                        <p className="card-text pt-5">{elementText}<small className="text-body-secondary">{url}</small></p>
                    </div>
                    <div className="notch-contain"></div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ElementDetail;


