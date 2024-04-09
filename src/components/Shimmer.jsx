
export const ShimmerMenu = ()=>{
    return(
        <div className="w-3/5 mx-auto my-10">
            <h1 className="w-5/12 my-10 bg-gray-200 h-11 rounded-lg"></h1>
            <div className="h-36 bg-gray-200 my-4 rounded-xl shadow-lg"></div>
        
        </div>
    )
}

export const ShimmerMenuCards = ()=>{
    return(
        <div className="w-full mx-auto my-8">
            <div className="h-11 my-3 bg-gray-200 rounded-xl"></div>
            <div className="h-11 my-3 bg-gray-200 rounded-xl"></div>
            <div className="h-11 my-3 bg-gray-200 rounded-xl"></div>
        </div>
    )
}

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