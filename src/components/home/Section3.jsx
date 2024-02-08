import "./home.css"
import spoon from "../media/Vector1.png"
import phone4 from "../media/phone.png"
import { Link } from "react-router-dom"
import FG from "../media/Logo icon - White_1- Transparent.png"
import SF from "../media/spoon and knife.png"
import PF from "../media/plate and fork.png"
import Plate from "../media/Frame 79(1).png"
import MAN from "../media/23 5.png"
import { ArrowBarRight } from "react-bootstrap-icons"


export const Section3 = ()=>{
  return(
    <div>
      <section className={"sec3"}>
      <div className={"cont5"}>
      <div className={"container1"}>
        <img className={"LG3"} src={FG} alt="" />
        <img className={"spoon"}src={spoon} alt="" />
        <h1>
        Download <br/>Food Grab App
        </h1>
        <div className={"cont3"}>
        <div>
        <Link>
        <button className={"downlaod"} >
          Download App <ArrowBarRight />
        </button>
        </Link>
        </div>
       
        <div className={"imgcont"}>
        <img className={"phonefull"} src={phone4} alt="" />
        </div>
        </div>
        </div>
        
      </div>
        <div className={"contanier2"}>
          <div className={"explore"}>
          <img className={"LG3"} src={FG} alt="" />
          <img className={"SF"} src={SF} alt="" />
          <h1>
          Explore Categories <br/> Place Order
          </h1>
          <div>
          <img className={"plate"} src={Plate} alt="" />
          </div>

          </div>
          <div className={"enjoy"}>
          <img className={"LG3"} src={FG} alt="" />
         <div className={"meal"}>
         <img className={"PF"} src={PF} alt="" />
          <h1>
          Enjoy your Meal
          </h1>
         </div>
          <div className={"mand"}>
          <img className={"man"} src={MAN} alt="" />
          </div>
          
            
          </div>
        </div>
      </section>
    </div>
  )
}