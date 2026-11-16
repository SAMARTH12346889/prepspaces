(async () => {
  const { transformWithOxc } = await import('vite');
  const fs = require('fs');
  const path = require('path');
  const target = process.argv[2] || 'src/Componets/JavaHeapsSections.jsx';
  const filePath = path.resolve(__dirname, '..', target);
  const code = fs.readFileSync(filePath, 'utf8');
  try {
    const res = await transformWithOxc(code, path.basename(filePath), { lang: 'jsx' });
    console.log('OXC Transform Succeeded for ' + path.basename(filePath) + '! Transformed output size: ' + res.code.length);
  } catch (err) {
    console.error('OXC Transform Error in ' + path.basename(filePath) + ':', err);
    process.exit(1);
  }
})();
