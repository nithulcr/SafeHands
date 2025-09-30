// components/UaeCompanyCards.tsx
import AnimatedButton from "./AnimatedButton";


const cards = [
    {
        img: "/plan1.png",
        title: "DUBAI MAILAND",
        price: "AED 8,999",
        description:
            "We are dedicated to guiding you on your financial journey with expertise",
        features: [
            "100% business ownership",
            "Investor Visa Option Available",
            "All Inclusive Licenses",
            "Corporate Banking Assistance",
            "FREE VAT Consultation",
            "Licenses Approval in 24Hrs",
            "Company Startup",
        ],
        button: "Contact Sales",
        link: "/contact-sales",
        highlight: false,
    },
    {
        img: "/plan2.png",
        title: "DUBAI MAILAND",
        price: "AED 8,999",
        description:
            "We are dedicated to guiding you on your financial journey with expertise",
        features: [
            "100% business ownership",
            "Investor Visa Option Available",
            "All Inclusive Licenses",
            "Corporate Banking Assistance",
            "FREE VAT Consultation",
            "Licenses Approval in 24Hrs",
            "Company Startup",
        ],
        button: "Contact Sales",
        link: "/contact-sales",
        highlight: false,
    },
    {
        img: "/plan3.png",
        title: "DUBAI MAILAND",
        price: "AED 8,999",
        description:
            "We are dedicated to guiding you on your financial journey with expertise",
        features: [
            "100% business ownership",
            "Investor Visa Option Available",
            "All Inclusive Licenses",
            "Corporate Banking Assistance",
            "FREE VAT Consultation",
            "Licenses Approval in 24Hrs",
            "Company Startup",
        ],
        button: "Contact Sales",
        link: "/contact-sales",
        highlight: true, // Bold features for third card
    },
];

export default function UaeCompanyCards() {
    return (
        <section className="bg-white py-18 lg:py-26">
            <div className="max-w-[1320px] mx-auto  px-6">
                <div className="max-w-[640px] mx-auto mb-8 lg:mb-18">
                    <h2 className="text-2xl lg:text-[40px] font-semibold leading-tight text-center mb-3 max-w-xl">
                        Establish your company  in the UAE today
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto text-center">
                        At Top One, we provide Business Setup Packages tailored to meet various business requirements. Each package is a customized solution that includes services such as licensing, workspace solutions, and more, ensuring a seamless and effective process for setting up businesses in Dubai’s freezones.
                    </p>
                </div>
                <div className="flex overflow-auto md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 -mr-6 -ml-6 md:m-0 pl-6 pr-6 md:p-0">
                    {cards.map((card, idx) => (
                        <div key={idx} className="bg-[#F6F6F6] rounded-xl  overflow-hidden flex flex-col min-w-[270px]">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full rounded-2xl h-auto object-cover"
                            />
                            <div className="flex flex-col flex-1 p-5 lg:p-8">
                                <h3 className="font-bold mb-2 text-lg lg:text-2xl min-h-[44px]">{card.title}</h3>
                                <span className="text-[14px] lg:text-[16px] text-[var(--blue)] mb-1">Starting from Just</span>
                                <span className="font-extrabold text-2xl lg:text-4xl mb-2">{card.price}</span>
                                <span className="text-gray-500 text-[14px] lg:text-[16px] mb-4">{card.description}</span>
                                <div className="border-t border-gray-400 pt-3 lg:pt-6 lg:mt-3">
                                    <span className="font-bold text-lg lg:text-xl mb-4 block ">
                                        What it Includes?
                                    </span>
                                    <ul className="mb-2">
                                        {card.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 mb-3">
                                                <svg width="20" height="20" className="flex-none" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0_1036_308" maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                                                        <path d="M11.3299 21.103C12.6434 21.1047 13.9442 20.8467 15.1577 20.3441C16.3711 19.8414 17.4733 19.104 18.4009 18.174C19.3308 17.2464 20.0683 16.1443 20.5709 14.9308C21.0736 13.7173 21.3315 12.4165 21.3299 11.103C21.3315 9.78958 21.0736 8.48875 20.5709 7.27528C20.0683 6.06181 19.3308 4.95962 18.4009 4.03203C17.4733 3.10212 16.3711 2.36464 15.1577 1.86199C13.9442 1.35934 12.6434 1.10142 11.3299 1.10303C10.0164 1.10142 8.71562 1.35934 7.50215 1.86199C6.28868 2.36464 5.18649 3.10212 4.2589 4.03203C3.32898 4.95962 2.59151 6.06181 2.08886 7.27528C1.58621 8.48875 1.32828 9.78958 1.3299 11.103C1.32828 12.4165 1.58621 13.7173 2.08886 14.9308C2.59151 16.1443 3.32898 17.2464 4.2589 18.174C5.18649 19.104 6.28868 19.8414 7.50215 20.3441C8.71562 20.8467 10.0164 21.1047 11.3299 21.103Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                                        <path d="M7.3299 11.103L10.3299 14.103L16.3299 8.10303" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </mask>
                                                    <g mask="url(#mask0_1036_308)">
                                                        <path d="M-0.670105 -0.896973H23.3299V23.103H-0.670105V-0.896973Z" fill="#2B286B" />
                                                    </g>
                                                </svg>

                                                <span className="text-[14px] lg:text-[16px]">
                                                    {feature}

                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <AnimatedButton href={card.link} label="Contact sales" className="w-full text-white mt-2 lg:mt-6 mx-auto" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
