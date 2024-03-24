import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";
import { useParams } from "react-router-dom";
import "../css/restaurantMenu.css"

const RestaurantMenu = ()=>{
    const [menu, setMenu] = useState([])
    const [menuList, setMenuList] = useState([])
    const { restID } = useParams()
    console.log(useParams())
    console.log(restID)

    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async ()=>{
        let response = await fetch(MENU_URL + restID)
        let data = await response.json()
        setMenu(data)
        setMenuList(data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        console.log(data)
        console.log(menuList)
    }

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