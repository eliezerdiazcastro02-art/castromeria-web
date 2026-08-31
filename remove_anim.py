import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if '{/* Logos positioned exactly' in line:
        start_idx = i + 1
        break

if start_idx != -1:
    # Find the closing </motion.div> that matches the outer container
    # Since it's a small block, let's just find the line with </motion.div> that is not indented much, or just count them.
    # Actually, we know it's right before:
    # </div>
    # </div>
    # <span className="font-bold text-gray-900 tracking-wide uppercase text-sm">Proyectos a Medida</span>
    for i in range(start_idx, len(lines)):
        if '<span className="font-bold text-gray-900 tracking-wide uppercase text-sm">Proyectos a Medida</span>' in lines[i]:
            # The outer div of the svg container ends a few lines before this.
            # Let's just find the last </motion.div> before this
            for j in range(i, start_idx, -1):
                if '</motion.div>' in lines[j]:
                    end_idx = j
                    break
            break

print(start_idx, end_idx)

if start_idx != -1 and end_idx != -1:
    static_logos_html = '''<div className="absolute top-[176px] left-[20px] md:left-[200px] lg:left-[250px] flex gap-6 md:gap-8 pointer-events-auto">
  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200 shadow-sm relative z-20">Logo</div>
</div>
'''
    final = lines[:start_idx] + [static_logos_html] + lines[end_idx+1:]
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.writelines(final)
    print("Logos are now static")
else:
    print("Could not find bounds")
