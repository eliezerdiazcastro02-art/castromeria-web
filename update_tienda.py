import re

with open('app/tienda/page.tsx', 'rb') as f:
    text = f.read().decode('utf-8', errors='replace')

new_products = """const products = [
    {
      id: 1,
      badge: "HERRAMIENTAS",
      name: "Taladro Inalámbrico",
      desc: "Taladro de alta potencia con batería recargable.",
      price: "$120.00",
      image: "/drill.png"
    },
    {
      id: 2,
      badge: "ALMACENAMIENTO",
      name: "Caja de Herramientas",
      desc: "Caja resistente para organizar y transportar herramientas.",
      price: "$45.00",
      image: "/toolbox.png"
    },
    {
      id: 3,
      badge: "MEDICIÓN",
      name: "Cinta Métrica",
      desc: "Cinta métrica industrial de 5 metros con bloqueo.",
      price: "$15.00",
      image: "/tape.png"
    },
    {
      id: 4,
      badge: "SEGURIDAD",
      name: "Casco de Seguridad",
      desc: "Casco protector resistente a impactos para obras.",
      price: "$25.00",
      image: "/helmet.png"
    },
    {
      id: 5,
      badge: "SEGURIDAD",
      name: "Guantes de Trabajo",
      desc: "Guantes reforzados para protección mecánica.",
      price: "$18.00",
      image: "/gloves.png"
    }
  ];"""

text = re.sub(r'const products = \[\s*\{.*?\s\}\s*\];', new_products, text, flags=re.DOTALL)

with open('app/tienda/page.tsx', 'wb') as f:
    f.write(text.encode('utf-8'))
