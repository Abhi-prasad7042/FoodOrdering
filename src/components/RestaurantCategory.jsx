import RestaurantListMenu from "./RestaurantListMenu";

const RestaurantCategory = ({data})=>{
    const {title, itemCards} = data

    const itemcount = itemCards ? itemCards.length : 0;
    
    return (
        <div className="w-full  my-4 border-t-2 border-black">
            <div className="my-4 flex justify-between p-1">
                <span className="font-bold text-lg">{title} ({itemcount})</span>
                <span>⬇️</span>
            </div>
            <RestaurantListMenu data = {itemCards}/>            
        </div>
        
    )
}

export default RestaurantCategory;