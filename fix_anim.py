import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_hooks = '''  const { scrollYProgress: darkScrollY } = useScroll({
    target: darkSectionRef,
    offset: ["start 90%", "start 30%"]
  });
  const darkMargin = useTransform(darkScrollY, [0, 1], ["2rem", "0rem"]);
  const darkRadius = useTransform(darkScrollY, [0, 1], ["3rem", "0rem"]);'''

new_hooks = '''  const { scrollYProgress: darkScrollY } = useScroll({
    target: darkSectionRef,
    offset: ["start 90%", "end 10%"]
  });
  const darkMargin = useTransform(darkScrollY, [0, 0.25, 0.75, 1], ["2rem", "0rem", "0rem", "2rem"]);
  const darkRadius = useTransform(darkScrollY, [0, 0.25, 0.75, 1], ["3rem", "0rem", "0rem", "3rem"]);'''

content = content.replace(old_hooks, new_hooks)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
