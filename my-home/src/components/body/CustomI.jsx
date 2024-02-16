import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import interior1 from "../images/interior1.jpg";
import interior2 from "../images/interior2.jpg";
import interior3 from "../images/interior3.jpg";
import interior4 from "../images/interior4.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade } from "swiper/modules";
// material ui
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import SpaSharpIcon from "@mui/icons-material/SpaSharp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShareLocationOutlinedIcon from "@mui/icons-material/ShareLocationOutlined";

// import "./styles.css";
import "./custom.css";

const CustomI = () => {
  return (
    <div className="custom_container">
      <div className="hero_container">
        <div className="hero_big_text">
          <h1 className="hero_h1">CUSTOM INTERIORS</h1>
          <p className="hero_p">AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO</p>
          <div className="slider_container">
            <Swiper
              spaceBetween={163}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
              // pagination={{
              //   clickable: true,

              // }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="slider_img"
                  src={interior1}
                  alt="interior images"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="slider_img"
                  src={interior2}
                  alt="interior images"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="slider_img"
                  src={interior3}
                  alt="interior images"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="slider_img"
                  src={interior4}
                  alt="interior images"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="brown_Container">
        <div className="brown_cards">
          <div className="brwon_card_ietms"  >
            <div className="bown_circle" style={{width:"100px", height:"100px", borderRadius:"100%"}}>
              <p>
                
                <ApartmentOutlinedIcon
                  sx={{ fontSize: 45, color: "#c28562" }}
                />
              </p>
            </div>
            <h1 className="brown_card_text_h1">SMART LIVING</h1>
            <p className="brown_card_text_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatu
            </p>
          </div>
          <div className="brwon_card_ietms">
            <div className="bown_circle">
              <p>
                
                <SpaSharpIcon sx={{ fontSize: 45, color: "#c28562" }} />
              </p>
            </div>
            <h1 className="brown_card_text_h1">ECO CONSTRUCTION</h1>
            <p className="brown_card_text_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatu
            </p>
          </div>
          <div className="brwon_card_ietms">
            <div className="bown_circle">
              <p>
                
                <AccountCircleOutlinedIcon
                  sx={{ fontSize: 45, color: "#c28562" }}
                />
              </p>
            </div>
            <h1 className="brown_card_text_h1">HUMAN IN MIND</h1>
            <p className="brown_card_text_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatu
            </p>
          </div>
          <div className="brwon_card_ietms">
            <div className="bown_circle">
              <p>
                <ShareLocationOutlinedIcon
                  sx={{ fontSize: 45, color: "#c28562" }}
                />
              </p>
            </div>
            <h1 className="brown_card_text_h1">THE BEST LOCATION</h1>
            <p className="brown_card_text_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomI;
