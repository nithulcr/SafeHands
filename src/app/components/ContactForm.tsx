'use client';

import { useState } from "react";
import AnimatedButton from "./AnimatedButton";


export default function ContactForm() {
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
      <div className="max-w-[500px] p-6 lg:p-8  bg-[var(--siteColor)] rounded-3xl">
        <div className="mb-8">
          <h4 className="text-3xl text-white">Get a Quote</h4>
          <p className="text-2 mt-1">Our Advisor will contact you shortly</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid gap-4">

            <input
              name="name"
              className="w-full bg-[#036072] rounded-2xl px-6 py-3 focus:outline-none placeholder-[#BFBCBC]"
              type="text"
              placeholder={"Name"}
              required
            />

            <input
              name="number"
              className="w-full bg-[#036072] rounded-2xl px-6 py-3 focus:outline-none placeholder-[#BFBCBC]"
              type="text"
              placeholder={"Mobile"}
              required
            />
          </div>
          <div>

            <input
              name="email"
              className="w-full bg-[#036072] rounded-2xl px-6 py-3 focus:outline-none placeholder-[#BFBCBC]"
              type="email"
              placeholder={"Email"}
              required
            />
          </div>
          <div>

            <textarea
              name="message"
              className="w-full bg-[#036072] rounded-2xl px-6 min-h-[120px] py-3 focus:outline-none resize-none placeholder-[#BFBCBC]"
              rows={3}
              placeholder={"Message"}
              required
            />
          </div>
          <div className="mt-3">

            <AnimatedButton type="submit"
              label="Get a Quote" className="w-full transparent-btn no-icon lg:mt-2" />
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

    </>
  );
}
