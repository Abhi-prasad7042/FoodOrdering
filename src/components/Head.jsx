import { LOGO_URL } from "./constant";
import "../css/head.css"
import { Link } from "react-router-dom";

function Head() {

    return (
      <nav>
        <div className="nav-bar">
          <div className="logo-container">
              <img src={LOGO_URL} alt="" />
          </div>
          <div className="nav-items">
              <ul>
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