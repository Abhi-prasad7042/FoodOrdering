// import "../css/body.css"
import { useEffect, useState } from "react"
import RestCard, {WithLabelRestCard} from "./RestCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
// import { DATA } from "./constant"

let Body = () =>{
    const [Data, setData] = useState([])
    const [filteredRest, setFilteredRest] = useState([])
    const [searchText, setSearchText] = useState("")

    const NewRestCard = WithLabelRestCard(RestCard)

    console.log(Data)
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
            <div className="border w-2/5 my-5 mx-auto flex h-10 rounded-lg shadow-xl">
                <input type="text" className="w-96 pl-2 rounded-lg outline-none" placeholder="Search Resturant or Cuisines" value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}

                onKeyPress={enterHandler}
                />
                <button className=" w-36 rounded-lg bg-amber-200 hover:bg-amber-300"
                onClick={() => {searchHandler()}}
                >Search</button>
            </div>
            <div className="flex flex-wrap  mx-24 my-10 justify-around">
                {filteredRest.map((items)=>
                    <Link key={items.info.id} to={"/restaurant/" + items.info.id}> 
                    {
                        items.info.promoted ?(<NewRestCard data={items}/>):
                        (<RestCard data={items}/>)
                    }
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Body;