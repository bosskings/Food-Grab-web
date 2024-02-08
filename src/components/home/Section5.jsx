import LG from "../media/Logo icon - White_1- Transparent.png"
import LGT from "../media/Logo icon - White_1- Transparenttop.png"
import half from "../media/phone half2.png"
import logoBT from "../media/Landscape Logo - White_1- Transparent.png"
import "./home.css"
import PLAY from "../media/1664285914google-play-logo-png.png"
import { Apple, Linkedin, Twiter,Facebook, Instagram, Twitter } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

export const Section5 = ()=>{
  return(
    <div>
      <section className={"sec5"}>
        <div className={"downloadapp"}>
        <div className={"text"}>
          <h1>Download Food Grab App</h1>
          <div className={"buttons"}>
          <button className={"apple1"}>
           <Apple /> Coming Soon
          </button>
          <button className={"play1"}>
            <img className={"play2"} src={PLAY} alt="" /> Coming Soon
          </button>
          </div>
        </div>
        <div className={"half"}>
          <img src={half} alt="" /> 
        </div>
        <img className={"LGT"} src={LGT} alt="" />
        <img className={"LG3"} src={LG} alt="" />
        </div>
        <div className={"easier"}>
          <div className="text2">
            <p>CONVINCED?</p>
            <h1>Let’s Make life easier with Food Grab</h1>
            <p>Experience the ultimate convenience with Food Grab - your go-to platform for swift and seamless food delivery!. Place your order now and let Food Grab bring delicious moments to your doorstep in no time!</p>
            <button className={"contact"}>
            Contact US
            </button>
          </div>
          <div className={"bottom"}>
          <Link to={"/"}>
              <div className={"logoBT"}>
                <img src={logoBT} alt="" />
              </div>
          </Link>
             
              <div>
                <p>© 2024 Food Grab. All rights reserved.</p>
              </div>
              <div className={" icons"}>
              <Link to="">
              <div className={"circle2"}>
                <Facebook />
              </div>
              </Link>
              <Link to="">
              <div className={"circle2"}>
                <Twitter />
              </div>
              </Link>
              <Link to="">
              <div className={"circle2"}>
                <Linkedin />
              </div>
              </Link>
              <Link to="">
              <div className={"circle2"}>
                <Instagram />
              </div>
              </Link>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}