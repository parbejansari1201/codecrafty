"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function LegalLayout({ title, children }: Props) {
  return (
    <div className="relative min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Animated title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          {title}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8 text-gray-300 leading-relaxed"
        >
          {children}
        </motion.div>

      </div>
    </div>
  );
}
