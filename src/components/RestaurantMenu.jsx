import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import { ShimmerMenu, ShimmerMenuCards } from "./Shimmer";

const RestaurantMenu = ()=>{
    const { restID } = useParams()
    const [menu, menuList] = useRestaurantMenu(restID) //custom hook
    const [showIndex, setShowIndex] = useState(0)

    const category = Array.isArray(menuList) ? menuList.filter((item) => {
        return (
            item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    }) : [];

    const toggleItems = (index)=>{
        setShowIndex((prevIndex)=> prevIndex===index?null : index)
    }
    

    return menu.length===0?<ShimmerMenu />:(
        <div className="w-3/5 mx-auto my-10">
            <h1 className="text-3xl font-bold font-serif shadow-sm">{menu?.data?.cards[2]?.card?.card?.info?.name}</h1>
            <div className="border h-36 p-3 my-6 rounded-xl shadow-lg">
                <p className="font-bold text-lg font-sans"><span className="border rounded-full mr-2 text-sm inline-block w-5 text-center h-6 bg-green-500">⭐</span>{menu?.data?.cards[2]?.card?.card?.info?.avgRating} ({menu?.data?.cards[2]?.card?.card?.info?.totalRatingsString}): {menu?.data?.cards[2]?.card?.card?.info?.costForTwoMessage} </p>
                <p className="my-2 text-yellow-500">{menu?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>
                <p className="font-semibold text-xs">OUTLET:- {menu?.data?.cards[2]?.card?.card?.info?.locality}</p>
                <p className="my-1 text-xs font-semibold">{menu?.data?.cards[2]?.card?.card?.info?.sla.minDeliveryTime}-{menu?.data?.cards[2]?.card?.card?.info?.sla.maxDeliveryTime} mins</p>
                <p className="font-semibold text-xs">{menu?.data?.cards[2]?.card?.card?.info?.sla.lastMileTravelString} | {menu?.data?.cards[2]?.card?.card?.info?.feeDetails.message.split("|")[1]}</p>
            </div>
            {category.length===0?<ShimmerMenuCards />: category.map((item, index)=>{
                return <RestaurantCategory key={index} data ={item.card.card} showItems = {index===showIndex}
                 setItems = {()=>toggleItems(index)}/>
            })}
        </div>
    );
}

export default RestaurantMenu;