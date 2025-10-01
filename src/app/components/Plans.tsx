// components/UaeCompanyCards.tsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import AnimatedButton from "./AnimatedButton";


const cards = [
    {
        title: "Educational ",
        features: [
            "Degree Certificate Attestation",
            "Diploma Certificate Attestation",
            "Passing Certificate Attestation",
            "Bachelor Degree Attestation",
            "Master Degree Attestation",
            "Associate Degree Attestation",
            "Engg. Certificate Attestation",
        ],
        link: "/contactUs",
    },
    {
        title: "Educational ",
        features: [
            "Birth Certificate Attestation",
            "Marriage Certificate Attestation",
            "Transfer Certificate Attestation",
            "Divorce Certificate Attestation",
            "Singleness Certificate Attestation",
            "Death Certificate Attestation",
            "Medical Certificate Attestation",
        ],
        link: "/contactUs",
    },
    {
        title: "Educational ",
        features: [
            "Memorandum of Association",
            "Article of Association",
            "Certificate of Incumbency",
            "Power of Attorney (POA) Attestation",
            "Commercial Invoices Attestation",
            "Certificate of Incorporation",
            "Certificate of Good Standing",
        ],
        link: "/contactUs",
    },
];

export default function UaeCompanyCards() {
    const fadeRef = useRef<HTMLHeadingElement>(null);
    useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);
    return (
        <section className="py-18 lg:py-24">
            <div className="max-w-[1250px] mx-auto  px-3 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }} className="heading flex flex-col items-center max-w-[550px] mx-auto mb-10">
                    <div className="flex items-center gap-2 text-site mb-3 uppercase text-sm">
                        <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0742 0.86853L16.0966 5.58161L19.6848 0.86853H17.0742ZM24.7565 1.85392L18.6755 8.84619L24.7565 6.31989V1.85392ZM9.19522 4.23193C9.16211 4.23246 9.12956 4.23372 9.0968 4.23525C8.61387 4.2575 8.16395 4.37421 7.79238 4.63566C6.93093 5.24169 7.21881 6.59506 6.63559 7.96289C4.64293 12.636 2.62996 16.0252 0.851196 18.5263V23.9777C3.97841 22.8521 8.63611 21.6856 15.4428 21.4513C16.8711 21.4023 17.9681 22.1148 18.8246 21.5124C20.939 20.0249 20.1735 15.0541 17.1346 10.3953C16.9446 10.1042 16.7677 9.80785 16.5696 9.53342C14.193 6.24142 11.282 4.20287 9.19511 4.23203L9.19522 4.23193ZM8.92227 5.52392C8.57919 6.25656 8.90135 7.83685 9.73162 9.78222C9.46959 8.79999 9.49356 8.08723 9.86807 7.85083C10.6869 7.33392 12.8669 9.28388 14.7367 12.2064C16.6065 15.1287 17.4582 17.917 16.6395 18.4339C16.3026 18.6466 15.7351 18.4412 15.0541 17.923C16.4616 19.4045 17.732 20.2702 18.512 20.2252C18.4214 20.3924 18.3254 20.5545 18.1819 20.6554C16.8159 21.6165 13.5225 19.0602 10.8361 14.942C8.14973 10.8237 7.0849 6.69747 8.45092 5.73649C8.59092 5.63809 8.74463 5.55055 8.92227 5.52392ZM24.7565 11.6181L20.456 13.0649L24.7565 13.7423V11.6181Z" fill="#09424D" />
                        </svg>
                        Experts in all types
                    </div>
                    <h2 ref={fadeRef} className="text-center fade-up-stagger text-2xl lg:text-[36px] font-medium mb-1 leading-tight text-site">
                        Documents Attestation We can Assist You
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }} className="flex overflow-auto md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 -mr-6 -ml-6 md:m-0 pl-6 pr-6 md:p-0">
                    {cards.map((card, idx) => (
                        <div key={idx} className="bg-[#F6F6F6] rounded-xl  overflow-hidden flex flex-col min-w-[280px]">

                            <div className="flex flex-col flex-1 p-5 lg:p-8">
                                <h3 className="font-bold text-xl text-site">{card.title}</h3>
                                <span className="text-[14px]  text-[#8C8C8C] font-light">Documents Attestation</span>
                                <AnimatedButton href={card.link} label="Let's Talk" className="w-full justify-between my-4" />


                                <ul className="mt-2">
                                    {card.features.map((feature, i) => (
                                        <li key={i} className="flex items-center font-normal text-site gap-2 mb-3">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 7C9.15265 6.99976 10.27 7.39778 11.1629 8.12669C12.0558 8.8556 12.6695 9.87064 12.9 11H17.585L16.293 9.707C16.1208 9.53481 16.0174 9.30571 16.0021 9.06268C15.9868 8.81966 16.0607 8.5794 16.21 8.387L16.293 8.293C16.4805 8.10553 16.7348 8.00021 17 8.00021C17.2652 8.00021 17.5195 8.10553 17.707 8.293L20.707 11.293C20.743 11.3283 20.7753 11.3657 20.804 11.405L20.875 11.515L20.929 11.629L20.964 11.734L20.994 11.882L21 12L20.997 12.075L20.98 12.201L20.95 12.312L20.906 12.423L20.854 12.521L20.78 12.625L20.707 12.707L17.707 15.707C17.5184 15.8892 17.2658 15.99 17.0036 15.9877C16.7414 15.9854 16.4906 15.8802 16.3052 15.6948C16.1198 15.5094 16.0146 15.2586 16.0123 14.9964C16.01 14.7342 16.1108 14.4816 16.293 14.293L17.584 13L12.9 13.001C12.6491 14.2124 11.9581 15.2879 10.9605 16.0196C9.96299 16.7514 8.72966 17.0875 7.49879 16.963C6.26792 16.8386 5.12683 16.2624 4.29595 15.3458C3.46508 14.4292 3.00336 13.2371 3 12C3 10.6739 3.52678 9.40215 4.46447 8.46447C5.40215 7.52678 6.67392 7 8 7Z" fill="#09424D" />
                                            </svg>

                                            <span className="text-[14px]">
                                                {feature}

                                            </span>
                                        </li>
                                    ))}
                                </ul>


                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
