"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import NavigationHeader from "@/components/NavigationHeader";
import toast from "react-hot-toast";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<FormState>;

const MAX_MESSAGE = 300;

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const newErrors: Errors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length > MAX_MESSAGE) {
      newErrors.message = `Max ${MAX_MESSAGE} characters allowed`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // clear error on typing
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const loading = async () => {
    await new Promise((res) => setTimeout(res, 1200));
    setForm({ name: "", email: "", message: "" });
    setIsSending(false)

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;
    setIsSending(true)

    try {
      toast.promise(
        loading,
        {
          loading: 'Submitting Form...',
          success: <b>Form Submitted</b>,
          error: <b>Failed To Submit Form</b>,
        }
      );

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavigationHeader />

      <div className="min-h-screen flex items-center justify-center px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl"
        >
          <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6 shadow-xl">

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white">
                Contact Us
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Have a question or feedback? We&apos;d love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="text-sm text-gray-400">Name</label>
                <div className="relative mt-1">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg bg-[#0b0f17] text-white border 
                  ${errors.name ? "border-red-500" : "border-[#1f2937]"}
                  focus:outline-none focus:ring-2 focus:ring-transparent
                  focus:border-transparent transition`}
                    placeholder="John Doe"
                  />

                  {/* Gradient Glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 focus-within:opacity-100 transition duration-300 
                bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-md" />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-400">Email</label>
                <div className="relative mt-1">
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg bg-[#0b0f17] text-white border 
                  ${errors.email ? "border-red-500" : "border-[#1f2937]"}
                  focus:outline-none focus:ring-2 focus:ring-transparent
                  transition`}
                    placeholder="you@example.com"
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 focus-within:opacity-100 transition duration-300 
                bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-md" />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-400">Message</label>
                <div className="relative mt-1">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-3 py-2 rounded-lg bg-[#0b0f17] text-white border resize-none
                  ${errors.message ? "border-red-500" : "border-[#1f2937]"}
                  focus:outline-none transition`}
                    placeholder="Write your message..."
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 focus-within:opacity-100 transition duration-300 
                bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-md" />
                </div>

                {/* Character Counter */}
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-red-400">{errors.message}</span>
                  <span className="text-gray-500">
                    {form.message.length}/{MAX_MESSAGE}
                  </span>
                </div>
              </div>

              {/* Button */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
              bg-blue-600 hover:bg-blue-700 text-white font-medium transition disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </motion.button>

            </form>
          </div>
        </motion.div>
      </div>
    </>

  );
};

export default ContactForm;