"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import AnimatedButton from "./AnimatedButton";


const partnersEn = [
  {
    id: "01",
    icon: "/partners/1.png",

  },
  {
    id: "02",
    icon: "/partners/2.png",

  },
  {
    id: "03",
    icon: "/partners/3.png",

  },
  {
    id: "04",
    icon: "/partners/4.png",

  },
  {
    id: "05",
    icon: "/partners/5.png",

  },
  {
    id: "06",
    icon: "/partners/6.png",

  },
  {
    id: "07",
    icon: "/partners/7.png",

  },
  {
    id: "08",
    icon: "/partners/5.png",

  },

];

const Partners = () => {
  const partners = partnersEn;

  return (
    <section className="py-10 lg:py-16 text-[var(--foreground)]">
      <div className="max-w-[1320px] mx-auto px-6 flex  flex-col items-start  gap-5 justify-between mb-10">
        <div className="w-full">
          <h2 className="text-2xl lg:text-[40px] font-medium mb-3 max-w-[560px]">Empowering Success with
            Top One&apos;s Expertise.</h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="max-w-[560px] ">

              Our core services redefine business success. From expert business setup solutions and strategic growth planning to personalized consultancy, we offer a holistic approach that caters to your unique needs.
            </p>
            <AnimatedButton href="" label="Talk with Us" className="w-fit text-white reverse-flex" imgOrSvg={<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.8034 19.532C21.6778 20.095 21.3664 20.5994 20.9194 20.964C20.431 21.4593 19.8491 21.8527 19.2074 22.1212C18.5657 22.3897 17.877 22.528 17.1814 22.528H16.8564C15.3964 22.4487 13.9669 22.0792 12.6514 21.441H12.6414C12.3364 21.299 12.0214 21.157 11.7164 20.984C10.1808 20.123 8.77236 19.0528 7.53142 17.804C5.92098 16.2914 4.59943 14.4981 3.63142 12.512C3.11697 11.4236 2.77359 10.2622 2.61342 9.06901C2.37788 7.82002 2.51957 6.52918 3.02042 5.36101C3.33662 4.83399 3.7228 4.35227 4.16842 3.92901C4.36893 3.70226 4.61408 3.51933 4.88853 3.39165C5.16298 3.26398 5.46082 3.19431 5.76342 3.18701C6.09252 3.22338 6.41112 3.32476 6.70072 3.48527C6.99032 3.64578 7.24515 3.86221 7.45042 4.12201C7.90742 4.61901 8.46542 5.13701 8.92342 5.61501L9.55342 6.23501C9.92342 6.56301 10.1524 7.02101 10.1934 7.51501C10.1934 7.96801 10.0264 8.40501 9.72542 8.74401C9.53049 8.9811 9.32355 9.20807 9.10542 9.42401L8.90242 9.63701C8.78442 9.74701 8.69442 9.88301 8.63842 10.034C8.58842 10.1827 8.56842 10.335 8.57842 10.491C8.73942 10.922 8.99242 11.314 9.31842 11.639C9.82742 12.329 10.3354 12.929 10.8534 13.579C11.7904 14.6667 12.9023 15.5904 14.1434 16.312C14.2704 16.405 14.4164 16.467 14.5714 16.494C14.7054 16.504 14.8414 16.484 14.9674 16.434C15.3224 16.225 15.6374 15.957 15.9014 15.641C16.2564 15.2062 16.7661 14.926 17.3234 14.859C17.8597 14.8664 18.3713 15.0857 18.7464 15.469C18.9494 15.641 19.1724 15.875 19.3864 16.099L19.6904 16.413L20.0054 16.718L20.5444 17.266C20.8658 17.5513 21.1671 17.8563 21.4484 18.181C21.7304 18.571 21.8574 19.054 21.8034 19.532ZM18.1574 12.573C17.956 12.5709 17.7634 12.49 17.6209 12.3475C17.4785 12.2051 17.3975 12.0125 17.3954 11.811C17.3965 11.2358 17.284 10.666 17.0643 10.1344C16.8447 9.60274 16.5222 9.11969 16.1155 8.71295C15.7087 8.3062 15.2257 7.98376 14.6941 7.76412C14.1624 7.54448 13.5926 7.43196 13.0174 7.43301C12.8153 7.43301 12.6215 7.35273 12.4786 7.20983C12.3357 7.06692 12.2554 6.87311 12.2554 6.67101C12.2554 6.46892 12.3357 6.2751 12.4786 6.1322C12.6215 5.98929 12.8153 5.90901 13.0174 5.90901C13.7928 5.90783 14.5608 6.05968 15.2774 6.35586C15.994 6.65204 16.6451 7.08674 17.1934 7.63502C17.7417 8.18331 18.1764 8.83441 18.4726 9.55101C18.7688 10.2676 18.9206 11.0356 18.9194 11.811C18.9197 11.9112 18.9002 12.0104 18.862 12.1029C18.8238 12.1955 18.7676 12.2796 18.6968 12.3504C18.626 12.4212 18.5419 12.4773 18.4493 12.5155C18.3568 12.5537 18.2576 12.5733 18.1574 12.573Z" fill="white" />
              <path d="M21.6824 12.2168C21.4811 12.2148 21.2887 12.1339 21.1462 11.9917C21.0038 11.8495 20.9227 11.6571 20.9204 11.4558C20.922 10.4757 20.7303 9.50494 20.3563 8.59901C19.9823 7.69308 19.4333 6.86978 18.7408 6.17624C18.0483 5.48269 17.2258 4.93251 16.3204 4.55717C15.415 4.18183 14.4445 3.9887 13.4644 3.98883C13.3621 3.99254 13.2601 3.97559 13.1644 3.93899C13.0688 3.90239 12.9815 3.8469 12.9078 3.77582C12.8341 3.70474 12.7755 3.61954 12.7355 3.5253C12.6954 3.43106 12.6748 3.32972 12.6748 3.22733C12.6748 3.12494 12.6954 3.0236 12.7355 2.92936C12.7755 2.83513 12.8341 2.74992 12.9078 2.67885C12.9815 2.60777 13.0688 2.55227 13.1644 2.51567C13.2601 2.47907 13.3621 2.46212 13.4644 2.46583C14.6445 2.46583 15.8131 2.69844 16.9032 3.15035C17.9934 3.60226 18.9838 4.26462 19.8178 5.09955C20.6518 5.93448 21.313 6.92561 21.7637 8.01626C22.2144 9.10692 22.4457 10.2757 22.4444 11.4558C22.4447 11.556 22.4251 11.6552 22.3869 11.7477C22.3487 11.8403 22.2926 11.9244 22.2218 11.9952C22.151 12.066 22.0669 12.1222 21.9743 12.1604C21.8818 12.1986 21.7825 12.2171 21.6824 12.2168Z" fill="white" />
            </svg>
            } />
          </div>
        </div>
      </div>
      <div className="max-w-[1320px] mx-auto lg:px-6 partners-container lg:hidden px-6   ">
        <div className="bg-[#F6F6F6] p-4 lg:m-0 rounded-xl">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            className=""

          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="bg-white rounded-xl p-3 text-center  p-5 transition-all duration-300 relative top-0 hover:top-[-6px]">
                  <Image
                    src={partner.icon}
                    alt="logo"
                    className="w-15 h-15 object-contain mx-auto mb-2"
                    width={80}
                    height={80}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
      <div className="max-w-[1320px] mx-auto hidden lg:block px-6">
        <div className="  p-4 lg:p-8 partners-container rounded-2xl  bg-[#F6F6F6]">
          <div className="grid grid-cols-4 gap-4">

            {partners.map((partner) => (
              <div key={partner.id}>
                <div className="rounded-lg bg-white p-6 flex  items-center justify-center  transition-all duration-300 relative top-0 hover:top-[-6px]">
                  <Image
                    src={partner.icon}
                    alt="logo"
                    className="w-full h-12 object-contain mx-auto mb-2"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;
