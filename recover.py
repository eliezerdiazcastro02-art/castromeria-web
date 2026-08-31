import shutil

# First, restore the file from page_temp.tsx
shutil.copy('app/page_temp.tsx', 'app/page.tsx')
print("Restored from backup")
