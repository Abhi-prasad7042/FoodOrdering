import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

function Head() {

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
                  <li>Cart</li>
              </ul>
          </div>
        </div>
      </nav>
    )
  }

export default Head;