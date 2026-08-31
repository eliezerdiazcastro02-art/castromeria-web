import re

with open('app/nosotros/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Token mappings
token_map = {
    # Spacing & Sizing
    'py-section-padding': 'py-24',
    'pb-section-padding': 'pb-24',
    'pt-section-padding': 'pt-24',
    'px-margin-mobile': 'px-6',
    'px-gutter': 'px-12',
    'max-w-container-max': 'max-w-7xl',
    'w-unit': 'w-2',
    'h-unit': 'h-2',
    'gap-gutter': 'gap-8',
    'mb-unit': 'mb-2',
    
    # Typography Fonts
    'font-headline-md': 'font-sans',
    'font-headline-lg': 'font-sans',
    'font-body-md': 'font-sans',
    'font-body-lg': 'font-sans',
    'font-label-caps': 'font-sans',
    'font-display-lg': 'font-sans',
    
    # Typography Sizes
    'text-headline-lg-mobile': 'text-4xl',
    'text-headline-lg': 'text-5xl',
    'text-headline-md': 'text-2xl',
    'text-body-lg': 'text-lg',
    'text-body-md': 'text-base',
    'text-label-caps': 'text-sm font-bold tracking-widest',
    'text-display-lg': 'text-5xl md:text-6xl',
    
    # Colors - Backgrounds
    'bg-surface-container-lowest': 'bg-white',
    'bg-surface-container-low': 'bg-gray-50',
    'bg-surface-container': 'bg-gray-100',
    'bg-surface-container-high': 'bg-gray-200',
    'bg-surface-container-highest': 'bg-gray-300',
    'bg-surface': 'bg-white',
    'bg-on-background': 'bg-gray-900',
    'bg-surface/5': 'bg-white/5',
    'bg-surface-variant': 'bg-gray-100',
    'bg-white-variant': 'bg-gray-50',
    
    # Colors - Primary (Red)
    'bg-primary': 'bg-red-600',
    'bg-primary/5': 'bg-red-600/5',
    'bg-primary/10': 'bg-red-50',
    'bg-primary/20': 'bg-red-600/20',
    'bg-primary/90': 'bg-red-700',
    'text-primary': 'text-red-600',
    'border-primary': 'border-red-600',
    'border-primary-fixed': 'border-red-600',
    'text-primary-fixed-dim': 'text-red-400',
    'shadow-primary/30': 'shadow-red-600/30',
    'text-on-primary': 'text-white',
    
    # Colors - Secondary & Tertiary
    'bg-secondary/10': 'bg-gray-100',
    'text-secondary': 'text-gray-700',
    'bg-tertiary/10': 'bg-gray-200',
    'text-tertiary': 'text-gray-800',
    
    # Colors - Text
    'text-on-background': 'text-gray-900',
    'text-on-surface': 'text-gray-900',
    'text-on-surface-variant': 'text-gray-500',
    'text-surface-variant': 'text-gray-400',
    'text-surface-variant/80': 'text-gray-400',
    'text-surface-bright': 'text-white',
    
    # Borders
    'border-outline-variant/30': 'border-gray-200',
    'border-outline-variant/20': 'border-gray-100',
    
    # Shadows
    'industrial-shadow': 'shadow-xl',
    
    # Utilities
    'bg-grid-pattern': 'bg-transparent',
}

def replace_tokens(match):
    classes = match.group(1).split()
    new_classes = []
    for c in classes:
        # Check if the class has a direct prefix match like md:
        prefix = ""
        base_c = c
        if ':' in c:
            parts = c.split(':', 1)
            prefix = parts[0] + ':'
            base_c = parts[1]
        
        if base_c in token_map:
            new_classes.append(prefix + token_map[base_c])
        else:
            new_classes.append(c)
    return 'className="' + ' '.join(new_classes) + '"'

# Find all className="..."
text = re.sub(r'className="([^"]+)"', replace_tokens, text)

# Add Lenis and smooth scroll to component
lenis_import = '''import { useEffect } from "react";
import Lenis from "lenis";'''
if 'import Lenis' not in text:
    text = text.replace('import Navbar', lenis_import + '\nimport Navbar')

lenis_hook = '''export default function Nosotros() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);'''

if 'useEffect(() => {' not in text:
    text = text.replace('export default function Nosotros() {', lenis_hook)

with open('app/nosotros/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("UI mapped perfectly to Castromeria and Smooth Scroll added")
