'use client';

import { useState } from "react";
import AnimatedButton from "./AnimatedButton";


export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Handle form submit (send POST to API route)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus(null);

    // Get data from form fields
    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      number: (form.elements.namedItem('number') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    // Send POST request to backend API
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (res.ok) {
      setMessageStatus({ type: 'success', message: "Your message has been sent!" });
      form.reset();
    } else {
      setMessageStatus({ type: 'error', message: "Message sending failed." });
    }
  };

  return (
    <>
      <section className="py-14  lg:py-20   mx-auto  ">
        <div className="max-w-[1320px] px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Left: Info */}
          
            <div className="mb-8">
              <span className="text-[#8C8C8C]">Make an Appointment</span>
              <h2 className="text-2xl lg:text-[40px] font-medium mb-4 max-w-[600px]">
                Request a free quote
              </h2>
              <ul className="space-y-5 mt-6 lg:mt-10">

                <li className="flex items-center gap-4">
                  <span className="bg-[#121212] p-2 rounded-full  w-13 h-13 flex items-center justify-center">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.9016 0.866752C7.0446 1.68928 7.9346 2.81199 8.6946 3.88632L9.1366 4.52223L9.5536 5.1295C9.76218 5.4304 9.85137 5.79655 9.80416 6.1582C9.75695 6.51985 9.57664 6.8517 9.2976 7.09054L7.3466 8.52132C7.25234 8.58853 7.18599 8.68724 7.15988 8.79911C7.13376 8.91098 7.14965 9.02841 7.2046 9.12958C7.6466 9.92249 8.4326 11.1035 9.3326 11.9921C10.2326 12.8808 11.4856 13.7083 12.3446 14.1941C12.4523 14.2538 12.5791 14.2705 12.6989 14.2408C12.8186 14.211 12.9223 14.1371 12.9886 14.0342L14.2586 12.1255C14.4921 11.8192 14.8365 11.614 15.2198 11.5529C15.603 11.4918 15.9954 11.5795 16.3146 11.7976L16.9776 12.2509C18.2166 13.1 19.5476 14.0648 20.5656 15.3514C20.727 15.5566 20.8298 15.8008 20.863 16.0586C20.8962 16.3163 20.8588 16.5781 20.7546 16.8167C19.9176 18.7452 17.7996 20.3873 15.5966 20.3073L15.2966 20.2905L15.0636 20.2708L14.8056 20.2412L14.5246 20.2036L14.2196 20.1543L14.0596 20.1246L13.7236 20.0535L13.5476 20.014L13.1816 19.9212L12.7966 19.8126L12.3946 19.6842C10.5486 19.0661 8.2056 17.8516 5.8016 15.4778C3.3976 13.104 2.1686 10.7914 1.5426 8.96863L1.4126 8.57168L1.3026 8.19152L1.2086 7.83012L1.1306 7.48847C1.1081 7.38146 1.0871 7.27415 1.0676 7.16657L1.0176 6.8654L0.977601 6.58793L0.948601 6.33318L0.928601 6.1031L0.912601 5.80687C0.831601 3.63847 2.5126 1.53228 4.4566 0.709751C4.69058 0.609987 4.9468 0.572004 5.20013 0.599529C5.45346 0.627054 5.69519 0.71914 5.9016 0.866752ZM14.0366 4.41657L14.1526 4.42941C14.8805 4.55619 15.5491 4.90727 16.0625 5.43232C16.5759 5.95737 16.9078 6.62944 17.0106 7.3522C17.0473 7.6022 16.9855 7.85656 16.838 8.06296C16.6905 8.26936 16.4685 8.4121 16.2177 8.46181C15.9669 8.51152 15.7063 8.46442 15.4896 8.3302C15.2729 8.19599 15.1165 7.98487 15.0526 7.74027L15.0296 7.62671C14.9894 7.34342 14.8669 7.07769 14.677 6.86163C14.4872 6.64558 14.238 6.48844 13.9596 6.40921L13.8046 6.37465C13.5535 6.3307 13.3289 6.19369 13.1767 5.99163C13.0245 5.78957 12.9563 5.53773 12.9859 5.28763C13.0155 5.03752 13.1408 4.80805 13.3361 4.64613C13.5314 4.48422 13.782 4.4021 14.0366 4.41657ZM14.0446 1.41478C15.6359 1.41478 17.162 2.03897 18.2872 3.15005C19.4125 4.26113 20.0446 5.76807 20.0446 7.33937C20.0443 7.59104 19.9467 7.83312 19.7718 8.01612C19.5968 8.19913 19.3576 8.30926 19.1032 8.32401C18.8488 8.33876 18.5982 8.25701 18.4028 8.09548C18.2073 7.93395 18.0817 7.70481 18.0516 7.4549L18.0446 7.33937C18.0445 6.33669 17.6582 5.37158 16.9641 4.63976C16.2699 3.90795 15.3199 3.4642 14.3066 3.39853L14.0446 3.38964C13.7794 3.38964 13.525 3.28561 13.3375 3.10043C13.15 2.91525 13.0446 2.66409 13.0446 2.40221C13.0446 2.14033 13.15 1.88917 13.3375 1.70399C13.525 1.51881 13.7794 1.41478 14.0446 1.41478Z" fill="#fff" />
                    </svg>

                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#8C8C8C] text-sm">Call Us 24/7</span>
                    <span className="font-semibold text-lg">(+256) 2145.2156</span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-[#121212] p-2 rounded-full  w-13 h-13 flex items-center justify-center">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.1423 3.28223H7.64233C6.38256 3.28223 5.17437 3.78267 4.28358 4.67347C3.39278 5.56427 2.89233 6.77245 2.89233 8.03223V17.0322C2.89233 17.656 3.0152 18.2737 3.25391 18.85C3.49262 19.4263 3.8425 19.9499 4.28358 20.391C5.17437 21.2818 6.38256 21.7822 7.64233 21.7822H18.1423C19.4013 21.7796 20.6079 21.2783 21.4982 20.3881C22.3884 19.4978 22.8897 18.2912 22.8923 17.0322V8.03223C22.8897 6.77326 22.3884 5.56661 21.4982 4.67639C20.6079 3.78616 19.4013 3.28487 18.1423 3.28223ZM14.4923 11.6022C14.0003 11.8828 13.4437 12.0304 12.8773 12.0304C12.3109 12.0304 11.7543 11.8828 11.2623 11.6022L4.41233 7.67223C4.50091 6.87753 4.87934 6.14337 5.47525 5.61019C6.07116 5.07701 6.84271 4.78223 7.64233 4.78223H18.1423C18.9413 4.78442 19.7117 5.07996 20.3071 5.61273C20.9026 6.1455 21.2817 6.87839 21.3723 7.67223L14.4923 11.6022Z" fill="#fff" />
                    </svg>


                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#8C8C8C] text-sm">Work with us</span>
                    <a href="mailto:safehandsattest@gmail.com" className="font-semibold text-lg">safehandsattest@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-[#121212] p-2 rounded-full  w-13 h-13 flex items-center justify-center">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8923 2.29199C15.2793 2.29199 17.5685 3.2402 19.2563 4.92803C20.9441 6.61586 21.8923 8.90504 21.8923 11.292C21.8923 14.366 20.2163 16.882 18.4503 18.687C17.568 19.5791 16.6053 20.3878 15.5743 21.103L15.1483 21.393L14.9483 21.526L14.5713 21.766L14.2353 21.971L13.8193 22.213C13.537 22.3742 13.2175 22.4589 12.8923 22.4589C12.5672 22.4589 12.2477 22.3742 11.9653 22.213L11.5493 21.971L11.0293 21.651L10.8373 21.526L10.4273 21.253C9.31517 20.5005 8.27924 19.6411 7.33433 18.687C5.56833 16.881 3.89233 14.366 3.89233 11.292C3.89233 8.90504 4.84055 6.61586 6.52837 4.92803C8.2162 3.2402 10.5054 2.29199 12.8923 2.29199ZM12.8923 8.29199C12.4984 8.29199 12.1083 8.36959 11.7443 8.52035C11.3803 8.67112 11.0496 8.8921 10.771 9.17067C10.4924 9.44925 10.2715 9.77996 10.1207 10.1439C9.96993 10.5079 9.89233 10.898 9.89233 11.292C9.89233 11.686 9.96993 12.0761 10.1207 12.44C10.2715 12.804 10.4924 13.1347 10.771 13.4133C11.0496 13.6919 11.3803 13.9129 11.7443 14.0636C12.1083 14.2144 12.4984 14.292 12.8923 14.292C13.688 14.292 14.451 13.9759 15.0137 13.4133C15.5763 12.8507 15.8923 12.0876 15.8923 11.292C15.8923 10.4963 15.5763 9.73328 15.0137 9.17067C14.451 8.60806 13.688 8.29199 12.8923 8.29199Z" fill="#fff" />
                    </svg>


                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#8C8C8C] text-sm">Our Location</span>
                    <span className="font-semibold text-lg">Shop No 04, One Deira Mall</span>
                  </div>
                </li>
              </ul>
            </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-[var(--background2)] p-10 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-4">

              <input
                name="name"
                className="w-full bg-[#F6F6F6] rounded-4xl px-6 py-3 focus:outline-none placeholder-[#BFBCBC]"
                type="text"
                placeholder={"Your Name"}
                required
              />

              <input
                name="number"
                className="w-full bg-[#F6F6F6] rounded-4xl px-6 py-3 focus:outline-none placeholder-[#BFBCBC]"
                type="text"
                placeholder={"Phone number"}
                required
              />
            </div>
            <div>

              <input
                name="email"
                className="w-full bg-[#F6F6F6] rounded-4xl px-6 py-3 focus:outline-none placeholder-[#BFBCBC]"
                type="email"
                placeholder={"Email"}
                required
              />
            </div>
            <div>

              <textarea
                name="message"
                className="w-full bg-[#F6F6F6] rounded-4xl px-6 min-h-[140px] py-3 focus:outline-none resize-none placeholder-[#BFBCBC]"
                rows={3}
                placeholder={"Type Your Message"}
                required
              />
            </div>
            <div className="mt-3 justify-self-end">

              <AnimatedButton type="submit"
                 label="Submit message" className="w-fit text-white lg:mt-2" />
            </div>
            <div className="mt-3 justify-self-end message-status">
              {messageStatus && (
                <p className={`${messageStatus.type === 'success' ? 'text-blue-500' : 'text-red-500'}`}>
                  {messageStatus.message}
                </p>
              )}
            </div>
          </form>
        </div>


      </section>

    </>
  );
}
