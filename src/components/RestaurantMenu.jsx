import { useParams } from "react-router-dom";
// import "../css/restaurantMenu.css"
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{
    const { restID } = useParams()
    const [menu, menuList] = useRestaurantMenu(restID) //custom hook

    return (
        <div className="RestMenu-Container">
            <h1>{menu?.data?.cards[2]?.card?.card?.info?.name}</h1>
            <ul className="RestMenu-List">
                {menuList.map((item) => ( // Iterate over menuList and display menu items
                    <li key={item.card?.info?.id}>{item.card?.info?.name}:-   {item.card?.info?.price/100 || item.card?.info?.defaultPrice/100}</li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;