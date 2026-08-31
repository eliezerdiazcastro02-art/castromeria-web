import re
with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# We want to replace the entire <section className="py-24 bg-white"> block that contains the CTA
# Let's extract everything from <section className="py-24 bg-white"> down to the matching </section>
# Wait, there are multiple <section className="py-24 bg-white"> in the file.
# We want the one containing "Robert Fox" and "Inicia tu proyecto industrial hoy."

pattern = r'<section className="py-24 bg-white">\s*<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">.*?Robert Fox.*?</section>'

good_section = '''<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-col md:flex-row gap-12 items-center mb-32">
<div className="w-48 flex-shrink-0">
<img alt="Asana Logo" className="w-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsyCkvXrFNRmcYg-dGCCiG9076sF1keNCcmQHM-rfvApfvoK__HkWt5mzdfa3yoHsRPAOvIeW0godNA3ep2xpsw7YWDO-iC9wzGF2RAKDdPV32lZ97kcp4lAHeY4scwW3WNmTGDlGh0tt_rGdXzaO4Mu_j42_undhl_SYBcVqTq7lN_0Us7pl2R7LUsmu6zxzTYnw9xfXzZAf0FVUt-yzht9LrfX2SgfffvDCAV4T1MI5tbHigW87V"/>
</div>
<div>
<blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-8">
            "Castromeria fabricó nuestros engranajes a medida con una precisión impecable, lo que mejoró nuestro rendimiento y redujo las fallas a cero."
          </blockquote>
<div className="flex items-center gap-4">
<img alt="Robert Fox" className="w-14 h-14 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJNzJ-KHel5CpQ9QhbKllUMtpkysQUN7y-9NYJx524jZO-UHuXCJya9Yp6a0f20E3K86VAsQgkSv8SfTAfxPMcha45vBvyV0itO78hHPpJZynmLL8porePDgu6pNBS4tpNJyUDiyVHPxvYViB6DK1iIwENJHk0l1AGmOG1ABh8fGtbnRr5k6b4mGgSPcdUAhDUNdQfzzn3jXzPR2aqrmb_V1uOLjMX3VPyM2ZWzSXEOux_S_jNiS0b"/>
<div>
<div className="font-bold text-gray-900">Robert Fox</div>
<div className="text-gray-500 text-sm">Gerente de Planta, Industria XYZ</div>
</div>
</div>
</div>
</div>

<motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0, duration: 0.8 }} className="relative bg-red-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl mt-16 overflow-hidden">
<div className="absolute inset-0 opacity-10 rounded-[3rem] overflow-hidden" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
<div className="relative z-20">
<div className="w-32 h-32 mx-auto -mt-28 mb-8 bg-white rounded-2xl p-2 shadow-xl border border-gray-100 relative">
<img alt="CTA Graphic" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyI7cfPWcKeDU3hEYUTdP-8O3NKgQfSPVgoxzQFMWRl-u-qsyET6dhDG79bI_kHhq9wZvwEwVMX_zd-X7-Bis7S2V2TS4vxB44oDFMU3wWGx6aKfnxB43M7NHE2Y_uBHgQrcDJms4aUTN-_imJsrmTrRG15ksEeV-kYdyEHwrXS1ZHg9xPvAdySoB3BvrPWyZdtlAiknpGzpvF-Fv58AwU_DqxIUKsdC5iUCTbXo6S0fRJR16xkkxW"/>
<svg className="absolute -top-16 -right-16 w-32 h-32 text-red-300 opacity-50 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
<path d="M100,0 C50,0 50,100 0,100" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
</svg>
</div>
<h2 className="text-4xl md:text-5xl font-bold mb-6">Inicia tu proyecto industrial hoy.</h2>
<p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">Soluciones técnicas de alto nivel, desde el diseño 3D hasta la fabricación final.</p>
<motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-red-700 bg-white hover:bg-gray-50 transition-colors shadow-lg" href="#">
            Contactar a un Ingeniero
          </motion.a>
</div>
</motion.div>

</div>
</section>'''

new_content = re.sub(pattern, good_section, content, flags=re.DOTALL)
with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("done")
