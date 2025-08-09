import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const HeroCarousel = ({ slides, onSlideClick }) => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[500px]"
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-center bg-cover relative cursor-pointer"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {item.title}
                </h2>
                <p className="max-w-2xl text-lg mb-6">{item.summary}</p>

                <div className="flex gap-4 mb-6">
                  <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition">
                    Join as Volunteer
                  </button>

                  <button
                    onClick={() => onSlideClick(item)}
                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
                  >
                    View Details
                  </button>
                </div>

                <div className="flex gap-4 text-2xl">
                  <a href="#" className="hover:text-yellow-300"><FaFacebook /></a>
                  <a href="#" className="hover:text-yellow-300"><FaTwitter /></a>
                  <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
                  <a href="#" className="hover:text-yellow-300"><FaYoutube /></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
