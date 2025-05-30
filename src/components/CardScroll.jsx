import { Navigate, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { RandomImage } from "../ImageHelper.js";

const CardScroll = ({text,type,id}) => {
    const {store, dispatch} =useGlobalReducer()
    const [heart,setHeart] = useState("fa-regular fa-heart");
    const navigate=useNavigate();
    const handleSetFavorites=(type,id)=>{
        let objFavorites=[...store.favorites];
        let favFiltered=objFavorites.filter(persona => (persona.type == type && persona.id == id))
        
        if(favFiltered.length > 0){
            let favFilteredRemove=objFavorites.filter(persona => (!(persona.type == type && persona.id == id)))
            dispatch({type: 'get_favorites',payload: favFilteredRemove });   
            const lsFavorites = JSON.stringify(favFilteredRemove);
        	localStorage.setItem('favorites',lsFavorites); 
        }else{
            let favAdd=[...store.favorites,{name:text,id:id,type:type}]
            dispatch({type: 'get_favorites',payload: favAdd });
            const lsFavorites = JSON.stringify(favAdd);
        	localStorage.setItem('favorites',lsFavorites);
        }
    }
    const handleGetFavoriteStates=(type,id)=>{
        const lsFavorites=localStorage.getItem('favorites');
		const objLsFavorites=JSON.parse(lsFavorites);
        const objStoreFavorites=[...store.favorites]
        let objFavorites=[];
		if (objLsFavorites) {
            objFavorites=objLsFavorites;
            if(Array.isArray(objStoreFavorites) && !objStoreFavorites.length) {
                dispatch({type: 'get_favorites',payload: objFavorites });
            }
        }else{
            objFavorites=objStoreFavorites;
        }
        let favFiltered=objFavorites.filter(persona => (persona.type == type && persona.id == id))
        setHeart(favFiltered.length > 0 ? "fa-solid fa-heart" : "fa-regular fa-heart" )
    }
    useEffect(()=>{
        if(!store.favorites) return
        handleGetFavoriteStates(type,id);
    },[store.favorites])

return (
    <>
     <div className="card border-black mx-2 bg-black rounded-4 card-background-black" >
        <img src={RandomImage(type)}   style={{ height:"200px", minHeight:"200px", objectFit:"cover"}}  className="card-img-top rounded-top-4" alt="..." onClick={()=>{navigate('/elementdetail/'+{type}+'/'+{id})}}/>
        <div className="card-body text-white">
            <h5 className="card-title">{text}</h5>
            <button className="btn btn-secondary mt-5 ms-3 me-4" style={{display: "inline-block",width:"50%"}} type="button" onClick={()=>{navigate('/elementdetail/'+ type +'/'+ id )}}>Learn more</button>
            <button className="btn btn-secondary mt-5 ms-4 me-1" style={{display: "inline-block",width:"20%"}} type="button" onClick={()=>{handleSetFavorites(type,id)}}><i className={heart} ></i></button>
        </div>
        <div className="notch-contain"></div>
    </div>
    </>
    )
}
export default CardScroll;


