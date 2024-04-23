import { useSelector } from "react-redux";
import { CART_IMG_URL, EMPT_CART_IMG_URL  } from "../utils/constant";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import RestaurantListMenu from "./RestaurantListMenu";

const Cart = ()=>{
    const cartItems = useSelector((store)=> store.cart.items)
    console.log(cartItems)

    const dispatch = useDispatch()
    const clearItem = ()=>{
        dispatch(clearCart())
    }

    const removeItemHandle = (item)=>{
        dispatch(removeItem(item))
    }

    return(
        <div>
          <h1 className="text-2xl flex mx-auto w-24 my-4">Cart <img src={CART_IMG_URL} alt="" className="w-10"/></h1>
          <button className="bg-black text-white p-1 text-xs rounded-lg right-[20px] top-[90px] absolute" onClick={clearItem}>Clear Cart</button>
    
          {cartItems.length === 0 ? (
            <div className="flex w-9/12">
              <img src={EMPT_CART_IMG_URL} alt="empty cart image" className="w-8/12 h-96"/>
              <div className="h-20 my-20">
                <h1 className="text-center text-lg text-gray-400">Go to menu and add items</h1>
                <Link to="/" className="mx-40"><button className="bg-gray-300 p-1 rounded-lg">Menu</button></Link>
              </div>
            </div>
          ) : (
            <div className="w-3/4 mx-auto justify-between">
              <div className="w-3/4 mx-auto my-5"> 
                <RestaurantListMenu data={cartItems} />
              </div>
    
              <div className="my-5 w-4/12 ">
                <h1>Bill Details</h1>
                <hr />
              </div>
            </div>
          )}
        </div>
      );
}

export default Cart;

// (
//     <div>
//         <h1 className="text-2xl  flex mx-auto w-24 my-4">Cart <img src={CART_IMG_URL} alt="" className="w-10"/></h1>
//         <button className="bg-black text-white p-1 text-xs rounded-lg right-[20px] top-[90px] absolute " onClick={clearItem}>Clear Cart</button>
        
//         {cartItems.length === 0? <div className="flex w-9/12 ">
//                                     <img src={EMPT_CART_IMG_URL} alt="empty cart image" className="w-8/12 h-96"/>
//                                     <div className="h-20 my-20">
//                                         <h1 className="text-center text-lg text-gray-400">Go to menu and add items</h1>
//                                         <Link to="/" className="mx-40"><button className=" bg-gray-300 p-1 rounded-lg">Menu</button></Link>
//                                     </div>
//                                  </div>:
//             <div className="w-9/12 mx-auto flex justify-between">

//                 <div className="w-7/12 my-5"> 
//                 {
//                     // use same component
//                     cartItems.map((item, index)=>(
//                         <div key={index} className=" p-2 flex items-center border-b-2 border-gray-200">
//                             <div className=" w-[630px]">
//                             <h2 className="font-mono text-lg font-bold">{item.card.info.name}</h2>
//                             <p className="font-semibold">₹{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</p>

//                             {item?.card?.info?.ratings?.aggregatedRating.rating !==undefined ? ( // Check if aggregatedRating exists
//                             <p className="flex w-24 justify-self-start items-center text-sm text-gray-500">
//                                 <img className="w-4 h-4" src="https://cdn0.iconfinder.com/data/icons/stars-rounded/250/Green_Star_5-512.png" alt="" />
//                                 {item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})
//                             </p>
//                             ) : null}

//                             <p className="text-gray-500">{item.card.info.description.slice(0,40)+"..."}</p>

//                             </div>
//                                 <button className="bg-black text-white p-1 text-xs w-13 relative left-[93px] top-[50px] rounded-md" onClick={()=>removeItemHandle(item)}>Remove❌</button>
                            
//                             <img className="w-[200px] h-[110px] rounded-lg" src={CARD_IMG_URL + item?.card?.info?.imageId} alt="" />
//                         </div>))
//                 }
//                     </div>


//                     <div className="my-5 w-4/12 ">
//                         <h1>Bill Details</h1>
//                         <hr />
//                     </div>

//             </div>  
//         }      
//     </div>
// )