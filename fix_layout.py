import re

with open('app/page.tsx', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# 1. Change the image back to /hero-cnc.jpg
text = text.replace('https://images.unsplash.com/photo-1565439390116-419b33a59325?q=80&w=2500&auto=format&fit=crop', '/hero-cnc.jpg')

# 2. Fix the text overlapping the image
# Find the container: <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
# Replace with: <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex">
# And then the <motion.div className="max-w-3xl"> should be <motion.div className="max-w-xl lg:max-w-2xl relative z-20">
# Actually, the user's screenshot shows the text "Diseño y Fabricación..." which is inside:
# <motion.div ... className="max-w-3xl">
# Let's change "max-w-3xl" to "max-w-xl lg:max-w-[45%]" so it strictly stays on the left side!

if '<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1, staggerChildren: 0.1 }} className="max-w-3xl">' in text:
    text = text.replace(
        '<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1, staggerChildren: 0.1 }} className="max-w-3xl">',
        '<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1, staggerChildren: 0.1 }} className="max-w-xl lg:max-w-[50%] pr-4 relative z-20">'
    )

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed layout overlap and restored /hero-cnc.jpg!")
