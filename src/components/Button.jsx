import { useEffect, useState } from "react"
import { addItem, removeItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"

const Button= ({data})=>{
    const [numberCount, setNumberCount] = useState(0)

    // useEffect(() => {
    //     const savedCount = localStorage.getItem("numberCount");
    //     setNumberCount(parseInt(savedCount, 10))
    // }, []);

    const dispatch = useDispatch()
    const addItemHandle = (item)=>{
        const obj = {...item, numberCount: numberCount}
        setNumberCount(numberCount+1)
        // localStorage.setItem('numberCount', numberCount);
        dispatch(addItem(obj))
    }

    const removeItemHandle = (item)=>{
        // setNumberCount(numberCount-1)
        // localStorage.setItem('numberCount', numberCount);
        dispatch(removeItem(item))
    }
    return(
        <>
        {numberCount>0? 
        <div className="bg-yellow-400 w-16 relative left-[104px] top-[50px] rounded-md flex justify-between"><button onClick={() =>removeItemHandle(data)}>➖</button> {numberCount} <button onClick={() =>addItemHandle(data)}>➕</button></div>:
        <button className="bg-yellow-400 w-16 relative left-[104px] top-[50px] rounded-md" onClick={() =>addItemHandle(data)}>ADD+</button>
        }
        </>
    )
}

export default Button