import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {

    const metadata: Metadata = {
    title: 'Inspo',
    description: '',
    keywords: '',
  };

  return metadata;
}

import Header from "../components/Header";
import Partners from "../components/Partners";

import CostCalculator from "../components/CostCalculator";



import ConsultationBanner from "../components/ConsultationBanner";

import Footer from "../components/Footer";





export default function Home() {
  return (
    <>
      <Header />
      <section className="py-14 lg:py-20    mt-[70] lg:mt-[100px] bg-[#F6F6F6]">
        <div className="max-w-[1320px] mx-auto px-6 flex flex-col gap-6 lg:gap-12">
          <div>
            <span className='text-[#5D666F]'>About inspo</span>
            <h1 className='text-4xl lg:text-[36px] xl:text-[48px] font-bold mb-1 leading-tight max-w-[500px]'>Smart and effective business agency.</h1>
          </div>
          <Image
            src="/about-us-banner.png"
            alt="Business for Success"
            width={550}
            height={550}
            className="object-cover f-full  rounded-[16px] w-full"
          />
          <p className='text-[#434343]'>Welcome to Top One Business Administrative Services, your strategic ally in establishing and growing your business in Dubai. Our inception was driven by the ambition to simplify the intricate process of business setup, recognizing the challenges that often deter aspiring entrepreneurs.At Top One, we go beyond conventional consultancy. Our tailored package deals, featuring virtual office space, smart desks, meeting rooms, and more, offer comprehensive solutions. With a focus on efficiency, helpfulness, and cost-effectiveness, we not only guide you through the maze of business setup but also ensure the lowest Dubai trade license costs.</p>

        </div>

      </section>
      <section className="pt-14 pb-18 lg:pt-20 lg:pb-30  ">
        <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="relative flex justify-center  lg:flex h-full">

            <Image
              src="/about-us2.png"
              alt="Business for Success"
              width={1000}
              height={1000}
              className="object-cover f-full  rounded-[16px] mx-auto max-w-[500px]"
            />


          </div>
          <div className="flex flex-col gap-4 lg:gap-5 ">
            <div className='text-[var(--blue)] flex gap-3 items-center'>
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7615 3.02725L21.8719 3.021L22.0073 3.02933L22.101 3.046L22.2292 3.08245L22.3406 3.13037L22.4448 3.18975L22.5385 3.25954L22.624 3.33766L22.6781 3.39912L22.7635 3.51995L22.8177 3.61995C22.8663 3.72412 22.8976 3.83384 22.9115 3.94912L22.9167 4.05954C22.9167 4.13801 22.9083 4.2144 22.8917 4.2887L22.8552 4.41683L16.051 23.247C15.9221 23.5278 15.7152 23.7657 15.455 23.9325C15.1949 24.0992 14.8923 24.1878 14.5833 24.1877C14.3051 24.1882 14.0314 24.1169 13.7889 23.9806C13.5463 23.8442 13.3431 23.6475 13.199 23.4095L13.1312 23.2772L9.63958 16.296L2.69167 12.821C2.43458 12.7034 2.21288 12.5204 2.04872 12.2903C1.88457 12.0601 1.78371 11.7909 1.75625 11.5095L1.75 11.3543C1.75 10.771 2.06354 10.2377 2.62604 9.92725L2.77188 9.85433L21.5396 3.07725L21.65 3.046L21.7615 3.02725Z" fill="#2B286B" />
              </svg>

              WHAT ABOUT US
            </div>

            <h2 className="text-2xl lg:text-[40px] font-medium leading-tight max-w-[500px]">Inspiring Vision, Empowering
              Growth: The INSPO
              Corporate Story.</h2>
            <div className="leading-relaxed text-[#A7A9AC] flex flex-col gap-3">
              <p>Welcome to INSPO Corporate Services, your trusted partner in turning ideas into thriving businesses in the UAE. Our mission is simple yet powerful: to remove the complexities of business setup and provide clear, reliable, and cost-effective solutions tailored for every entrepreneur.</p>
              <p>At INSPO, we believe in more than just consultancy — we believe in building futures. From trade license services to PRO solutions, compliance assistance, and customized business support, we craft end-to-end strategies that empower you to focus on what matters most: growing your business.</p>
              <p>Guided by our core values of integrity, efficiency, and innovation, our team of experts ensures that every step of your journey is seamless. Whether you’re a startup, SME, or expanding enterprise, we stand by your side as a dedicated ally, making Dubai’s business landscape accessible and full of opportunity.</p>
              <p>With INSPO Corporate Services, your business vision is not just supported — it’s inspired, nurtured, and driven toward success.</p>


            </div>



          </div>

        </div>
      </section>

      <ConsultationBanner />
      <Partners />
      <CostCalculator />

      <Footer />
    </>
  );
}
