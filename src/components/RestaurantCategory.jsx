import RestaurantListMenu from "./RestaurantListMenu";

const RestaurantCategory = ({data, showItems, setItems})=>{

    const {title, itemCards} = data
    const itemcount = itemCards ? itemCards.length : 0;

    const clickHandle = ()=>{
        setItems()
    }

    return (
        <div className="w-full  my-4  border-black shadow-xl">
            <div className="my-4 flex justify-between p-1 cursor-pointer" onClick={clickHandle}>
                <span className="font-bold text-lg">{title} ({itemcount})</span>
                {showItems ?<span className="cursor-pointer" >⬆️</span>:<span className="cursor-pointer" onClick={clickHandle}>⬇️</span>}
            </div>
            {showItems && <RestaurantListMenu data = {itemCards} />}            
        </div>
        
    )
}

export default RestaurantCategory;