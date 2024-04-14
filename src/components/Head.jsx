import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Head() {


  const cartItem = useSelector((store)=> store.cart.items)
  // console.log(cartItem)

    return (
      <nav>
        <div className="flex justify-between px-4 bg-[#FFCC00]">
          <div className="w-24 h-16">
              <img src={LOGO_URL} alt="" className="h-16"/>
          </div>
          <div className=" flex justify-around items-center">
              <ul className="w-96 flex justify-around items-center">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  {
                    cartItem.length >0 ?
                    <li className="z-50"><Link to="/cart">Cart<span className="bg-red-600 text-xs text-center rounded-xl h-4 w-5 inline-block relative right-[5px] bottom-[5px] -z-50">{cartItem.length}</span></Link></li>:
                    <li className="z-50"><Link to="/cart">Cart</Link></li>
                  }
                  
              </ul>
          </div>
        </div>
      </nav>
    )
  }

export default Head;