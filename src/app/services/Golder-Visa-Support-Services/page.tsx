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
    title: 'Service safe hands | Golder Visa Support Services',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function FamilyVisa() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Golder Visa Support Services"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-20   service-section relative">

        <div className="max-w-[1250px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Golder Visa Support Services</h1>
            </div>
            <Image
              src="/trade.png"
              alt="Business for Success"
              width={550}
              height={550}
              className="object-cover f-full  rounded-[16px] w-full"
            />
            <div className='flex flex-col gap-8 md:gap-12'>
              <div>
                <div className='text-[#8C8C8C] flex flex-col gap-4'>
                  <p className='font-light'>
                   The UAE Golden Visa represents one of the most prestigious residency programs available today. Offering long-term residency to investors, professionals, exceptional talents, and high-achieving individuals, the Golden Visa opens doors to a stable future in one of the world’s most progressive nations. However, the application process involves detailed eligibility checks, specific documentation, strict attestation requirements, and continuous coordination with government entities.
                  </p>
                  <p className='font-light'>
                    SafeHands provides a seamless Golden Visa documentation service that supports applicants at every stage. Our process begins with a personalised eligibility assessment where we analyse each client’s professional profile, qualifications, category criteria, salary structure, investment size, and academic achievements to determine the most suitable Golden Visa pathway. Once the eligibility is confirmed, we prepare a clear documentation roadmap.
                  </p>
                  <p className='font-light'>
                    Golden Visa documentation often requires attested educational certificates, salary statements, employment contracts, commercial licenses, bank statements, or specialised approval letters. SafeHands manages the attestation of every document—whether local or international—ensuring that all papers meet UAE residency standards. We also assist with translation, medical tests, Emirates ID procedures, visa stamping, and family inclusion, making the process smooth for the entire household.
                  </p>
                  <p className='font-light'>
                    Our Golden Visa team provides detailed guidance, real-time updates, and continuous support until the residency permit is successfully issued. With SafeHands, clients experience a Golden Visa journey that is structured, guided, and free from uncertainty, ensuring that they settle into the UAE with confidence and long-term security.
                  </p>
                 
                </div>

              </div>
              
            </div>
          </div>
          <div className='lg:col-span-1'>
            <div className='max-w-[500px] mx-auto'>
              <ServiceTabs />
            </div>
          </div>


        </div>

      </section>


      <Footer />
    </>
  );
}
