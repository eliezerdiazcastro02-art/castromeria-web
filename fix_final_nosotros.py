import re

with open('extracted_nosotros.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Layout mappings
layout = {
    'py-section-padding': 'py-24',
    'px-margin-mobile': 'px-6',
    'md:px-gutter': 'md:px-12',
    'max-w-container-max': 'max-w-7xl',
    'industrial-shadow': 'shadow-xl',
    'bg-gray-200est': 'bg-gray-300',
    'text-gray-500 text-gray-400': 'text-gray-400'
}

for old, new in layout.items():
    text = text.replace(old, new)

# Real Translations
text = re.sub(r'Lanzamiento de nuestra plataforma impulsada por IA, orquestando env.*?n\.', 'Lanzamiento de nuestro primer centro de mecanizado CNC, revolucionando la precisión en la fabricación local.', text)
text = re.sub(r'Operaciones establecidas en m.*?s de 50 pa.*?ses, gestionando millones de transacciones log.*?sticas diarias\.', 'Expansión de nuestras capacidades con impresión 3D industrial y diseño CAD a medida para clientes internacionales.', text)
text = re.sub(r'Desafiamos el status quo log.*?stico mediante la implementaci.*?n constante de nuevas tecnolog.*?as y algoritmos predictivos\.', 'Desafiamos los límites de la fabricación mediante la implementación constante de nuevas tecnologías CNC y procesos de vanguardia.', text)
text = re.sub(r'Nuestra infraestructura est.*? dise.*?ada para no fallar\. Garantizamos la integridad de los datos y la seguridad de las operaciones\.', 'Nuestros componentes están diseñados para no fallar. Garantizamos la máxima tolerancia y resistencia en cada pieza fabricada.', text)
text = re.sub(r'Conectamos continentes sin fricci.*?n, eliminando barreras fronterizas a trav.*?s de una plataforma unificada\.', 'Transformamos ideas en realidades tangibles, eliminando barreras de diseño a través de un proceso integrado de manufactura.', text)
text = re.sub(r'Nos comprometemos a optimizar rutas y cargas no solo para reducir costos, sino para minimizar significativamente la huella de carbono de la log.*?stica global\. Eficiencia que cuida el planeta\.', 'Nos comprometemos a optimizar el uso de materiales no solo para reducir costos, sino para minimizar el desperdicio industrial. Fabricación eficiente que cuida el planeta.', text)

text = text.replace('Mentes Maestras detrAs de la OrquestaciA3n', 'Mentes Maestras detrás de la Precisión')
text = text.replace('Mentes Maestras detrs de la Orquestacin', 'Mentes Maestras detrás de la Precisión')
text = text.replace('Mentes Maestras detrás de la Orquestación', 'Mentes Maestras detrás de la Precisión')

text = re.sub(r'Nuestro equipo ejecutivo combina d.*?cadas de experiencia en log.*?stica tradicional con talento disruptivo en ingenier.*?a de software e inteligencia artificial\.', 'Nuestro equipo combina décadas de experiencia en matricería tradicional con talento disruptivo en diseño 3D e ingeniería mecánica moderna.', text)

text = re.sub(r'"La verdadera innovaci.*?n en log.*?stica no es mover cosas m.*?s r.*?pido, es saber exactamente por qu.*?, c.*?mo y cu.*?ndo moverlas antes de que el cliente lo pida\."', '"La verdadera innovación industrial no es fabricar cosas más rápido, es diseñarlas con precisión micrométrica para que nunca fallen."', text)

text = text.replace('Director de Operaciones', 'Jefe de Taller')
text = text.replace('Elena Rostova', 'Marcos Castro')
text = text.replace('Chief Technology Officer (CTO)', 'Ingeniero en Jefe')

text = re.sub(r'Presencia en m.*?s de 50 pa.*?ses\.', 'Precisión en más de 10,000 proyectos.', text)

text = re.sub(r'Nuestra red global asegura que sin importar d.*?nde se origine o termine la demanda, Optimove tiene la infraestructura digital y f.*?sica para gestionarla con precisi.*?n suiza\.', 'Nuestra maquinaria asegura que sin importar la complejidad geométrica o el material, Castromeria tiene la infraestructura tecnológica para fabricarlo con precisión milimétrica.', text)

text = re.sub(r'Estamos buscando mentes anal.*?ticas, ingenieros brillantes y expertos en operaciones para escalar el futuro\.', 'Estamos listos para materializar tu próximo gran proyecto. Hablemos de fabricación.', text)
text = text.replace('Ver Oportunidades', 'Solicitar Cotización')
text = text.replace('Contactar Ventas', 'Ver Proyectos')
text = text.replace('SAc parte de nuestra historia', 'Sé parte de nuestra historia')
text = text.replace('Optimove', 'Castromeria')
text = text.replace('InnovaciA3n', 'Innovación')
text = text.replace('logA-stica', 'logística')

with open('extracted_nosotros.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Translations applied")
