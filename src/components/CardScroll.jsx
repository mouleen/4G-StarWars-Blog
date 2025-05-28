import { Navigate, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

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
    
return (
    <>
     <div className="card border-black mx-2 bg-black rounded-4" >
        <img src={randomImage()}   style={{ minHeight:"200px", objectFit:"cover"}}  className="card-img-top rounded-top-4" alt="..." onClick={()=>{navigate('/elementdetail/'+{type}+'/'+{id})}}/>
        <div className="card-body text-white">
            <h5 className="card-title">{text}</h5>
            <a href={'/elementdetail/'+ type +'/'+ id }>More +</a>
        </div>
        <div className="notch-contain"></div>
    </div>
    </>
    )
}
export default CardScroll;


