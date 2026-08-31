import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Current block:
#           <div className="flex items-center gap-4 mb-8">
#             <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-10">
#               <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain" />
#               
#               <div className="absolute left-1/2 top-1/2 w-[1200px] h-[300px] pointer-events-none z-0">
#                 <svg ...>

# We need to change it to:
#           <div className="flex items-center gap-4 mb-8 relative">
#             <div className="absolute left-7 top-7 w-[1200px] h-[300px] pointer-events-none z-0">
#                 <svg ...>
#             ...
#             </div>
#             <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-10">
#               <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain relative z-20" />
#             </div>
#             <span className="font-bold text-gray-900 tracking-wide uppercase text-sm relative z-10">Proyectos a Medida</span>
#           </div>

# Wait, we have logos inside the SVG container wrapper!
# { /* Logos positioned exactly ... */}
# <div className="absolute top-[176px] ...">

# Let's extract the exact text block and rewrite it using slicing.
