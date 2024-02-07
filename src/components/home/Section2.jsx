import "./home.css"

import phone1 from "../media/phone half1.png"
import phone2 from "../media/phone half3.png"
import phone3 from "../media/phone half4.png"
import bike from "../media/Vector.png"
import { Phone, Shop, ArrowBarLeft, ArrowBarRight} from "react-bootstrap-icons"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, } from "swiper/modules";



export const Section2 =()=>{

  return(
    <div>
    <section className={"sec2"}>
      <div className={"txtcont"}>
        <h1>Elevate Your Food Ordering and Delivery</h1>
        <p>Explore our versatile features and elevate your dining experience with </p>
        <p>Food Grab's innovative capabilities.</p>
      </div>
      <div>
        <div className={"contianer"}>
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation,]}

        effect={"coverflow"}
        grabCursor={ true }
        centeredSlides={ true }
        loop= { true }
        slidesPerView={ 'auto' }
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 7.0,
  
          }}
          navigation={{
            nextEl:'nextslide',
            prevEl:'prevslide',
            clickable: true
          }}

          pagination={{el:'swiper-pagination',
          clickable:true
          }}
          className={"swiper-container"}
        >
        
        <SwiperSlide>
          <div className={"card B"}>
          <div className={"content"}>
          <div className={"circle I"}> <Shop /> </div>
          <h1 className="MM">Become a Merchant</h1>
          <p>As a restaurant or private chef you can grow your business <br/>and increase profit by creating an online ordering page and <br/>reach a wide range of customers.</p>
          </div>
          <div className={"image2 phn2"}>
            <img src={phone2} alt="" />
          </div>

          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={"card C"}>
          <div className={"content "}>
          <div className={"circle J"}> <img src={bike} alt=""/> </div>
          <h1 className={"BB"}>Become a Grabber</h1>
          <p>Drive, deliver and earn. Choose your own working hours, <br/>track your metrics, earn bonuses and withdraw easily to <br/>your account. Do more with our app.</p>
          </div>
          <div className={"image2 phn1"}>
            <img src={phone3} alt="" />
          </div>

          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={"card A"}>
          <div className={"content"}>
          <div className={"circle"}> <Phone /> </div>
          <h1 className="TT">Try the App</h1>
          <p>Have meals delivered to you within minutes from a wide  <br/> variety of restaurants and private chefs ranging from <br/> African to Continental cuisines to satisfy your cravings.</p>
          </div>
          <div className={"image2"}>
            <img src={phone1} alt="" />
          </div>

          </div>
          </SwiperSlide>
       
        </Swiper>
        <div className={"swiperControl"}>
            <div className={"prevslide"}>
              <ArrowBarLeft/>
            </div> 
            <div className={"nextslide"}>
              <ArrowBarRight />
            </div> 
            </div>
            <div className={"swiper-pagination"}></div>
        
        </div>
      </div>
    </section>

    </div>
  )
}