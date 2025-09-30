"use client";
import { useState } from "react";
import AnimatedButton from "./AnimatedButton";


export default function CostCalculator() {
    const [showForm, setShowForm] = useState(false);
    const [businessActivity, setBusinessActivity] = useState('');
    const [premisesRequired, setPremisesRequired] = useState('');
    const [numberOfVisas, setNumberOfVisas] = useState('');
    const [numberOfOwners, setNumberOfOwners] = useState('');
    const [jurisdiction, setJurisdiction] = useState('');

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);
    const [messageStatus, setMessageStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleDetailsSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessageStatus(null);

        const formData = {
            businessActivity,
            premisesRequired,
            numberOfVisas,
            numberOfOwners,
            jurisdiction,
            firstName,
            secondName,
            phoneNumber,
            email,
            message,
        };

        try {
            const res = await fetch('/api/cost-calculator', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setMessageStatus({ type: 'success', message: 'Your cost calculation request has been sent!' });
                // Optionally reset form fields here
                setBusinessActivity('');
                setPremisesRequired('');
                setNumberOfVisas('');
                setNumberOfOwners('');
                setJurisdiction('');
                setFirstName('');
                setSecondName('');
                setPhoneNumber('');
                setEmail('');
                setMessage('');
                setShowForm(false); // Go back to the first form
            } else {
                const errorData = await res.json();
                setMessageStatus({ type: 'error', message: errorData.error || 'Failed to send cost calculation request.' });
            }
        } catch (error) {
            setMessageStatus({ type: 'error', message: 'An unexpected error occurred.' });
            console.error('Error submitting cost calculator form:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCalculateClick = () => {
        setMessageStatus(null); // Clear previous messages
        if (!businessActivity || !premisesRequired || !numberOfVisas || !numberOfOwners || !jurisdiction) {
            setMessageStatus({ type: 'error', message: 'Please select all required fields in the calculator.' });
            return;
        }
        setShowForm(true);
    };

    const handleBackClick = () => {
        setShowForm(false);
    };

    return (
        <section className="">
            <div className="max-w-[1320px] pb-14 pt-8 lg:pt-16 lg:pb-24 mx-auto px-6">
                <div className="rounded-4xl p-6 lg:p-20 bg-[var(--blue)] flex items-center justify-center">
                    <div className="w-full max-w-[700px]">
                        {!showForm ? (
                            <>
                                <h2 className="text-white lg:text-7xl text-3xl font-bold mb-4 text-center">
                                    Cost Calculator
                                </h2>
                                <p className="text-white lg:text-lg mb-10 text-center max-w-[460px] mx-auto">
                                    Get an estimated cost of your company setup in under a minute with our interactive cost calculator
                                </p>
                                <form className="space-y-5 calculator-form" onSubmit={e => e.preventDefault()}>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <select
                                                name="businessActivity"
                                                className="appearance-none bg-[var(--blue1)] text-white rounded-xl p-4 w-full focus:outline-none"
                                                value={businessActivity}
                                                onChange={(e) => setBusinessActivity(e.target.value)}
                                            >
                                                <option value="" >Choose your Business Activity</option>
                                                <option value="Accounting &amp; Auditing" aria-selected="false">Accounting &amp; Auditing</option>
                                                <option value="Advertising" aria-selected="false">Advertising</option>
                                                <option value="Automobile Trading" aria-selected="false">Automobile Trading</option>
                                                <option value="Aviation Consultancy" aria-selected="false">Aviation Consultancy</option>
                                                <option value="Business Consultancy" aria-selected="false">Business Consultancy</option>
                                                <option value="Cleaning Services" aria-selected="false">Cleaning Services</option>
                                                <option value="Creative Arts" aria-selected="false">Creative Arts</option>
                                                <option value="Entetaining Activities" aria-selected="false">Entetaining Activities</option>
                                                <option value="Delivery Service" aria-selected="false">Delivery Service</option>
                                                <option value="Digital Marketing" aria-selected="false">Digital Marketing</option>
                                                <option value="E-Commerce" aria-selected="false">E-Commerce</option>
                                                <option value="Educational Sport Activities" aria-selected="false">Educational Sport Activities</option>
                                                <option value="Engineering Consultancy" aria-selected="false">Engineering Consultancy</option>
                                                <option value="Event Management" aria-selected="false">Event Management</option>
                                                <option value="Food Trading" aria-selected="false">Food Trading</option>
                                                <option value="General Trading" aria-selected="false">General Trading</option>
                                                <option value="Holding Company" aria-selected="false">Holding Company</option>
                                                <option value="Hospitality Management" aria-selected="false">Hospitality Management</option>
                                                <option value="HR Conusltancy" aria-selected="false">HR Conusltancy</option>
                                                <option value="Interior Design Consultancy" aria-selected="false">Interior Design Consultancy</option>
                                                <option value="IT Condultancy" aria-selected="false">IT Condultancy</option>
                                                <option value="IT Trading" aria-selected="false">IT Trading</option>
                                                <option value="Legal Consultanyc" aria-selected="false">Legal Consultanyc</option>
                                                <option value="Logistics Consultancy" aria-selected="false">Logistics Consultancy</option>
                                                <option value="Maintanance" aria-selected="false">Maintanance</option>
                                                <option value="Management Consultancy" aria-selected="false">Management Consultancy</option>
                                                <option value="Media" aria-selected="false">Media</option>
                                                <option value="Perfumes &amp; Cosmetics Trading" aria-selected="false">Perfumes &amp; Cosmetics Trading</option>
                                                <option value="Photography" aria-selected="false">Photography</option>
                                                <option value="PR Services" aria-selected="false">PR Services</option>
                                                <option value="Project Management" aria-selected="false">Project Management</option>
                                                <option value="Raw Material trading" aria-selected="false">Raw Material trading</option>
                                                <option value="Real Estate" aria-selected="false">Real Estate</option>
                                                <option value="Cafes / Cloud Kitchen" aria-selected="false">Restaurant</option>
                                                <option value="Retail Outlets /Shops" aria-selected="false">Retail Outlets /Shops</option>
                                                <option value="Saloon" aria-selected="false">Saloon</option>
                                                <option value="Software Publishing" aria-selected="false">Software Publishing</option>
                                                <option value="Sports Management" aria-selected="false">Sports Management</option>
                                                <option value="Technical Consultancy" aria-selected="false">Technical Consultancy</option>
                                                <option value="Technical Services" aria-selected="false">Technical Services</option>
                                                <option value="Textile Trading" aria-selected="false">Textile Trading</option>
                                                <option value="Tourism &amp; Recreation" aria-selected="false">Tourism &amp; Recreation</option>
                                                <option value="Videography" aria-selected="false">Videography</option>



                                            </select>
                                            <span className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5019 15.7376C13.3144 15.9251 13.0601 16.0304 12.7949 16.0304C12.5297 16.0304 12.2754 15.9251 12.0879 15.7376L6.4309 10.0806C6.33539 9.98837 6.25921 9.87803 6.2068 9.75602C6.15439 9.63402 6.1268 9.5028 6.12565 9.37002C6.12449 9.23724 6.1498 9.10556 6.20008 8.98266C6.25036 8.85977 6.32461 8.74811 6.4185 8.65422C6.5124 8.56033 6.62405 8.48608 6.74694 8.43579C6.86984 8.38551 7.00152 8.36021 7.1343 8.36137C7.26708 8.36252 7.3983 8.39011 7.5203 8.44251C7.64231 8.49492 7.75265 8.57111 7.8449 8.66662L12.7949 13.6166L17.7449 8.66662C17.9335 8.48446 18.1861 8.38366 18.4483 8.38594C18.7105 8.38822 18.9613 8.49339 19.1467 8.6788C19.3321 8.86421 19.4373 9.11502 19.4396 9.37722C19.4419 9.63941 19.3411 9.89201 19.1589 10.0806L13.5019 15.7376Z" fill="white" />
                                                </svg>

                                            </span>
                                        </div>

                                        <div className="relative">
                                            <select
                                                name="premisesRequired"
                                                className="appearance-none bg-[var(--blue1)] text-white rounded-xl p-4 w-full focus:outline-none"
                                                value={premisesRequired}
                                                onChange={(e) => setPremisesRequired(e.target.value)}
                                            >
                                                <option>What Premises You Require?</option>
                                                <option value="Photography" aria-selected="false">Photography</option>
                                                <option value="PR Services" aria-selected="false">PR Services</option>
                                                <option value="Project Management" aria-selected="false">Project Management</option>
                                                <option value="Raw Material trading" aria-selected="false">Raw Material trading</option>
                                                <option value="Real Estate" aria-selected="false">Real Estate</option>
                                                <option value="Cafes / Cloud Kitchen" aria-selected="false">Restaurant</option>
                                                <option value="Retail Outlets /Shops" aria-selected="false">Retail Outlets /Shops</option>
                                                <option value="Saloon" aria-selected="false">Saloon</option>
                                                <option value="Software Publishing" aria-selected="false">Software Publishing</option>
                                                <option value="Sports Management" aria-selected="false">Sports Management</option>
                                                <option value="Technical Consultancy" aria-selected="false">Technical Consultancy</option>
                                                <option value="Technical Services" aria-selected="false">Technical Services</option>
                                                <option value="Textile Trading" aria-selected="false">Textile Trading</option>
                                                <option value="Tourism & Recreation" aria-selected="false">Tourism & Recreation</option>
                                                <option value="Videography" aria-selected="false">Videography</option>

                                            </select>
                                            <span className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5019 15.7376C13.3144 15.9251 13.0601 16.0304 12.7949 16.0304C12.5297 16.0304 12.2754 15.9251 12.0879 15.7376L6.4309 10.0806C6.33539 9.98837 6.25921 9.87803 6.2068 9.75602C6.15439 9.63402 6.1268 9.5028 6.12565 9.37002C6.12449 9.23724 6.1498 9.10556 6.20008 8.98266C6.25036 8.85977 6.32461 8.74811 6.4185 8.65422C6.5124 8.56033 6.62405 8.48608 6.74694 8.43579C6.86984 8.38551 7.00152 8.36021 7.1343 8.36137C7.26708 8.36252 7.3983 8.39011 7.5203 8.44251C7.64231 8.49492 7.75265 8.57111 7.8449 8.66662L12.7949 13.6166L17.7449 8.66662C17.9335 8.48446 18.1861 8.38366 18.4483 8.38594C18.7105 8.38822 18.9613 8.49339 19.1467 8.6788C19.3321 8.86421 19.4373 9.11502 19.4396 9.37722C19.4419 9.63941 19.3411 9.89201 19.1589 10.0806L13.5019 15.7376Z" fill="white" />
                                                </svg>

                                            </span>
                                        </div>

                                        <div className="relative">
                                            <select
                                                name="numberOfVisas"
                                                className="appearance-none bg-[var(--blue1)] text-white rounded-xl p-4 w-full focus:outline-none"
                                                value={numberOfVisas}
                                                onChange={(e) => setNumberOfVisas(e.target.value)}
                                            >
                                                <option value="">No. of Visas Required</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="More than 10">More than 10</option>
                                            </select>
                                            <span className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5019 15.7376C13.3144 15.9251 13.0601 16.0304 12.7949 16.0304C12.5297 16.0304 12.2754 15.9251 12.0879 15.7376L6.4309 10.0806C6.33539 9.98837 6.25921 9.87803 6.2068 9.75602C6.15439 9.63402 6.1268 9.5028 6.12565 9.37002C6.12449 9.23724 6.1498 9.10556 6.20008 8.98266C6.25036 8.85977 6.32461 8.74811 6.4185 8.65422C6.5124 8.56033 6.62405 8.48608 6.74694 8.43579C6.86984 8.38551 7.00152 8.36021 7.1343 8.36137C7.26708 8.36252 7.3983 8.39011 7.5203 8.44251C7.64231 8.49492 7.75265 8.57111 7.8449 8.66662L12.7949 13.6166L17.7449 8.66662C17.9335 8.48446 18.1861 8.38366 18.4483 8.38594C18.7105 8.38822 18.9613 8.49339 19.1467 8.6788C19.3321 8.86421 19.4373 9.11502 19.4396 9.37722C19.4419 9.63941 19.3411 9.89201 19.1589 10.0806L13.5019 15.7376Z" fill="white" />
                                                </svg>

                                            </span>
                                        </div>

                                        <div className="relative">
                                            <select
                                                name="numberOfOwners"
                                                className="appearance-none bg-[var(--blue1)] text-white rounded-xl p-4 w-full focus:outline-none"
                                                value={numberOfOwners}
                                                onChange={(e) => setNumberOfOwners(e.target.value)}
                                            >
                                                <option>No. of Owners</option>

                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="More than 10">More than 10</option>
                                            </select>
                                            <span className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5019 15.7376C13.3144 15.9251 13.0601 16.0304 12.7949 16.0304C12.5297 16.0304 12.2754 15.9251 12.0879 15.7376L6.4309 10.0806C6.33539 9.98837 6.25921 9.87803 6.2068 9.75602C6.15439 9.63402 6.1268 9.5028 6.12565 9.37002C6.12449 9.23724 6.1498 9.10556 6.20008 8.98266C6.25036 8.85977 6.32461 8.74811 6.4185 8.65422C6.5124 8.56033 6.62405 8.48608 6.74694 8.43579C6.86984 8.38551 7.00152 8.36021 7.1343 8.36137C7.26708 8.36252 7.3983 8.39011 7.5203 8.44251C7.64231 8.49492 7.75265 8.57111 7.8449 8.66662L12.7949 13.6166L17.7449 8.66662C17.9335 8.48446 18.1861 8.38366 18.4483 8.38594C18.7105 8.38822 18.9613 8.49339 19.1467 8.6788C19.3321 8.86421 19.4373 9.11502 19.4396 9.37722C19.4419 9.63941 19.3411 9.89201 19.1589 10.0806L13.5019 15.7376Z" fill="white" />
                                                </svg>

                                            </span>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <select
                                            name="jurisdiction"
                                            className="appearance-none bg-[var(--blue1)] text-white rounded-xl p-4 w-full focus:outline-none"
                                            value={jurisdiction}
                                            onChange={(e) => setJurisdiction(e.target.value)}
                                        >
                                            <option>Choose Your Jurisdiction</option>
                                            <option>Mainland</option>
                                            <option>Freezone</option>
                                            <option>Offshore</option>

                                        </select>
                                        <span className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.5019 15.7376C13.3144 15.9251 13.0601 16.0304 12.7949 16.0304C12.5297 16.0304 12.2754 15.9251 12.0879 15.7376L6.4309 10.0806C6.33539 9.98837 6.25921 9.87803 6.2068 9.75602C6.15439 9.63402 6.1268 9.5028 6.12565 9.37002C6.12449 9.23724 6.1498 9.10556 6.20008 8.98266C6.25036 8.85977 6.32461 8.74811 6.4185 8.65422C6.5124 8.56033 6.62405 8.48608 6.74694 8.43579C6.86984 8.38551 7.00152 8.36021 7.1343 8.36137C7.26708 8.36252 7.3983 8.39011 7.5203 8.44251C7.64231 8.49492 7.75265 8.57111 7.8449 8.66662L12.7949 13.6166L17.7449 8.66662C17.9335 8.48446 18.1861 8.38366 18.4483 8.38594C18.7105 8.38822 18.9613 8.49339 19.1467 8.6788C19.3321 8.86421 19.4373 9.11502 19.4396 9.37722C19.4419 9.63941 19.3411 9.89201 19.1589 10.0806L13.5019 15.7376Z" fill="white" />
                                            </svg>

                                        </span>
                                    </div>


                                    <AnimatedButton type="button" onClick={handleCalculateClick} label="Calculate Now" className="w-full text-white lg:mt-2" />
                                    {messageStatus && (
                                        <p className={`${messageStatus.type === 'success' ? 'text-green-500' : 'text-red-500'} text-center mt-4`}>
                                            {messageStatus.message}
                                        </p>
                                    )}
                                </form>                            </>
                        ) : (
                            <>

                                <h2 className="text-white lg:text-7xl text-3xl font-bold mb-4 text-center">
                                    Fill Your Details
                                </h2>
                                <p className="text-white lg:text-lg mb-10 text-center max-w-[600px] mx-auto">
                                    Once the contact information is received, designate a responsible team or individual to review the submitted inquiries
                                </p>

                                <form onSubmit={handleDetailsSubmit} className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            className="bg-[var(--blue1)] text-white rounded-xl px-4 py-3 w-full focus:outline-none"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="secondName"
                                            placeholder="Second Name (optional)"
                                            className="bg-[var(--blue1)] text-white rounded-xl px-4 py-3 w-full focus:outline-none"
                                            value={secondName}
                                            onChange={(e) => setSecondName(e.target.value)}
                                        />
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            placeholder="Phone Number"
                                            className="bg-[var(--blue1)] text-white rounded-xl px-4 py-3 w-full focus:outline-none"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email (optional)"
                                            className="bg-[var(--blue1)] text-white rounded-xl px-4 py-3 w-full focus:outline-none"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows={4}
                                        className="bg-[var(--blue1)] text-white rounded-xl px-4 py-3 w-full focus:outline-none"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                    <div className="flex items-center justify-end gap-3 flex-wrap cost-btns">
                                        <AnimatedButton onClick={handleBackClick} label="Back" className="text-white lg:mt-2" />

                                        <AnimatedButton type="submit" label={loading ? "Submitting..." : "Submit"} className="transparent-btn  lg:mt-2" disabled={loading} />
                                    </div>
                                    {messageStatus && (
                                        <p className={`${messageStatus.type === 'success' ? 'text-green-500' : 'text-red-500'} text-center mt-4`}>
                                            {messageStatus.message}
                                        </p>
                                    )}
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
