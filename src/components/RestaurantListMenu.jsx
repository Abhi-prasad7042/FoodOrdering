import {CARD_IMG_URL } from "./constant";

/* eslint-disable react/jsx-key */
const RestaurantListMenu = ({data})=>{
    console.log(data)
    return (
        <div>
            {
                data.map((item)=>(
                    <div key={item.card.info.id} className="my-5 p-2 flex items-center border-b-2 border-gray-200">
                        <div className=" w-[630px]">
                        <h2 className="font-mono text-lg font-bold">{item.card.info.name}</h2>
                        <p className="font-semibold">₹{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</p>

                        {item?.card?.info?.ratings?.aggregatedRating.rating !==undefined ? ( // Check if aggregatedRating exists
                        <p className="flex w-24 justify-self-start items-center text-sm text-gray-500">
                            <img className="w-4 h-4" src="https://cdn0.iconfinder.com/data/icons/stars-rounded/250/Green_Star_5-512.png" alt="" />
                            {item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                        </p>
                        ) : null}

                            <p className="text-gray-500">{item?.card?.info?.description}</p>
                        </div>
                        <button className="bg-yellow-400 w-16 relative left-[104px] top-[50px] rounded-md">Add+</button>
                        <img className="w-[180px] h-[120px] rounded-lg" src={CARD_IMG_URL + item?.card?.info?.imageId} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default RestaurantListMenu;