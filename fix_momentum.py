import glob

files = glob.glob('app/**/*.tsx', recursive=True) + glob.glob('app/*.tsx')

for file in set(files):
    with open(file, 'rb') as f:
        content = f.read().decode('utf-8', errors='replace')
    
    if 'const lenis = new Lenis({' in content:
        # Check if we already applied the brake
        if 'lenis.stop();' not in content:
            # We want to insert the brake code right after the Lenis initialization
            # Find the end of the initialization block.
            target = """    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });"""
            
            replacement = """    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Freno de mano: detener inercia y forzar arriba
    lenis.stop();
    lenis.scrollTo(0, { immediate: true });
    requestAnimationFrame(() => {
      lenis.start();
    });"""
            
            # Since formatting might slightly differ, let's use regex
            import re
            pattern = r'const lenis = new Lenis\(\{(.*?)\}\);'
            
            def replacer(match):
                return match.group(0) + "\n\n    lenis.stop();\n    lenis.scrollTo(0, { immediate: true });\n    requestAnimationFrame(() => {\n      lenis.start();\n    });"
            
            content = re.sub(pattern, replacer, content, flags=re.DOTALL)
            
            with open(file, 'wb') as f:
                f.write(content.encode('utf-8'))
            print(f"Applied brake to {file}")
