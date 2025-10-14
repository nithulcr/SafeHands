// components/ThreeStepProcess.tsx

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import AnimatedButton from "./AnimatedButton";


const steps = [
    {
        title: "Submit",
        number: '01',
        description: "Hand over your documents, or let us collect them right from your doorstep.",
    },
    {
        title: "Process",
        number: '02',
        description: "We take care of the official steps — ministries, embassies, and notaries — without you having to run around.",
    },
    {
        title: "Deliver",
        number: '03',
        description: "Your documents are returned to you, fully attested and ready for use.",
    },

];

export default function ThreeStepProcess() {
    const fadeRef = useRef<HTMLHeadingElement>(null);
    useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);
    return (
        <section className="bg-[#D5E5E3] py-14 lg:py-24 rounded-3xl relative bottom-shape overflow-hidden">
            <div className="max-w-[1250px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }} className="heading flex flex-col gap-4 md:flex-row justify-between items-center  mx-auto mb-10 md:mb-14">
                    <div>
                        <div className="flex items-center gap-2 text-site mb-3 uppercase text-sm justify-center md:justify-start">
                            <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0742 0.86853L16.0966 5.58161L19.6848 0.86853H17.0742ZM24.7565 1.85392L18.6755 8.84619L24.7565 6.31989V1.85392ZM9.19522 4.23193C9.16211 4.23246 9.12956 4.23372 9.0968 4.23525C8.61387 4.2575 8.16395 4.37421 7.79238 4.63566C6.93093 5.24169 7.21881 6.59506 6.63559 7.96289C4.64293 12.636 2.62996 16.0252 0.851196 18.5263V23.9777C3.97841 22.8521 8.63611 21.6856 15.4428 21.4513C16.8711 21.4023 17.9681 22.1148 18.8246 21.5124C20.939 20.0249 20.1735 15.0541 17.1346 10.3953C16.9446 10.1042 16.7677 9.80785 16.5696 9.53342C14.193 6.24142 11.282 4.20287 9.19511 4.23203L9.19522 4.23193ZM8.92227 5.52392C8.57919 6.25656 8.90135 7.83685 9.73162 9.78222C9.46959 8.79999 9.49356 8.08723 9.86807 7.85083C10.6869 7.33392 12.8669 9.28388 14.7367 12.2064C16.6065 15.1287 17.4582 17.917 16.6395 18.4339C16.3026 18.6466 15.7351 18.4412 15.0541 17.923C16.4616 19.4045 17.732 20.2702 18.512 20.2252C18.4214 20.3924 18.3254 20.5545 18.1819 20.6554C16.8159 21.6165 13.5225 19.0602 10.8361 14.942C8.14973 10.8237 7.0849 6.69747 8.45092 5.73649C8.59092 5.63809 8.74463 5.55055 8.92227 5.52392ZM24.7565 11.6181L20.456 13.0649L24.7565 13.7423V11.6181Z" fill="#09424D" />
                            </svg>
                            working process
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8">
                            <h2 ref={fadeRef} className="text-center md:text-left fade-up-stagger text-2xl lg:text-[36px] max-w-[400px] font-medium mb-1 leading-tight text-site">
                                Seamless Process, Great Results.
                            </h2>
                            <p className="max-w-[340px] text-sm font-normal text-center md:text-left">No missed workdays, no confusing procedures. Just a straightforward process that saves your time and gives you peace of mind.</p>
                        </div>

                    </div>
                    <AnimatedButton type="submit"
                        label="Let's Talk" className="w-fit" />
                </motion.div>

                <div className="flex flex-col md:flex-row gap-5  justify-center">




                    {steps.map((step, idx) => (
                        <div key={step.title} className="flex-1 flex flex-col process-card p-5 lg:p-7  rounded-3xl bg-white relative transition-all duration-500 relative top-0 hover:top-[-5px]">
                            <svg width="54" height="54" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="process-card-svg">
                                <circle cx="28.7426" cy="29.1167" r="28.1875" fill="#D5E5E3" />
                                <circle cx="28.7425" cy="29.1165" r="22.3797" fill="white" />
                                <path d="M21.3978 29.1167H23.2606M33.3197 29.1167L28.849 24.646M33.3197 29.1167L28.849 33.5874M33.3197 29.1167H25.496" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="gradient-text mb-4 text-7xl md:text-9xl font-semibold bg-[linear-gradient(180deg,#09424D_16%,#FFFFFF_88%)] bg-clip-text text-transparent">
                                {step.number}
                            </div>


                            <div className="bg-[var(--blue1)] w-full">

                                <h3 className="text-xl md:text-[22px] font-bold mb-2 text-site">{step.title}</h3>
                                <p className="text-md  font-light text-[#8C8C8C] max-w-[300px] pb-2">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
