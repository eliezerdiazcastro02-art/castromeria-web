"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Liquid } from 'liquid-gooey';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function TestLiquid() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-20" onClick={() => setShow(!show)}>
      <Liquid blur={4} contrast={20} fill="#E5252A">
        <Liquid.Item>
          <div className="bg-[#E5252A] px-6 py-3 rounded-full text-white">
            Eliezer Diaz Castro
          </div>
        </Liquid.Item>
        <Liquid.Item x={show ? 150 : 0}>
          <div className="bg-[#E5252A] w-12 h-12 rounded-full flex items-center justify-center text-white">
            <LinkedinIcon className="w-5 h-5" />
          </div>
        </Liquid.Item>
      </Liquid>
    </div>
  );
}
