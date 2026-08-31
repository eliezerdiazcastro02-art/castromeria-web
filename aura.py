import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# The container for the logo is:
# <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-10">
#               <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain" />

old_logo = '''<div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-10">
              <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain" />'''

# We will add a glowing, glitching red ring (aura) around it!
new_logo = '''<div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-10">
              <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain relative z-20" />
              
              {/* Glitching Red Aura */}
              <motion.div 
                className="absolute inset-[-2px] rounded-full border-[2px] border-red-400 z-10"
                animate={{ 
                  opacity: [1, 1, 0.2, 1, 0, 1, 1, 0.4, 1],
                  boxShadow: ["0px 0px 4px rgba(248,113,113,0.2)", "0px 0px 15px rgba(248,113,113,0.8)", "0px 0px 4px rgba(248,113,113,0.2)"]
                }}
                transition={{
                  opacity: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.1, 0.12, 0.4, 0.42, 0.5, 0.8, 0.85, 1]
                  },
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />'''

text = text.replace(old_logo, new_logo)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Added aura")
