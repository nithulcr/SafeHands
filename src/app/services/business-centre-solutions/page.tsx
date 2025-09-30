import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";
export const CheckmarkIcon = (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1057_51)">
      <path d="M8.59143 12.9419L5.40918 9.75891L6.46968 8.69841L8.59143 10.8194L12.8334 6.57666L13.8947 7.63791L8.59143 12.9419Z" fill="#1FAF38" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1.65918 9.70642C1.65918 5.15017 5.35293 1.45642 9.90918 1.45642C14.4654 1.45642 18.1592 5.15017 18.1592 9.70642C18.1592 14.2627 14.4654 17.9564 9.90918 17.9564C5.35293 17.9564 1.65918 14.2627 1.65918 9.70642ZM9.90918 16.4564C9.02276 16.4564 8.14501 16.2818 7.32607 15.9426C6.50712 15.6034 5.763 15.1062 5.13621 14.4794C4.50941 13.8526 4.01221 13.1085 3.67299 12.2895C3.33377 11.4706 3.15918 10.5928 3.15918 9.70642C3.15918 8.82 3.33377 7.94226 3.67299 7.12331C4.01221 6.30436 4.50941 5.56025 5.13621 4.93345C5.763 4.30665 6.50712 3.80945 7.32607 3.47023C8.14501 3.13101 9.02276 2.95642 9.90918 2.95642C11.6994 2.95642 13.4163 3.66758 14.6821 4.93345C15.948 6.19932 16.6592 7.91621 16.6592 9.70642C16.6592 11.4966 15.948 13.2135 14.6821 14.4794C13.4163 15.7453 11.6994 16.4564 9.90918 16.4564Z" fill="#1FAF38" />
    </g>
    <defs>
      <clipPath id="clip0_1057_51">
        <rect width="18" height="18" fill="white" transform="translate(0.90918 0.706421)" />
      </clipPath>
    </defs>
  </svg>
);

export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Inspo | Corporative Services',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Partners from "../../components/Partners";

import CostCalculator from "../../components/CostCalculator";



import ConsultationBanner from "../../components/ConsultationBanner";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function BusinessCentreSolutions() {
  return (
    <>
      <Header />
      <section className="py-14 lg:py-20    mt-[70] lg:mt-[100px] service-section relative">
        <div className='service-shape'>
          <div className='max-w-[1320px] px-6 relative w-full h-full mx-auto'></div>
        </div>
        <div className="max-w-[1320px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-12 lg:col-span-2'>
            <div>
              <h1 className='text-3xl lg:text-[36px] xl:text-[48px] font-bold mb-1 leading-tight max-w-[500px] mb-2'>Business Centre Solutions</h1>
              <p className='max-w-[400px]'>Premium Virtual Office and Business
                Center Solutions in the UAE</p>
            </div>
            <Image
              src="/business-centre.png"
              alt="Business for Success"
              width={550}
              height={550}
              className="object-cover f-full  rounded-[16px] w-full"
            />
            <div className='flex flex-col gap-8 md:gap-12'>
              <div>
                <h5 className='font-semibold mb-5 text-xl md:text-2xl'>Premium Virtual Office and Business Center Solutions in the UAE</h5>
                <div className='text-[#A7A9AC] flex flex-col gap-4'>
                  <p >INSPO Corporate Services specializes in offering premium Business Center and Virtual Office solutions designed to empower businesses with credibility, flexibility, and growth opportunities. We understand that in today’s competitive market, having the right presence is essential — that’s why we provide more than just an address. Our solutions give you a prestigious business location in the UAE, enhancing your brand image while keeping costs low and operations simple.</p>
                  <p>Our Virtual Office packages are tailored for entrepreneurs, startups, and international companies seeking a professional presence without the overhead of a physical office. From a prime business address to dedicated phone lines, mail and call handling, and access to modern meeting rooms, we ensure your clients always experience professionalism and trust. With the support of our trained reception team, your business communications are managed seamlessly, giving you more time to focus on strategy and growth.</p>
                  <p>For companies looking for flexibility, our Business Center offers fully equipped spaces, private offices, and coworking options that can be scaled as your business expands. Whether you need occasional meeting space, a temporary setup, or a long-term virtual presence, INSPO provides customized solutions that adapt to your goals.</p>

                </div>

              </div>

            </div>
          </div>
          <div className='lg:col-span-1'>
            <div className='max-w-[500px] mx-auto'>
              <ServiceTabs current="/services/business-centre-solutions" />
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
