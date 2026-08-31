import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

if 'import { useEffect, useRef } from "react";' not in content:
    content = content.replace('import { useEffect } from "react";', 'import { useEffect, useRef } from "react";')

if 'import { motion, useScroll, useTransform } from "framer-motion";' not in content:
    content = content.replace('import { motion } from "framer-motion";', 'import { motion, useScroll, useTransform } from "framer-motion";')

hooks_code = """
  const darkSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: darkScrollY } = useScroll({
    target: darkSectionRef,
    offset: ["start 90%", "start 30%"]
  });
  const darkMargin = useTransform(darkScrollY, [0, 1], ["2rem", "0rem"]);
  const darkRadius = useTransform(darkScrollY, [0, 1], ["3rem", "0rem"]);
"""
if 'const darkSectionRef = useRef<HTMLElement>(null);' not in content:
    content = content.replace('export default function Home() {', 'export default function Home() {\n' + hooks_code)

old_section_tag = '<section className="py-24 bg-gray-900 text-white rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 my-12 relative overflow-hidden">'
new_section_tag = '<motion.section ref={darkSectionRef} style={{ marginLeft: darkMargin, marginRight: darkMargin, borderRadius: darkRadius }} className="py-24 bg-gray-900 text-white my-12 relative overflow-hidden">'
content = content.replace(old_section_tag, new_section_tag)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
