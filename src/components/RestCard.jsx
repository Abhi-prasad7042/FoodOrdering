// import "../css/restcard.css"
import { CARD_IMG_URL } from "./constant"

const RestCard = (props) => {
    const  Data = props
    const {name, cuisines, sla, avgRating, cloudinaryImageId, costForTwo} = Data.data.info
    
    return (
        <div className="m-4 w-60 h-[290px] border rounded-md overflow-hidden shadow-lg">
            <img src={CARD_IMG_URL + cloudinaryImageId} alt=""  className="h-[150px] w-[400px]"/>
            <h4 className="font-bold text-center">{name.slice(0,28)+".."}</h4>
            <hr />
            <div className="p-1">
                <p className="mt-1">{cuisines.slice(0,2).join(",")}</p>
                <p>{sla.deliveryTime} mins</p>
                <div className="">
                    <p>{costForTwo}</p>
                    {
                    avgRating!==undefined? <div className="">
                    <p className="">{avgRating}</p>
                    </div>: <></>
                    }
                </div>
            </div> 
        </div>
    )
}

export default RestCard;