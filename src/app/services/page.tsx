
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
import Services from "../components/Services";
import Partners from "../components/Partners";
import CostCalculator from "../components/CostCalculator";



import ConsultationBanner from "../components/ConsultationBanner";

import Footer from "../components/Footer";





export default function ServicesPage() {
    return (
        <>
            <Header />
           
            <Services />
          
            <ConsultationBanner />
            <Partners />
            <CostCalculator />


            
            <Footer />
        </>
    );
}
