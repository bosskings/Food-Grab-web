import "./navbar2.css"
import React, { useState } from 'react'
import LOGO3 from "../media/logo black.png"
import { Link } from "react-router-dom"
import { FR, NG, US, } from "country-flag-icons/react/1x1"
const languages = [
  {value: "en", text: "ENG"},
  {value: "ha", text: "HAU"},
  {value: "ig", text: "IGB"},
  {value: "yo", text: "YOU"},
  {value: "fr", text: "FR"}
]
const country=[

  {value: "en", img: <US className="country en a1"/>},
  {value: "ha", img: <NG className="country ha a2"/>},
  {value: "ig", img: <NG className="country ig a3"/>},
  {value: "yo", img: <NG className="country yo a4"/>},
  {value: "fr", img: <FR className="country fr a5"/>},
]



export const Navbar2 = () => {
  const [lang, setLang] = useState(null);
  const [count, setCount] = useState ("")

  const handleCountry =() =>{
    if (country.values === "en" && languages.values === "en"){
      setCount(count ?"a1 ": "a2 is-visible")
    }else if (country.values === "ha" && languages.values === "ha"){
      setCount(count? "a2 is-visible": "a1 not-visible")
    }else if (country.values === "ig" && languages.values === "ig"){
      setCount("a3 is-visible")
    }else if (country.values === "yo" && languages.values === "yo"){
      setCount("a4 is-visible")
    }else if (country.values === "fr" && languages.values === "fr"){
      setCount("a5 is-visible")
    }
  }

      const handleChange = (e) => {
        setLang(e.target.value);
        let loc = "http://localhost:3000/Merchantlogin";
        window.location.replace(
            loc + "?lng=" + e.target.value
        );
    };
    

  return (
    <div>
      <nav className='nav2'>
        <div  className={"LogoBlack"}>
        <Link to={"/"}>
          <img src={LOGO3} alt='' />
        </Link>
        </div>
        <div className={"lang"}>
        <div valuelang onChange={handleCountry}>
          {country.map((item)=>{
            return(
              <div 
               key={item.value}
                value = {item.value}
                >
                {item.img}
                </div>
            )
          })}
          {count}
        </div>
        <select value={lang} onChange={handleChange} onClick={()=>{
          handleCountry()
        }} className={"opt"}>
                {languages.map((item) => {
                    return (
                        <option
                            key={item.value}
                            value={item.value}
                        >
                        
                        {item.text}
                        </option>
                    );
                })}
            </select>
        </div>
      </nav>
    </div>
  )
}


