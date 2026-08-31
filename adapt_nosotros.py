import re

with open('extracted_nosotros.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Color Mappings
mappings = {
    'text-primary-fixed-dim': 'text-red-400',
    'border-primary-fixed': 'border-red-600',
    'bg-primary/20': 'bg-red-600/20',
    'bg-primary/10': 'bg-red-50',
    'text-primary': 'text-red-600',
    'bg-primary': 'bg-red-600',
    'border-primary': 'border-red-600',
    'shadow-primary/30': 'shadow-red-600/30',
    
    'text-secondary': 'text-gray-700',
    'bg-secondary/10': 'bg-gray-100',
    'text-tertiary': 'text-gray-800',
    'bg-tertiary/10': 'bg-gray-200',
    
    'text-on-background': 'text-gray-900',
    'bg-on-background': 'bg-gray-900',
    'text-on-surface-variant': 'text-gray-500',
    'text-on-primary': 'text-white',
    
    'bg-surface-container-lowest': 'bg-white',
    'bg-surface-container-low': 'bg-gray-50',
    'bg-surface-container-high': 'bg-gray-200',
    'bg-surface-container-highest': 'bg-gray-300',
    'bg-surface-container': 'bg-gray-100',
    'bg-surface/5': 'bg-white/5',
    'bg-surface': 'bg-white',
    
    'border-outline-variant/30': 'border-gray-200',
    'border-outline-variant/20': 'border-gray-100',
    'text-surface-bright': 'text-white',
    'text-surface-variant/80': 'text-gray-400',
    'text-surface-variant': 'text-gray-400',
}

for old, new in mappings.items():
    text = text.replace(old, new)

# Remove custom font families since we use sans
text = re.sub(r'font-headline-\w+', 'font-sans', text)
text = re.sub(r'font-body-\w+', 'font-sans', text)
text = re.sub(r'font-label-caps', 'font-sans', text)
text = re.sub(r'font-display-\w+', 'font-sans', text)
text = re.sub(r'text-headline-\w+-mobile', 'text-4xl', text)
text = re.sub(r'text-headline-lg', 'text-5xl', text)
text = re.sub(r'text-display-lg', 'text-6xl', text)
text = re.sub(r'text-label-caps', 'text-sm font-bold', text)

# Convert class to className
text = text.replace('class="', 'className="')

# Self-closing tags fix for JSX
text = re.sub(r'(<img[^>]*?)(?<!/)>', r'\1 />', text)

# Replace Material Symbols with SVGs to avoid loading external fonts?
# Or just keep material symbols but make sure we have the link. The user used material symbols.
# Let's keep it, but we don't have the font link in layout.tsx. We can just add it or use basic SVG.
# Actually, it's a Next.js app, we can just use standard Tailwind text classes.
text = text.replace('class=', 'className=')

# Context Translations
context = {
    'Optimove': 'Castromeria',
    'Lanzamiento de nuestra plataforma impulsada por IA, orquestando envíos internacionales con un 99.9% de precisión.': 'Lanzamiento de nuestro primer centro de mecanizado CNC, revolucionando la precisión en la fabricación local.',
    'Operaciones establecidas en más de 50 países, gestionando millones de transacciones logísticas diarias.': 'Expansión de nuestras capacidades con impresión 3D industrial y diseño CAD a medida para clientes internacionales.',
    'Desafiamos el status quo logístico mediante la implementación constante de nuevas tecnologías y algoritmos predictivos.': 'Desafiamos los límites de la fabricación mediante la implementación constante de nuevas tecnologías CNC y procesos de vanguardia.',
    'Nuestra infraestructura está diseñada para no fallar. Garantizamos la integridad de los datos y la seguridad de las operaciones.': 'Nuestros componentes están diseñados para no fallar. Garantizamos la máxima tolerancia y resistencia en cada pieza fabricada.',
    'Conectamos continentes sin fricción, eliminando barreras fronterizas a través de una plataforma unificada.': 'Transformamos ideas en realidades tangibles, eliminando barreras de diseño a través de un proceso integrado de manufactura.',
    'Nos comprometemos a optimizar rutas y cargas no solo para reducir costos, sino para minimizar significativamente la huella de carbono de la logística global. Eficiencia que cuida el planeta.': 'Nos comprometemos a optimizar el uso de materiales no solo para reducir costos, sino para minimizar el desperdicio industrial. Fabricación eficiente que cuida el planeta.',
    'Mentes Maestras detrás de la Orquestación': 'Mentes Maestras detrás de la Precisión',
    'Nuestro equipo ejecutivo combina décadas de experiencia en logística tradicional con talento disruptivo en ingeniería de software e inteligencia artificial.': 'Nuestro equipo combina décadas de experiencia en matricería tradicional con talento disruptivo en diseño 3D e ingeniería mecánica moderna.',
    '"La verdadera innovación en logística no es mover cosas más rápido, es saber exactamente por qué, cómo y cuándo moverlas antes de que el cliente lo pida."': '"La verdadera innovación industrial no es fabricar cosas más rápido, es diseñarlas con precisión micrométrica para que nunca fallen."',
    'Director de Operaciones': 'Jefe de Taller',
    'Elena Rostova': 'Marcos Castro',
    'Chief Technology Officer (CTO)': 'Ingeniero en Jefe',
    'Presencia en más de 50 países.': 'Precisión en más de 10,000 proyectos.',
    'Nuestra red global asegura que sin importar dónde se origine o termine la demanda, Optimove tiene la infraestructura digital y física para gestionarla con precisión suiza.': 'Nuestra maquinaria asegura que sin importar la complejidad geométrica o el material, Castromeria tiene la infraestructura tecnológica para fabricarlo con precisión milimétrica.',
    'Estamos buscando mentes analíticas, ingenieros brillantes y expertos en operaciones para escalar el futuro.': 'Estamos listos para materializar tu próximo gran proyecto. Hablemos de fabricación.',
    'Ver Oportunidades': 'Solicitar Cotización',
    'Contactar Ventas': 'Ver Proyectos'
}

for old, new in context.items():
    # Replace ignoring exact accents since powershell messed them up
    # We will just do a pass in python
    pass

with open('extracted_nosotros.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Applied classes. Now generating full page.")
