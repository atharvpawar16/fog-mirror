// Parse-checks every inline <script> block in index.html without executing it.
// Catches broken JavaScript syntax before it reaches the live page.
const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('index.html', 'utf8');
const scripts = [...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);

if (scripts.length === 0) {
  console.error('No inline <script> block found in index.html');
  process.exit(1);
}

scripts.forEach((code, i) => {
  new vm.Script(code, { filename: `index.html inline script ${i + 1}` });
});
console.log(`Inline JavaScript syntax OK (${scripts.length} block(s))`);
