import LOGO from "../components/media/Landscape Logo II_1- Transparent.png"

export const Navbar = ()=>{
  return(
    <div>
      <nav>
      <img className={"logo1"} src={LOGO} alt=""/>
      <div>
        <button className={"merchantsigup"}>
          
        </button>
        <button className={"merchantlogin"}>

        </button>
      </div>
      </nav>
    </div>
  )
}