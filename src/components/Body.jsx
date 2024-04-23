import RestCard, {WithLabelRestCard} from "./RestCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useFetch from "../utils/useFetch"
import { DATA_URL } from "../utils/constant"

let Body = () =>{
    const [Data, filteredRest, searchText, setSearchText, enterHandler, searchHandler] = useFetch(DATA_URL)
    const NewRestCard = WithLabelRestCard(RestCard)

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
            
            <div className="flex flex-wrap  w-9/12 mx-auto my-10 justify-around">
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