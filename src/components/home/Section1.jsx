import "./home.css"
import BIKE from "../media/Group 1.png"
import PLAY from "../media/1664285914google-play-logo-png.png"
import { Link } from "react-router-dom"
import { Apple } from "react-bootstrap-icons"


export const Section1 =() =>{
  
  return(
    <div>
      <section className={"sec1"}>
        <div className="cont1">
        <h1 className={"txt1"}>
        Food Grab   
        </h1>
        <h1 className={"txt1 delivers"}>
        <div className="polygon">Delivers</div> <div>Your</div>
        </h1>
        <h1 className={"txt1"}>
          Favorites
        </h1>
        <h1 className={"txt1"}>
          Within <span className={"min"}>Minutes</span>
        </h1>
        <div className={"buttoncontainer"}>
          <Link>
            <div className="ios">
              <Apple />
              <p>Coming Soon</p>
            </div>
          </Link>
          <Link>
            <div className="andriod">
              <img src={PLAY} alt="" />
              <p>Coming Soon</p>
            </div>
          </Link>
        </div>
        </div>
        <div className="imagecont">
          <img className={"img1"} src={BIKE} alt=""/>
        </div>
      </section>
    </div>
  )
}
