"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900/40 backdrop-blur border border-gray-800 rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold mb-3 text-white">
        {title}
      </h2>

      <div className="text-gray-400 text-sm leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
}
