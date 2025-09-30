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
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";







export default function Home() {
  return (
    <>
      <Header />
      <section className="mt-[70px] lg:mt-[100px] w-full bg-[var(--blue)] lg:py-20 py-14 mx-auto bg-[url('/contact-banner.png')] bg-cover bg-center min-h-[300px] lg:min-h-[400px] flex items-center">
        <div className="  w-full max-w-[700px] px-6 mx-auto   justify-center text-white">
          <h1 className='text-4xl lg:text-[36px] xl:text-[48px] font-bold mb-1 leading-tight text-center'>Don’t Let Anything Stop
            Your Business Growth</h1>
        </div>

      </section>

      <ContactUs />


      <Footer />
    </>
  );
}