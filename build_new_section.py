import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# I will find the mt-28 container and replace everything inside it, separating the actual logos from this new section.
# The user's new section starts with <p className="text-gray-600 text-lg mb-12"> Nuestra misiA3n...
# Let's extract the actual SVG animation required.

new_section = '''
  <div className="mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Real Brand Logos */}
    <div className="flex flex-wrap items-center gap-8 md:gap-12 justify-center lg:justify-start opacity-90 transition-all duration-300">
      <img alt="Salesforce" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"/>
      <img alt="Amazon" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"/>
      <img alt="Wayfair" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Wayfair_logo.svg"/>
      <img alt="Etsy" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg"/>
      <img alt="eBay" className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg"/>
    </div>
  </div>

  {/* New "Proyectos a Medida" Section */}
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* SVG Animated Line */}
      {/* It needs to start from the icon (left ~32px, top ~250px depending on layout), go down, and turn right across the screen */}
      <svg className="absolute left-[36px] top-[260px] w-[150%] h-[300px] pointer-events-none z-0 hidden lg:block" style={{ overflow: 'visible' }}>
        <motion.path
          d="M 0 0 L 0 150 Q 0 170 20 170 L 1200 170"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeDasharray="8 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* Left Column */}
        <div className="pt-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Castromeria</h2>
          <p className="text-gray-600 text-lg mb-16 max-w-lg leading-relaxed">
            Nuestra misión es ofrecer soluciones técnicas de alto nivel mediante procesos modernos y eficientes, garantizando resultados confiables.
          </p>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 relative z-10">
              <img src="/logo.jpg" alt="Castromeria Logo" className="w-8 h-8 object-contain" />
            </div>
            <span className="font-bold text-gray-900 tracking-wide uppercase text-sm">Proyectos a Medida</span>
          </div>

          {/* Fallback dashed line for mobile where SVG isn't used */}
          <div className="lg:hidden absolute left-[44px] top-[260px] w-px h-32 border-l-2 border-dashed border-red-500 z-0"></div>
        </div>

        {/* Right Column (Isometric Image) */}
        <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-gray-100">
          <img alt="Platform Isometric Graphic" className="w-full rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnZeQJYODD5T2UV02uUMdPaJVrTts4Z3JDYndbnnJacoG1mPlkCxvy_KyO-8z9so9gUGB4YwmSY50OP8hcV6gbk5R_9Z741n-8CedxwgY5GeSSIFciX-1Fl3t_0ktHR6BcPb6OeMSG70aYVb_58sFyK1v-920HaxezirZ8R8NK9AL_oWrtYA-nqh40M0Qg0fhPirJd_F8GleqnNB2kV-JwJ4_WkqX8pKINwyIqOze9d57UuOeaILcG"/>
        </div>

      </div>

      {/* Row of 8 Circular Placeholders intersected by the line */}
      <div className="mt-32 flex justify-start lg:justify-between items-center gap-4 md:gap-8 overflow-x-auto pb-4 relative z-10 pl-24 lg:pl-32">
        <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200">Logo</div>
        <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200">Logo</div>
        <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200">Logo</div>
        <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200">Logo</div>
        <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200">Logo</div>
        <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200">Logo</div>
        <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200">Logo</div>
        <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center text-[10px] text-gray-400 font-semibold border border-gray-200">Logo</div>
      </div>
    </div>
  </section>
'''

# The user's messy code starts at <div className="mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
# and ends right before <section className="py-24 bg-gray-50">

start_str = '<div className="mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">'
end_str = '<section className="py-24 bg-gray-50">'

parts = text.split(start_str)
before = parts[0]
after = end_str + parts[1].split(end_str)[1]

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(before + new_section + "\n" + after)

print("Rebuilt section and added SVG animation")
