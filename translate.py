import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the broken encoding from previous step if it exists
content = content.replace('Din??micas', 'Dinámicas')
content = content.replace('¿Cu??l', '¿Cuál')
content = content.replace('LA SOLUCI??N', 'LA SOLUCIÓN')
content = content.replace('Log??stica', 'Logística')
content = content.replace('Transición', 'Transición')
content = content.replace('M??s', 'Más')

replacements = {
    'Features': 'Características',
    'Pricing': 'Precios',
    '>About<': '>Nosotros<',
    'FAQ': 'Preguntas Frecuentes',
    'Log in': 'Iniciar Sesión',
    'Get started': 'Empezar ahora',
    'Dynamic <br/> Warehousing Solutions': 'Soluciones Dinámicas <br/> de Almacenamiento',
    'Soluciones Din??micas <br/> de Almacenamiento': 'Soluciones Dinámicas <br/> de Almacenamiento',
    'Helping logistics and manufacturing companies improve': 'Ayudamos a empresas de logística y manufactura a mejorar',
    'operational efficiency by up to': 'su eficiencia operativa hasta en un',
    'Our Platform': 'Nuestra Plataforma',
    "What's the problem?": '¿Cuál es el problema?',
    'Manual workflows cause': 'Los flujos manuales causan',
    'delays and errors': 'retrasos y errores',
    'Inaccurate Order Fulfillment': 'Errores en los Pedidos',
    'Lack of Real-Time Visibility': 'Falta de Visibilidad en Tiempo Real',
    'Inefficiency in Processes': 'Procesos Ineficientes',
    'Human Errors': 'Errores Humanos',
    'Missed Deadlines': 'Plazos Incumplidos',
    'Lack of Transparency': 'Falta de Transparencia',
    'Difficulty in Scaling': 'Dificultades para Escalar',
    'THE SOLUTION': 'LA SOLUCIÓN',
    'automates tasks and delivers real-time insights.': 'automatiza tareas y ofrece datos en tiempo real.',
    'Optimove automates your repetitive tasks, integrates seamlessly with your existing tools, and provides real-time analytics for informed decision-making.': 'Optimove automatiza tus tareas repetitivas, se integra perfectamente con tus herramientas actuales y proporciona analíticas en tiempo real para tomar mejores decisiones.',
    'Automate workflows': 'Automatiza flujos de trabajo',
    'Eliminate manual task management and reduce errors. Optimove streamlines your processes, so you can focus on what truly matters.': 'Elimina la gestión manual de tareas y reduce errores. Optimove optimiza tus procesos para que te enfoques en lo que realmente importa.',
    'Work smarter, not harder': 'Trabaja de forma inteligente',
    'Optimove seamlessly integrates with your tools to simplify complex workflows, ensuring deadlines are met and productivity soars.': 'Optimove se integra con tus herramientas para simplificar flujos de trabajo complejos, asegurando el cumplimiento de plazos y aumentando la productividad.',
    'Real-time insights, better decisions': 'Datos en tiempo real, mejores decisiones',
    "Make informed choices with Optimove's analytics, designed to transform chaos into clarity and boost your productivity by up to 30%.": 'Toma decisiones informadas con las analíticas de Optimove, diseñadas para transformar el caos en claridad y aumentar tu productividad hasta un 30%.',
    'Explore Our Solutions': 'Explora Nuestras Soluciones',
    '>Solutions<': '>Soluciones<',
    'All-in-One Solution<br/>for Everyone': 'Solución Todo en Uno<br/>para Todos',
    'Automate repetitive tasks, integrate seamlessly with your tools, and access real-time insights to optimize every step of your process.': 'Automatiza tareas repetitivas, intégrate con tus herramientas y accede a datos en tiempo real para optimizar cada paso de tu proceso.',
    '>Warehousing<': '>Almacenamiento<',
    'A national network of warehouses offering efficient, scalable storage with unified supply chain management and a single point of contact.': 'Una red nacional de almacenes que ofrece almacenamiento eficiente y escalable con gestión unificada de la cadena de suministro.',
    '>Fulfillment<': '>Logística<',
    'Tech-driven fulfillment services that streamline the flow from manufacturer to customer, with added benefits like repackaging.': 'Servicios logísticos impulsados por tecnología que agilizan el flujo desde el fabricante hasta el cliente, con beneficios adicionales.',
    'Transloading &amp; Cross-Docking': 'Transbordo y Cross-Docking',
    'Fast, accurate cargo transfers through a national transloading network, enhancing fulfillment speed and customer satisfaction.': 'Transferencias de carga rápidas y precisas a través de una red nacional, mejorando la velocidad de entrega y la satisfacción del cliente.',
    'Bonded &amp; FTZ Warehouses': 'Almacenes Aduaneros y Zonas Francas',
    'Secure storage and cost-saving solutions for import and export activities through bonded and Free Trade Zone (FTZ) warehouses.': 'Almacenamiento seguro y soluciones rentables para actividades de importación y exportación a través de almacenes aduaneros.',
    '>Transportation<': '>Transporte<',
    'A reliable transportation network with 2,500+ trucks, ensuring fast, efficient deliveries through key ports and logistics hubs.': 'Una red de transporte confiable con más de 2,500 camiones, asegurando entregas rápidas y eficientes a través de puertos clave.',
    '>Platform<': '>Plataforma<',
    'The Optimove <br/> View Difference': 'La Diferencia de <br/> Optimove',
    '>Integrations<': '>Integraciones<',
    '"Optimove transformed our manual processes into efficient automated workflows, saving us significant time and costs."': '"Optimove transformó nuestros procesos manuales en flujos de trabajo automatizados y eficientes, ahorrándonos mucho tiempo y costos."',
    'Logistics Manager, Asana': 'Gerente de Logística, Asana',
    'Start using Optimove today.': 'Empieza a usar Optimove hoy.',
    'Automates your repetitive tasks, integrates seamlessly with your existing tools.': 'Automatiza tus tareas repetitivas y se integra perfectamente con tus herramientas.',
    'Explore Optimove Now': 'Explorar Optimove Ahora',
    '>Services<': '>Servicios<',
    '>Industries<': '>Industrias<',
    'Ecommerce': 'Comercio Electrónico',
    'Footwear &amp; Apparel': 'Calzado y Ropa',
    'Cold Chain Logistics': 'Logística de Cadena de Frío',
    'Hazmat': 'Materiales Peligrosos',
    '>Company<': '>Empresa<',
    '>Newsroom<': '>Noticias<',
    'Terms of service': 'Términos de servicio',
    'Privacy policy': 'Política de privacidad'
}

for eng, spa in replacements.items():
    content = content.replace(eng, spa)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Translation applied via pure Python.')
