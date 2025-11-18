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
    title: 'Service safe hands | Country Specific Attestation-Services',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function CountrySpecific() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Country Specific Attestation-Services"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-20   service-section relative">

        <div className="max-w-[1250px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Country Specific Attestation-Services</h1>
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
                    Every country follows its own unique procedures for document attestation, and understanding these differences is essential to completing the process correctly. SafeHands Attestation provides country-specific attestation support, carefully tailored to the rules and requirements of each issuing nation. Our global network enables us to manage documents from more than 50 countries, ensuring smooth movement through universities, ministries, embassies, and legal departments.
                  </p>


                </div>
                <div className='flex flex-col gap-6 my-7'>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>India</h5>
                      <p className='text-[#8C8C8C] font-light'>Indian documents follow a structured system that often includes university verification for educational certificates, state-level authentication for personal documents, and Chamber of Commerce approvals for commercial papers. Only after these steps can the documents proceed to the Ministry of External Affairs and the UAE Embassy. SafeHands coordinates every stage, ensuring timely and complete verification.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>Philippines</h5>
                      <p className='text-[#8C8C8C] font-light'>Philippines documents undergo strict authentication through the Department of Foreign Affairs (DFA). Whether it is a birth certificate, diploma, or NBI clearance, each requires proper validation before UAE Embassy stamping. We manage DFA appointments, processing, and embassy legalisation to make the experience smooth and efficient.</p>
                    </div>

                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>Pakistan</h5>
                      <p className='text-[#8C8C8C] font-light'>Pakistani documents typically pass through the Higher Education Commission (HEC), the Ministry of Foreign Affairs of Pakistan, and the UAE Embassy. Educational qualifications require verification of degrees directly from universities. SafeHands handles every requirement, ensuring that clients do not face delays due to incomplete steps.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>United Kingdom</h5>
                      <p className='text-[#8C8C8C] font-light'>The UK follows a notary-driven process that leads to Foreign Commonwealth Office (FCO) legalisation before reaching the UAE Embassy. The documents must meet UK notarial standards, which our team ensures before submission. The attested document is then legalised by the MOFA UAE for final acceptance.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>Philippines</h5>
                      <p className='text-[#8C8C8C] font-light'>Philippines documents undergo strict authentication through the Department of Foreign Affairs (DFA). Whether it is a birth certificate, diploma, or NBI clearance, each requires proper validation before UAE Embassy stamping. We manage DFA appointments, processing, and embassy legalisation to make the experience smooth and efficient.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>United States of America</h5>
                      <p className='text-[#8C8C8C] font-light'>The USA has one of the most detailed attestation routes due to its federal structure. Documents often require county-level certification, state validation, Department of State approval, and UAE Embassy legalisation. This multi-level journey can be overwhelming, but SafeHands manages every detail with clarity and expertise.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>Canada</h5>
                      <p className='text-[#8C8C8C] font-light'>Canadian documents follow a similar structured process involving notarization, authentication through Global Affairs Canada, and UAE Embassy legalisation. SafeHands ensures that educational, personal, and corporate documents meet all the technical requirements set by Canadian authorities.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>Europe</h5>
                      <p className='text-[#8C8C8C] font-light'>Documents from European countries often undergo validation through their Ministry of Justice or Ministry of Foreign Affairs before being legalised by the UAE Embassy. Whether the document originates from Germany, France, Italy, the Netherlands, or Scandinavian countries, SafeHands ensures full compliance with European legalisation standards.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>Africa</h5>
                      <p className='text-[#8C8C8C] font-light'>African countries follow diverse attestation processes depending on their local administrative structure. SafeHands manages documentation from Nigeria, Kenya, Ghana, South Africa, and others, ensuring every verification step is completed accurately, even when local procedures vary widely.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>GCC Countries</h5>
                      <p className='text-[#8C8C8C] font-light'>Documents from Saudi Arabia, Bahrain, Kuwait, Qatar, and Oman follow their own government authentication pathways. SafeHands offers cross-border attestation for GCC nations, ensuring documents can be used either within the UAE or internationally.</p>
                    </div>


                  </div>

                </div>
                <div className='text-[#8C8C8C] flex flex-col gap-4'>
                  
                      <p className='font-light'>
                        By tailoring our process to each country’s requirements, SafeHands provides unparalleled clarity and precision in global attestation.
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
