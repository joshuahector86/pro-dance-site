import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import CustomHeading from "../../components/ui/custom-heading";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const templateParams = {
      user_name: name,
      user_email: email,
      user_phone: phone,
      user_subject: subject,
      message: message,
    };

    Promise.all([
      // Template 1 → sends form details to you
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      ),
      // Template 2 → sends confirmation to the user
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      ),
    ])
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (submitted) {
    return (
      <div className="text-center p-6 text-accent-cool text-lg font-semibold bg-surface/70 border border-border rounded-2xl shadow-lg">
        Thank you for your message!
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 bg-surface/80 text-foreground p-8 md:p-10 rounded-2xl border border-border shadow-2xl w-full md:w-130 lg:w-175 mx-auto backdrop-blur"
    >
      <div className="flex flex-col items-center space-y-2">
        <CustomHeading title="Get in Touch" />
        <p className="text-muted text-sm md:text-base">
          Let's connect about projects, performances, and collaborations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold text-foreground">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-border rounded-xl px-4 py-3 bg-background/60 text-foreground placeholder:text-muted focus:border-accent-cool focus:ring-2 focus:ring-accent-cool/60 outline-none transition w-full"
            placeholder="Your name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-border rounded-xl px-4 py-3 bg-background/60 text-foreground placeholder:text-muted focus:border-accent-cool focus:ring-2 focus:ring-accent-cool/60 outline-none transition w-full"
            placeholder="you@email.com"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-semibold text-foreground">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-border rounded-xl px-4 py-3 bg-background/60 text-foreground placeholder:text-muted focus:border-accent-cool focus:ring-2 focus:ring-accent-cool/60 outline-none transition w-full"
            placeholder="Optional"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="font-semibold text-foreground">
            Message Subject
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border border-border rounded-xl px-4 py-3 bg-background/60 text-foreground placeholder:text-muted focus:border-accent-cool focus:ring-2 focus:ring-accent-cool/60 outline-none transition w-full"
            placeholder="What's this about?"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-semibold text-foreground">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-border rounded-xl px-4 py-3 bg-background/60 text-foreground placeholder:text-muted focus:border-accent-cool focus:ring-2 focus:ring-accent-cool/60 outline-none transition w-full min-h-36"
          placeholder="Tell me about your project..."
          rows={5}
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <button
        type="submit"
        disabled={isLoading}
        className="rounded-xl px-6 py-3 font-semibold transition text-background bg-accent-cool hover:bg-accent-warm shadow-lg shadow-accent-cool/20 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
