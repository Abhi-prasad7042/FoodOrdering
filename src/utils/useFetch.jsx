import { useState, useEffect } from "react"

const useFetch = (url)=>{
    const [Data, setData] = useState([])
    const [filteredRest, setFilteredRest] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async ()=>{
        let response = await fetch(url)
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

    return [Data, filteredRest, searchText, setSearchText, enterHandler,searchHandler ]
}

export default useFetch

// useState, useEffect, useCallback
// url as an args
// return data, error, isloading