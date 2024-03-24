import "../css/body.css"
import { useEffect, useState } from "react"
import RestCard from "./RestCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
// import { DATA } from "./constant"

let Body = () =>{
    const [Data, setData] = useState([])
    const [filteredRest, setFilteredRest] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async ()=>{
        let response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.65200&lng=77.16630")
        let jsdata = await response.json()
        setData(jsdata?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRest(jsdata?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }

    const searchHandler = ()=>{
        const filterRest = Data.filter((item) =>{
            return item.info.name.toLowerCase().includes(searchText.toLowerCase())||
            item.info.cuisines.some((cuisine) =>
              cuisine.toLowerCase().includes(searchText.toLowerCase())
            )}
          );
          setFilteredRest(filterRest);
    }

    const enterHandler = (e)=>{
        if (e.key ==="Enter"){
            searchHandler()
        }
    }

    return Data.length ===0? (<Shimmer/>):(
        <div className="container">
            <div className="search-bar">
                <input type="text" className="search-box" placeholder="Search Resturant or Cuisines" value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}

                onKeyPress={enterHandler}
                />
                <button className="btn-search"
                onClick={() => {searchHandler()}}
                >Search</button>
            </div>
            <div className="rest-container">
                {filteredRest.map((items)=>
                    <Link key={items.info.id} to={"/restaurant/" + items.info.id}> <RestCard data = {items} /> </Link>
                )}
            </div>
        </div>
    )
}

export default Body;