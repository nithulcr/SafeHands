"use client";
import React, { useRef, useState } from "react";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import AnimatedButton from "./AnimatedButton";
import Image from "next/image";





const ProcessMainDataEn = [
  {
    img: ("/process1.png"),
    title: <>Step-by-Step Guide to UAE Document Attestatio</>,
    date: "18-08-2025",
    link: "/",

  },
  {
    img: ("/process1.png"),
    title: <>How to Choose Between Mainland, Free Zone, and Offshore Business Setup</>,
    date: "18-08-2025",
    link: "/",

  },
  {
    img: ("/process1.png"),
    title: <>Golden Visa Eligibility: Who Qualifies and How to Apply</>,
    date: "18-08-2025",
    link: "/",

  },
  {
    img: ("/process1.png"),
    title: <>Top 5 Mistakes to Avoid During Certificate Attestation in the UAE</>,
    date: "18-08-2025",
    link: "/",

  }, {
    img: ("/process1.png"),
    title: <>Why PRO Services Save Time for Expats and Businesses</>,
    date: "18-08-2025",
    link: "/",

  },

];



const ProcessMain = () => {
  const data = ProcessMainDataEn;
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const fadeRef = useRef<HTMLHeadingElement>(null);
  useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);

  return (
    <section className="py-14 lg:py-24  rounded-3xl">
      <div className="max-w-[1250px] mx-auto px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }} className="heading flex flex-col gap-4 md:flex-row justify-between items-center  mx-auto mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-2 text-site mb-3 uppercase text-sm justify-center md:justify-start">
              <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0742 0.86853L16.0966 5.58161L19.6848 0.86853H17.0742ZM24.7565 1.85392L18.6755 8.84619L24.7565 6.31989V1.85392ZM9.19522 4.23193C9.16211 4.23246 9.12956 4.23372 9.0968 4.23525C8.61387 4.2575 8.16395 4.37421 7.79238 4.63566C6.93093 5.24169 7.21881 6.59506 6.63559 7.96289C4.64293 12.636 2.62996 16.0252 0.851196 18.5263V23.9777C3.97841 22.8521 8.63611 21.6856 15.4428 21.4513C16.8711 21.4023 17.9681 22.1148 18.8246 21.5124C20.939 20.0249 20.1735 15.0541 17.1346 10.3953C16.9446 10.1042 16.7677 9.80785 16.5696 9.53342C14.193 6.24142 11.282 4.20287 9.19511 4.23203L9.19522 4.23193ZM8.92227 5.52392C8.57919 6.25656 8.90135 7.83685 9.73162 9.78222C9.46959 8.79999 9.49356 8.08723 9.86807 7.85083C10.6869 7.33392 12.8669 9.28388 14.7367 12.2064C16.6065 15.1287 17.4582 17.917 16.6395 18.4339C16.3026 18.6466 15.7351 18.4412 15.0541 17.923C16.4616 19.4045 17.732 20.2702 18.512 20.2252C18.4214 20.3924 18.3254 20.5545 18.1819 20.6554C16.8159 21.6165 13.5225 19.0602 10.8361 14.942C8.14973 10.8237 7.0849 6.69747 8.45092 5.73649C8.59092 5.63809 8.74463 5.55055 8.92227 5.52392ZM24.7565 11.6181L20.456 13.0649L24.7565 13.7423V11.6181Z" fill="#09424D" />
              </svg>
              working Process
            </div>
            <h2 ref={fadeRef} className="text-center md:text-left fade-up-stagger text-2xl lg:text-[36px]  font-medium mb-1 leading-tight text-site">
              Strategies & Insights.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="previous-btn cursor-pointer" onClick={() => swiper?.slidePrev()}>
              <svg width="60" height="60" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.3876 25.731L28.8876 36.231L39.3876 46.731" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M36.3876 66.231C19.8186 66.231 6.38757 52.8 6.38757 36.231C6.38757 19.662 19.8186 6.23096 36.3876 6.23096C52.9566 6.23096 66.3876 19.662 66.3876 36.231C66.3876 52.8 52.9566 66.231 36.3876 66.231Z" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </span>
            <span className="next-btn cursor-pointer" onClick={() => swiper?.slideNext()}>
              <svg width="60" height="60" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.3876 25.731L43.8876 36.231L33.3876 46.731" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M36.3876 66.231C52.9566 66.231 66.3876 52.8 66.3876 36.231C66.3876 19.662 52.9566 6.23096 36.3876 6.23096C19.8186 6.23096 6.38757 19.662 6.38757 36.231C6.38757 52.8 19.8186 66.231 36.3876 66.231Z" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>


            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }} className="process-slide -mr-8  -ml-8  md:mx-0">
          <Swiper
            modules={[Pagination, Navigation]}
            loop={true}


            // autoplay={{
            //   delay: 4000,
            //   disableOnInteraction: false,
            // }}

            speed={2000}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

            }}
            className="mySwiper cursor-grab"
            onSwiper={setSwiper}
          >
            {data.map((choose, index) => (
              <SwiperSlide key={`${choose.title}-${index}`}>
                <div
                  className="group bg-white rounded-3xl grid lg:grid-cols-2 gap-2 p-3 md:p-4 relative h-full min-h-[240px] lg:min-h-[330px]  relative overflow-hidden"
                >

                  <div className="relative min-h-[150px]">

                    <Image src={choose.img} alt="ProcessMain" layout="fill" className="object-cover issue-image w-full h-full rounded-xl" />

                  </div>

                  <div className="relative z-1 flex flex-col justify-between p-2 md:p-6">

                    <div className="">
                      <p className="text-xs bg-[#ECF0F0] rounded-lg px-4 py-1 text-[#626262] sm:text-sm inline-block font-normal max-w-[250px]">{choose.date}</p>

                      <h3 className="text-lg md:text-xl leading-tight font-semibold text-site  mt-2 ">{choose.title}</h3>


                    </div>
                    <AnimatedButton href="{choose.link}" label="Learn More" className="w-fit transparent-btn2 transparent-btn3 mt-3" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessMain;