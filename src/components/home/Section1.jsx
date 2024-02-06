import "./home.css"
import BIKE from "../media/Group 1.png"

export const Section1 =() =>{
  
  return(
    <div>
      <section className={"sec1"}>
        <div>
        <h1 className={"txt1"}>
        Food Grab   
        </h1>
        <h1 className={"txt1"}>
        <span className="polygon">Delivers</span> Your
        </h1>
        <h1 className={"txt1"}>
          Favorites
        </h1>
        <h1 className={"txt1"}>
          Within Minutes!
        </h1>
        </div>
        <div className="imagecont">
          <img className={"img1"} src={BIKE} alt=""/>
        </div>
      </section>
    </div>
  )
}
