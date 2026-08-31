const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf-8');

const reps = {
    'Soluciones Dinámicas <br/> de Almacenamiento': 'Diseño y Fabricación <br/> Industrial a Medida',
    'Ayudamos a empresas de logística y manufactura a mejorar': 'Especialistas en acero inoxidable, CNC, impresión 3D y automatización.',
    'su eficiencia operativa hasta en un': 'Fabricamos piezas y proyectos a medida con máxima precisión.',
    'Empezar ahora': 'Cotizar Proyecto',
    'Nuestra Plataforma': 'Nuestros Servicios',

    '¿Cuál es el problema?': '¿Por qué optimizar tu producción?',
    'Los flujos manuales causan': 'La manufactura ineficiente genera',
    'retrasos y errores': 'sobrecostos y fallas',
    'Errores en los Pedidos': 'Falta de Precisión',
    'Falta de Visibilidad en Tiempo Real': 'Desgaste de Piezas Clave',
    'Procesos Ineficientes': 'Tiempos de Entrega Largos',
    'Errores Humanos': 'Procesos Obsoletos',
    'Plazos Incumplidos': 'Falta de Automatización',
    'Falta de Transparencia': 'Materiales Inadecuados',
    'Dificultades para Escalar': 'Límites en la Producción',

    'automatiza tareas y ofrece datos en tiempo real.': 'ofrece soluciones de manufactura de la más alta calidad.',
    'Castromeria automatiza tus tareas repetitivas, se integra perfectamente con tus herramientas actuales y proporciona analíticas en tiempo real para tomar mejores decisiones.': 'Nuestra misión es ofrecer soluciones técnicas de alto nivel mediante procesos modernos y eficientes, garantizando resultados confiables.',
    'Automatiza flujos de trabajo': 'Mecanizado CNC',
    'Elimina la gestión manual de tareas y reduce errores. Castromeria optimiza tus procesos para que te enfoques en lo que realmente importa.': 'Fabricamos piezas, estructuras, moldes, ejes y engranajes con tolerancias exactas usando tecnología CNC de última generación.',
    'Trabaja de forma inteligente': 'Diseño e Impresión 3D',
    'Castromeria se integra con tus herramientas para simplificar flujos de trabajo complejos, asegurando el cumplimiento de plazos y aumentando la productividad.': 'Desarrollamos prototipos rápidos y precisos para llevar tus ideas desde el concepto hasta la validación industrial.',
    'Datos en tiempo real, mejores decisiones': 'Acabados Especializados',
    'Toma decisiones informadas con las analíticas de Castromeria, diseñadas para transformar el caos en claridad y aumentar tu productividad hasta un 30%.': 'Ofrecemos servicios de anodizado y teflonado para garantizar durabilidad, baja fricción y máxima resistencia en condiciones extremas.',

    'Solución Todo en Uno<br/>para Todos': 'Soluciones Técnicas<br/>de Alto Nivel',
    'Automatiza tareas repetitivas, intégrate con tus herramientas y accede a datos en tiempo real para optimizar cada paso de tu proceso.': 'Ofrecemos soluciones integrales para cada etapa del proceso de desarrollo de productos y fabricación industrial.',
    
    '>Almacenamiento<': '>Diseño Industrial<',
    'Una red nacional de almacenes que ofrece almacenamiento eficiente y escalable con gestión unificada de la cadena de suministro.': 'Prototipado rápido y diseño asistido (CAD/CAM) para crear soluciones funcionales y optimizadas a la medida.',
    '>Logística<': '>Mecanizado CNC<',
    'Servicios logísticos impulsados por tecnología que agilizan el flujo desde el fabricante hasta el cliente, con beneficios adicionales.': 'Torno y fresado CNC para la fabricación de ejes, engranajes y piezas complejas en todo tipo de materiales.',
    'Transbordo y Cross-Docking': 'Acero Inoxidable',
    'Transferencias de carga rápidas y precisas a través de una red nacional, mejorando la velocidad de entrega y la satisfacción del cliente.': 'Diseño y fabricación de inmuebles, mobiliario y estructuras altamente resistentes en acero inoxidable.',
    'Almacenes Aduaneros y Zonas Francas': 'Anodizado y Teflonado',
    'Almacenamiento seguro y soluciones rentables para actividades de importación y exportación a través de almacenes aduaneros.': 'Tratamientos superficiales especializados que mejoran el rendimiento, evitan la corrosión y alargan la vida útil.',
    '>Transporte<': '>Automatización<',
    'Una red de transporte confiable con más de 2,500 camiones, asegurando entregas rápidas y eficientes a través de puertos clave.': 'Desarrollo de sistemas mecánicos y automatizados para optimizar el rendimiento de las líneas de producción industrial.',

    'La Diferencia de <br/> Castromeria': 'La Precisión de <br/> Castromeria',
    '>Integraciones<': '>Proyectos a Medida<',

    '"Castromeria transformó nuestros procesos manuales en flujos de trabajo automatizados y eficientes, ahorrándonos mucho tiempo y costos."': '"Castromeria fabricó nuestros engranajes a medida con una precisión impecable, lo que mejoró nuestro rendimiento y redujo las fallas a cero."',
    'Gerente de Logística, Asana': 'Gerente de Planta, Industria XYZ',

    'Empieza a usar Castromeria hoy.': 'Inicia tu proyecto industrial hoy.',
    'Automatiza tus tareas repetitivas y se integra perfectamente con tus herramientas.': 'Soluciones técnicas de alto nivel, desde el diseño 3D hasta la fabricación final.',
    'Explorar Castromeria Ahora': 'Contactar a un Ingeniero'
};

for (const [key, value] of Object.entries(reps)) {
    content = content.split(key).join(value);
}

fs.writeFileSync('app/page.tsx', content, 'utf-8');
console.log('Copy replaced for MachMaker context');
