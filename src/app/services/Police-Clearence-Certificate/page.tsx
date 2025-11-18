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
    title: 'Service safe hands | True Copy Attestation',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function PCC() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Police Clearence Certificate (PCC)"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-20   service-section relative">

        <div className="max-w-[1250px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Police Clearence Certificate (PCC)</h1>
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
                   A Police Clearance Certificate, often recognised as a Good Conduct Certificate, stands as an essential proof of a person’s clean background. Whether someone is preparing to migrate, secure employment abroad, apply for a long-term visa, or complete a licensing procedure, the PCC acts as a declaration of trustworthiness. It assures foreign authorities that the individual does not hold any criminal record or pending legal charges in the issuing country. Understanding its importance, SafeHands Attestation provides an end-to-end service that simplifies what is often seen as one of the most complicated documentation requirements.
                  </p>
                  <p className='font-light'>
                 Obtaining a PCC involves different procedures based on the country of origin, and each country follows a distinct structure for verification. Some require biometric fingerprints, while others require embassy visits, identity checks, online submissions, or physical presence. SafeHands bridges these complexities by handling every layer of communication and submission on behalf of the client. Whether the certificate is from the UAE, India, Philippines, Pakistan, UK, USA, Canada, Europe, Africa, or any other region, our specialists are familiar with the exact workflow required.
                  </p>
                  <p className='font-light'>
                    For UAE-issued PCCs, SafeHands ensures that all necessary documents—such as passport copies, Emirates ID details, visa pages, and biometrics—are properly prepared and processed. For individuals who have already left the UAE, we facilitate fingerprint cards, embassy authentication, and verification through official channels so that the PCC can still be issued without the client’s physical presence in the country. For foreign PCCs, our team coordinates with consulates, police departments, immigration offices, and legal channels to secure the certificate within the required timeframe.
                  </p>
                  <p className='font-light'>
                    Once obtained, the PCC often needs to be attested before it can be used internationally. SafeHands seamlessly continues the process, completing embassy legalisation, MOFA approval, and any translation requirements. Our approach ensures that clients do not have to manage multiple authorities or worry about technical details—every step is handled with precision, confidentiality, and the highest degree of care.
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
