// import "../css/restcard.css"
import { CARD_IMG_URL } from "./constant"

const RestCard = (props) => {
    const  Data = props
    const {name, cuisines, sla, avgRating, cloudinaryImageId, costForTwo} = Data.data.info
    
    return (
        <div className="m-4 w-60 h-[280px]  rounded-md overflow-hidden shadow-sm hover:shadow-xl ">
            <img src={CARD_IMG_URL + cloudinaryImageId} alt=""  className="h-[150px] w-[400px]"/>
            <h4 className="font-bold text-center">{name.slice(0,28)}</h4>
            <hr />
            <div className="p-1">
                <p className="mt-1">{cuisines.slice(0,2).join(",")}</p>
    
                <p>{sla.deliveryTime} mins</p>
                <div className="flex justify-between">
                    <p>{costForTwo}</p>
                    {
                    avgRating!==undefined? <div className="">
                    <p className="border w-8 text-center rounded-lg bg-green-400">{avgRating}</p>
                    </div>: <></>
                    }
                </div>
            </div> 
        </div>
    )
}

export const WithLabelRestCard = (RestCard) =>{
    // eslint-disable-next-line react/display-name
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white mx-2 rounded-lg p-1">Promoted</label>
                <RestCard {...props}/>
            </div>
        )
    }
}

export default RestCard;