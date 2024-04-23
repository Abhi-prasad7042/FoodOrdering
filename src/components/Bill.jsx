import { useSelector } from "react-redux"

const Bill = ({data})=>{

    const amount = data.reduce((total, item)=>{
        return total+(item?.card?.info?.defaultPrice/100 * item.numberCount  || item?.card?.info?.price/100 * item.numberCount)
    },0)
    
    return(
        <div className="p-1 my-1">
            {
                data.map((item)=>(
                    <div className="flex justify-between my-2">
                        <p className="text-gray-600">{item.card.info.name}  <span className="text-gray-400 mx-2">x</span>  {item.numberCount}</p>
                        <p className="text-gray-600">{item?.card?.info?.defaultPrice/100 * item.numberCount  || item?.card?.info?.price/100 * item.numberCount}</p>
                    </div>
                ))
            }
            <hr />
            <div className="flex justify-between my-2">
                <p className="text-gray-600">Delivery Fee</p>
                <p className="text-gray-600">35</p>
            </div>
            <div className="flex justify-between my-2">
                <p className="text-gray-600">GST and Restaurant Charges</p>
                <p className="text-gray-600">54</p>
            </div>
            <hr className="border-black"/>
            <div className="flex justify-between my-2">
                <p>Total ₹</p>
                <p>{amount+54+35}</p>
            </div>

            <button className="bg-gray-600 w-full my-3 h-10 rounded-md text-white text-lg">Place Order 🛒</button>

        </div>
    )
}

export default Bill