import { useEffect, useState } from "react"
import { addItem, removeItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"

const Button= ({data})=>{
    const [numberCount, setNumberCount] = useState(-1)

    // useEffect(() => {
    //     const savedCount = localStorage.getItem(`numberCount${data.card.info.id}`);
    //     setNumberCount(parseInt(savedCount, 10))
    // }, [data.card.info.id]);

    useEffect(() => {
        const savedCount = localStorage.getItem(`numberCount${data.card.info.id}`);
        if (savedCount !== null && savedCount !== undefined) {
          setNumberCount(parseInt(savedCount, 10));
        } else {
          setNumberCount(0);
        }
      }, [data.card.info.id]);

    const dispatch = useDispatch()
    const addItemHandle = (item) => {
        const updatedCount = numberCount + 1;
        setNumberCount(updatedCount); // Update state
        localStorage.setItem(`numberCount${data.card.info.id}`, updatedCount);
        console.log(updatedCount)
        dispatch(addItem({ ...item, numberCount: updatedCount }));
      };
      
      const removeItemHandle = (item) => {
        if (numberCount > 0) {
          const updatedCount = numberCount - 1;
          setNumberCount(updatedCount); // Update state
          localStorage.setItem(`numberCount${data.card.info.id}`, updatedCount); // Use updatedCount
          dispatch(removeItem(item));
        }
      };
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