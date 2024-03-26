// import "../css/restcard.css"
import { CARD_IMG_URL } from "./constant"

const RestCard = (props) => {
    const  Data = props
    const {name, cuisines, sla, avgRating, cloudinaryImageId, costForTwo} = Data.data.info
    
    return (
        <div className="rest-card">
            <img src={CARD_IMG_URL + cloudinaryImageId} alt="" />
             <h4>{name}</h4>
             <hr /> 
             <p className="para">{cuisines.join(", ")}</p>
             <p>{sla.deliveryTime} mins</p>
             <div className="card-price">
                <p>{costForTwo}</p>
                {
                   avgRating!==undefined? <div className="card-rating">
                   <p className="rating">{avgRating}</p>
               </div>: <></>
                }
             </div>
        </div>
    )
}

export default RestCard;