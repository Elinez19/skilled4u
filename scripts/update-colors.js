const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, '../src/components'));

// Include App.tsx as well just in case
files.push(path.join(__dirname, '../src/App.tsx'));

let totalChanges = 0;

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Buttons replacement (using design system)
  content = content.replace(/className="(?:[^"]*)bg-emerald-600 hover:bg-emerald-700 text-white[^"]*"/g, (match) => {
    // Keep padding and rounded classes, but swap colors to btn btn-primary
    let newClass = match;
    newClass = newClass.replace(/bg-emerald-600 hover:bg-emerald-[4-7]00 text-white/g, 'btn btn-primary');
    newClass = newClass.replace(/font-semibold/g, ''); // btn already has font-medium
    newClass = newClass.replace(/shadow-lg/g, ''); // btn-primary has shadows
    newClass = newClass.replace(/transition-colors/g, ''); // btn has transition-all
    newClass = newClass.replace(/transition-all/g, ''); // btn has transition-all
    return newClass.replace(/\s+/g, ' '); // Clean up extra spaces
  });

  // Color mappings
  const colorMap = {
    // Emerald -> Primary
    'text-emerald-900': 'text-primary',
    'text-emerald-800': 'text-primary',
    'text-emerald-700': 'text-primary/90',
    'text-emerald-600': 'text-primary',
    'text-emerald-500': 'text-primary/80',
    'text-emerald-400': 'text-primary/70',
    'text-emerald-300': 'text-primary/60',
    'text-emerald-100': 'text-primary/30',
    'text-emerald-50': 'text-primary/20',

    'bg-emerald-900': 'bg-primary',
    'bg-emerald-800': 'bg-primary',
    'bg-emerald-700': 'bg-primary/90',
    'bg-emerald-600': 'bg-primary',
    'bg-emerald-500': 'bg-primary/80',
    'bg-emerald-400': 'bg-primary/70',
    'bg-emerald-300': 'bg-primary/60',
    'bg-emerald-100': 'bg-primary/10',
    'bg-emerald-50': 'bg-primary/5',

    'border-emerald-700': 'border-primary/90',
    'border-emerald-600': 'border-primary',
    'border-emerald-500': 'border-primary/80',
    'border-emerald-400': 'border-primary/70',
    'border-emerald-100': 'border-primary/20',
    'border-emerald-50': 'border-primary/10',

    'hover:text-emerald-700': 'hover:text-primary/90',
    'hover:text-emerald-600': 'hover:text-primary',
    'hover:text-emerald-500': 'hover:text-primary/80',

    'hover:bg-emerald-700': 'hover:bg-primary/90',
    'hover:bg-emerald-600': 'hover:bg-primary',
    'hover:bg-emerald-500': 'hover:bg-primary/80',
    
    'hover:border-emerald-100': 'hover:border-primary/20',
    
    'from-emerald-400': 'from-primary/80',
    'to-emerald-600': 'to-primary',
    'from-emerald-900': 'from-primary',
    'to-emerald-800': 'to-primary/90',

    'ring-emerald-100': 'ring-primary/20',
    'focus-within:border-emerald-500': 'focus-within:border-primary',
    'focus-within:ring-emerald-100': 'focus-within:ring-primary/20',
    'focus:border-emerald-500': 'focus:border-primary',
    'focus:ring-emerald-200': 'focus:ring-primary/20',

    // Slate -> Neutral / Foreground / Muted
    'text-slate-900': 'text-foreground',
    'text-slate-800': 'text-foreground',
    'text-slate-700': 'text-foreground/90',
    'text-slate-600': 'text-muted-foreground',
    'text-slate-500': 'text-muted-foreground',
    'text-slate-400': 'text-muted-foreground/80',
    
    'bg-slate-900': 'bg-foreground',
    'bg-slate-800': 'bg-foreground/90',
    'bg-slate-100': 'bg-muted',
    'bg-slate-50': 'bg-muted/50',

    'border-slate-800': 'border-border',
    'border-slate-700': 'border-border/80',
    'border-slate-200': 'border-border',
    'border-slate-100': 'border-border/50',
    'border-slate-50': 'border-border/30',

    'divide-slate-100': 'divide-border/50',
    'divide-slate-200': 'divide-border'
  };

  // Perform literal replacements
  for (const [key, value] of Object.entries(colorMap)) {
    // Regex to match exact class name without matching a longer suffix (e.g., text-emerald-600/50 won't be replaced if we use \b, but Tailwind slash opacity is a thing.
    // So let's use a dynamic regex. We also want to replace "text-emerald-600/50" appropriately if possible, but let's stick to simple replace first for literal matches.
    const regex = new RegExp(`\\b${key}\\b`, 'g');
    content = content.replace(regex, value);
  }

  // Handle lingering opacity like bg-primary/10/50 which is invalid
  // If we had bg-emerald-600/20 -> bg-primary/20 (we replaced bg-emerald-600 with bg-primary)
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    totalChanges++;
    console.log(`Updated: ${path.relative(path.join(__dirname, '..'), file)}`);
  }
});

console.log(`Finished updating colors in ${totalChanges} files.`);
