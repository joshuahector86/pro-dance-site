import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add actual submission logic
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center p-4 text-highlight text-lg font-semibold">
        Thank you for your message!
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 bg-black text-white p-6 rounded border border-highlight shadow-lg w-full md:w-130 lg:w-175 mx-auto"
    >
      <h1 className="text-highlight text-4xl font-bold text-center">
        Contact Dimitri
      </h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold text-highlight">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-highlight rounded px-3 py-2 bg-transparent text-white focus:border-highlight focus:ring-2 focus:ring-highlight outline-none transition w-full"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold text-highlight">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-highlight rounded px-3 py-2 bg-transparent text-white focus:border-highlight focus:ring-2 focus:ring-highlight outline-none transition w-full"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="font-semibold text-highlight">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-highlight rounded px-3 py-2 bg-transparent text-white focus:border-highlight focus:ring-2 focus:ring-highlight outline-none transition w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="font-semibold text-highlight">
          Message Subject
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border border-highlight rounded px-3 py-2 bg-transparent text-white focus:border-highlight focus:ring-2 focus:ring-highlight outline-none transition w-full"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-semibold text-highlight">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-highlight rounded px-3 py-2 bg-transparent text-white focus:border-highlight focus:ring-2 focus:ring-highlight outline-none transition w-full"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="border border-highlight rounded px-5 py-2 font-semibold hover:bg-highlight hover:text-black transition text-white bg-black mt-2"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
