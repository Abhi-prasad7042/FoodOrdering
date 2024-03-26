import { useState, useEffect } from "react"
import { MENU_URL } from "../components/constant"

const useRestaurantMenu = (restID)=>{
    const [menu, setMenu] = useState([])
    const [menuList, setMenuList] = useState([])

    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async ()=>{
        const response = await fetch(MENU_URL+restID)
        const data = await response.json()
        setMenu(data)
        setMenuList(data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }

    return [menu, menuList]
}

export default useRestaurantMenu;