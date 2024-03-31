// import "../css/shimmer.css"

const Shimmer = ()=>{
    return(
        <div className="shim">
            <div className="w-[400px] mx-auto my-5 bg-gray-200 h-11 rounded-lg"></div>
            <div className="flex flex-wrap  mx-24 my-10 justify-around">
                <div className="m-4 w-60 h-[200px] bg-gray-200 rounded-lg"></div>
                <div className="m-4 w-60 h-[200px] bg-gray-200 rounded-lg"></div>
                <div className="m-4 w-60 h-[200px] bg-gray-200 rounded-lg"></div>
                <div className="m-4 w-60 h-[200px] bg-gray-200 rounded-lg"></div>
                <div className="m-4 w-60 h-[200px] bg-gray-200 rounded-lg"></div>
                <div className="m-4 w-60 h-[200px] bg-gray-200 rounded-lg"></div>
            </div>
        </div>
    )
}

export default Shimmer;