import "./home.css"
import spoon from "../media/Vector1.png"
import phone4 from "../media/phone.png"
import { Link } from "react-router-dom"
import FG from "../media/Logo icon - White_1- Transparent.png"
import SF from "../media/spoon and knife.png"
import PF from "../media/plate and fork.png"
import Plate from "../media/Frame 79(1).png"
import MAN from "../media/23 5.png"
import arrowleft from "../media/arrowleft.png"


export const Section3 = ()=>{
  return(
    <div>
      <section className={"sec3"}>
{/* ===================== large screen  start =================== */}
    <div className={"largescreen"}>
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
          Download App <img src={arrowleft} alt=""/>
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
    </div>
{/* ===================== large screen end =================== */}
{/* ===================== small screen start=================== */}
<div className={"smallscreen"}>
    <div className={"cont6"}>
      <div className={"container11"}>
        <img className={"LG3"} src={FG} alt="" />
        <div className={"cont4"}>
        <div className={"spoon1"} >
        <img className={"spoon"}src={spoon} alt="" />
        </div>
        <div className={"imgcont1"}>
        <img className={"phonefull1"} src={phone4} alt="" />
        </div>
        </div>
        <h1>
        Download <br/>Food Grab App
        </h1>
        <div>
        <Link>
        <button className={"downlaod1"} >
          Download App <img src={arrowleft} alt=""/>
        </button>
        </Link>
        </div>
        </div>
        
      </div>
      <div className={"contanier2"}>
          <div className={"explore"}>
          <img className={"LG3"} src={FG} alt="" />
          <div className={"PSF"}>
          <div className={"SF1"}>
          <img src={SF} alt="" />
          </div>
          <div className={"plate1"}>
          <img  src={Plate} alt="" />
          </div>
          </div>
         
          <h1>
          Explore Categories <br/> Place Order
          </h1>

          </div>
          <div className={"enjoy"}>
          <img className={"LG3"} src={FG} alt="" />
         <div className={"meal1"}>
         <div className={"AL"}>
         <img className={"PF1"} src={PF} alt="" />
          <h1>
          Enjoy your Meal
          </h1>
         </div>
         </div>   
         <div className={"man1"}>
          <img src={MAN} alt="" />
          </div>
          </div>
      </div>
    </div>
{/* ===================== small screen end=================== */}

      </section>
    </div>
  )
}