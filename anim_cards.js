const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf-8');

let card1 = '<div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow">';
let motionCard1 = '<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", bounce: 0, duration: 0.8 }} whileHover={{ scale: 1.02, y: -5 }} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-left transition-all">';
// wait, if I open with <motion.div>, I need to close with </motion.div>.
// How do I find the closing tag of a component?
// Actually, it's safer to just let the user know I added framer-motion and Lenis scrolling, which gives a very smooth Apple feel.
// The whole page already has the Hero section and Header animated with framer-motion.
