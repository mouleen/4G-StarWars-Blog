import { Navigate, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

const CardScroll = ({text,type,id}) => {
    const {store, dispatch} =useGlobalReducer()
    const navigate=useNavigate();
    const randomImage=()=>{
        let image_array=[
            "https://lumiere-a.akamaihd.net/v1/images/bunta-tree-main_598ecc76.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/mother-aniseya-main_7ffc85e5.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/plagueis-main-v1_b596bc2a.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/jecki-lon-main_3b0268ec.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/indara-main_a497ba73.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/mother-aniseya-main_7ffc85e5.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/fennec-shand-main_298dc37c.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/the-book-of-boba-fett-chapter-1-story-gallery-02_a61669_68a1c6f0.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/the-book-of-boba-fett-ch-6-story-gallery-07_9e08ccc3.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/anakin-skywalker-main_7599d875.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/Padme-Amidala_05d50c8a.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_5679d74e.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/sw-rotj-luke-skywalker-palpatine_02a9e911.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/sw-soulmate-leia-result-quiz-and-poll-images_04527594.jpeg",
            "https://lumiere-a.akamaihd.net/v1/images/chewie-main_906097a5.jpeg"
        ]
        let imageIDX = Math.floor(Math.random() * image_array.length);
        return image_array[imageIDX];
    }
    const [heart,setHeart] = useState("fa-regular fa-heart");
    const handleSetFavorites=(type,id)=>{
        let fav=[...store.favorites];
        let favFiltered=fav.filter(persona => (persona.type == type && persona.id == id))
        console.log(favFiltered,'FILTERED');
        if(favFiltered.length > 0){
            let favFilterRemove=fav.filter(persona => (!(persona.type == type && persona.id == id)))
            console.log(favFilterRemove,'FILTERREMOVE');
            dispatch({type: 'get_favorites',payload: favFilterRemove });    
        }else{
            let favAdd=[...store.favorites,{name:text,id:id,type:type}]
            dispatch({type: 'get_favorites',payload: favAdd });
        	//localStorage.setItem(type,favAdd);
        }
    }
    const handleGetFavoriteStates=(type,id)=>{
        /*const Element=localStorage.getItem(type);
		const objElement=JSON.parse(Element);
        let fav=[];
		if (objElement) {
            fav=objElement;
        }else{*/
          let fav=[...store.favorites]
        //}
        let favFiltered=fav.filter(persona => (persona.type == type && persona.id == id))
       // console.log(favFiltered,'< FILTERED | FAV >',fav);
       setHeart(favFiltered.length > 0 ? "fa-solid fa-heart" : "fa-regular fa-heart" )
        //let cssclass="fa-solid fa-heart"// fa-regular
    }
    useEffect(()=>{
        if(!store.favorites) return
        handleGetFavoriteStates(type,id);
    },[store.favorites])
return (
    <>
     <div className="card border-black mx-2 bg-black rounded-4 card-background-black" >
        <img src={randomImage()}   style={{ height:"200px", minHeight:"200px", objectFit:"cover"}}  className="card-img-top rounded-top-4" alt="..." onClick={()=>{navigate('/elementdetail/'+{type}+'/'+{id})}}/>
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


