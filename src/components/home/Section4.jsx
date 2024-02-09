import user1 from "../media/Frame 1261155455.png"
import "./home.css"
import { useState, useEffect } from "react"
import {Swiper, SwiperSlide, } from "swiper/react"
import { ArrowBarLeft, ArrowBarRight } from "react-bootstrap-icons"

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCube, Pagination, Navigation, Autoplay, } from "swiper/modules";
import axios from "axios"

export const Section4 = ()=>{

  const [user, setUser] = useState('')

  useEffect(()=>{
    const fetchImage = async ()=>{
      
    }
    
    fetchImage()
  }, [])

  const pagination = ('.swiper-pagination', {
    dynamicBullets: true,
    clickable:true,

  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  }
});


  return(
    <div>
      <section className={"sec4"}>
      <div className={"textcontent"}>
      <h1>What people have to say about us</h1>
      <p>Don’t just take our words for it- here’s what members love about Mona</p>
      </div>
        <div className={"container4"}>
        <Swiper
        modules={[Autoplay,EffectCube, Pagination, Navigation,]}
         effect={"cards"}
        grabCursor={ true }
        centeredSlides={ true }
        autoplay={{delay: 5000,
          disableOnInteraction: false,
        }}
        loop= { true }
        slidesPerView={ 'auto' }
        cardsEffect={{ 
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 7.0,
  
          }}

          navigation={{
            nextEl: '.nextslide',
            prevEl: '.prevslide',
            clickable: true
          }}

          pagination={pagination}
          
        >
      
          <SwiperSlide>
            <div className={"card1"}>
              <div className={"user"}>
                <img src={user1} alt="" />
              </div>
              <div className={"cardcontent"}>
              <div className={"testimony"}>
                <p>
                “Using Food Grab has helped me limit the stress of going to the restaurant. The seamless transactions, quick payments, and Delivery  features make it my go-to app for hassle-free food ordering. Food Grab truly delivers in Minutes!”
                </p>
              </div>
                <div className={"userdetials"}>
                  <h3>{"Sunday Temi"}</h3>
                  <p>{"Mass Communication Student, RSU"}</p>
                </div>
              <div className={"swiperControl"}>
                <div className={"prevslide"} >
                  <ArrowBarLeft/>
                </div> 
                <div className={"nextslide"}  >
                  <ArrowBarRight />
                </div> 
                <div className={"swiper-pagination"}></div>
              </div>
              
          </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"card1"}>
              <div className={"user"}>
                <img src={user1} alt="" />
              </div>
              <div className={"cardcontent"}>
              <div className={"testimony"}>
                <p>
                “Using Food Grab has helped me limit the stress of going to the restaurant. The seamless transactions, quick payments, and Delivery  features make it my go-to app for hassle-free food ordering. Food Grab truly delivers in Minutes!”
                </p>
              </div>
                <div className={"userdetials"}>
                  <h3>{"Sunday Temi"}</h3>
                  <p>{"Mass Communication Student, RSU"}</p>
                </div>
              <div className={"swiperControl"}>
                <div className={"prevslide"} >
                  <ArrowBarLeft/>
                </div> 
                <div className={"nextslide"}  >
                  <ArrowBarRight />
                </div> 
                <div className={"swiper-pagination"}></div>
              </div>
              
          </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"card1"}>
              <div className={"user"}>
                <img src={user1} alt="" />
              </div>
              <div className={"cardcontent"}>
              <div className={"testimony"}>
                <p>
                “Using Food Grab has helped me limit the stress of going to the restaurant. The seamless transactions, quick payments, and Delivery  features make it my go-to app for hassle-free food ordering. Food Grab truly delivers in Minutes!”
                </p>
              </div>
                <div className={"userdetials"}>
                  <h3>{"Sunday Temi"}</h3>
                  <p>{"Mass Communication Student, RSU"}</p>
                </div>
              <div className={"swiperControl"}>
                <div className={"prevslide"} >
                  <ArrowBarLeft/>
                </div> 
                <div className={"nextslide"}  >
                  <ArrowBarRight />
                </div> 
                <div className={"swiper-pagination"}></div>
              </div>
              
          </div>
          </div>
          </SwiperSlide>

        </Swiper>
        </div>
      </section>
    </div>
  )
}