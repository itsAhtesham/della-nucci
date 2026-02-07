"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", phone: "", subject: "general", message: "" });
      setTimeout(() => setFormState("idle"), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full px-4 py-3.5 bg-white rounded-lg border border-warm-200 text-warm-700 placeholder:text-warm-400 focus:outline-none focus:border-burgundy-800 focus:ring-2 focus:ring-burgundy-900/10 transition-all text-sm";

  return (
    <FadeIn>
      <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-soft">
        <h2 className="font-serif text-2xl font-bold text-burgundy-900 mb-2">
          Send Us a Message
        </h2>
        <p className="text-warm-500 text-sm mb-8">
          Fill out the form and we&apos;ll get back to you within 24 hours
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-warm-600 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-warm-600 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-warm-600 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-warm-600 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={cn(inputClasses, "appearance-none cursor-pointer")}
              >
                <option value="general">General Inquiry</option>
                <option value="reservation">Table Reservation</option>
                <option value="event">Event Booking</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-warm-600 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what's on your mind..."
              className={cn(inputClasses, "resize-none")}
            />
          </div>

          <button
            type="submit"
            disabled={formState !== "idle"}
            className={cn(
              "w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-sm tracking-wider uppercase transition-all duration-300",
              formState === "success"
                ? "bg-sage-400 text-white"
                : "bg-burgundy-900 text-white hover:bg-burgundy-800 shadow-[0_4px_14px_rgba(91,26,26,0.3)] hover:shadow-[0_6px_20px_rgba(91,26,26,0.4)]",
              formState === "submitting" && "opacity-70 cursor-wait"
            )}
          >
            {formState === "idle" && (
              <>
                Send Message <Send className="w-4 h-4" />
              </>
            )}
            {formState === "submitting" && "Sending..."}
            {formState === "success" && (
              <>
                Message Sent! <CheckCircle className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </FadeIn>
  );
}
