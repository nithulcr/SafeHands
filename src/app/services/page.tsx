
import { Metadata, ResolvingMetadata } from 'next';



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
import ServicesFull from "../components/ServicesFull";
import Partners from "../components/Partners";
import CostCalculator from "../components/CostCalculator";



import ConsultationBanner from "../components/ConsultationBanner";

import Footer from "../components/Footer";





export default function Services() {
    return (
        <>
            <Header />
           
            <ServicesFull />
          
            <ConsultationBanner />
            <Partners />
            <CostCalculator />


            
            <Footer />
        </>
    );
}
