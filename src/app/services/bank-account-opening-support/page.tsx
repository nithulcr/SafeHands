import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";
export const CheckmarkIcon = (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1066_2522)">
      <path d="M8.14709 13.1021L4.96484 9.91907L6.02534 8.85857L8.14709 10.9796L12.3891 6.73682L13.4503 7.79807L8.14709 13.1021Z" fill="#2B296B" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1.21484 9.86658C1.21484 5.31033 4.90859 1.61658 9.46484 1.61658C14.0211 1.61658 17.7148 5.31033 17.7148 9.86658C17.7148 14.4228 14.0211 18.1166 9.46484 18.1166C4.90859 18.1166 1.21484 14.4228 1.21484 9.86658ZM9.46484 16.6166C8.57842 16.6166 7.70068 16.442 6.88173 16.1028C6.06278 15.7635 5.31867 15.2663 4.69187 14.6395C4.06508 14.0128 3.56788 13.2686 3.22866 12.4497C2.88944 11.6307 2.71484 10.753 2.71484 9.86658C2.71484 8.98015 2.88944 8.10241 3.22866 7.28346C3.56788 6.46452 4.06508 5.7204 4.69187 5.09361C5.31867 4.46681 6.06278 3.96961 6.88173 3.63039C7.70068 3.29117 8.57842 3.11658 9.46484 3.11658C11.2551 3.11658 12.9719 3.82774 14.2378 5.09361C15.5037 6.35948 16.2148 8.07637 16.2148 9.86658C16.2148 11.6568 15.5037 13.3737 14.2378 14.6395C12.9719 15.9054 11.2551 16.6166 9.46484 16.6166Z" fill="#2B296B" />
    </g>
    <defs>
      <clipPath id="clip0_1066_2522">
        <rect width="18" height="18" fill="white" transform="translate(0.464844 0.866577)" />
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




export default function BankAccountOpeningSupport() {
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
              <h1 className='text-3xl lg:text-[36px] xl:text-[48px] font-bold mb-1 leading-tight max-w-[500px] mb-2'>Bank Account
                Opening Support</h1>
              <p className='max-w-[500px]'>UAE bank account opening support with curated bank selection, KYC documentation prep, and end‑to‑end liaison for fast, compliant approvals.</p>
            </div>
            <Image
              src="/bank-account.png"
              alt="Business for Success"
              width={550}
              height={550}
              className="object-cover f-full  rounded-[16px] w-full"
            />
            <div className='flex flex-col gap-8 md:gap-12'>
              <div>
                <h5 className='font-semibold mb-5 text-xl md:text-2xl'>Dubai Bank Account Opening for Foreign Entrepreneurs</h5>
                <div className='text-[#A7A9AC] flex flex-col gap-4'>
                  <p >Opening a UAE bank account is one of the first steps after securing a Dubai business license, whether a personal account for residents or a corporate account for company operations. Regulated by the UAE Central Bank, onboarding involves strict KYC and compliance checks, detailed documentation, and verification of business activity—making expert guidance valuable for faster approvals and error-free submissions. With banking specialists handling bank selection, dossier preparation, compliance interviews, and relationship setup, foreign entrepreneurs can open Dubai bank accounts smoothly and stay fully compliant while focusing on launching and growing the business.</p>
                </div>

              </div>
              <div>
                <h5 className='font-semibold mb-5 text-xl md:text-2xl'>Inspo Banking Consultants Service</h5>
                <div className=' flex flex-col gap-5'>
                  <p className='text-[#A7A9AC]'>Get tailored banking solutions designed around specific personal and business needs, including commercial accounts, Sharia-compliant Islamic banking, and offshore business accounts. Services support individuals, entrepreneurs, and corporate entities with curated account options, streamlined onboarding, and compliant documentation for smooth, secure banking in the UAE.</p>
                  <div className='flex gap-2 flex-wrap text-sm'>
                    <div className='flex gap-1 items-center bg-[#F6F6F6] py-2 px-3 rounded-md'>{CheckmarkIcon} Convenient & Flexible</div>
                    <div className='flex gap-1 items-center bg-[#F6F6F6] py-2 px-3 rounded-md'>{CheckmarkIcon} Comprehensive Support</div>



                  </div>
                </div>

              </div>
             
            </div>
          </div>
          <div className='lg:col-span-1'>
            <div className='max-w-[500px] mx-auto'>
              <ServiceTabs current="/services/bank-account-opening-support" />
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
