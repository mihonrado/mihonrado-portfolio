const fs = require('fs');
const img = fs.readFileSync('public/images/logo2.png');
const base64 = img.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <image href="data:image/png;base64,${base64}" x="0" y="0" width="100" height="100" preserveAspectRatio="xMidYMid meet" />
</svg>`;
fs.writeFileSync('app/icon.svg', svg);
try { fs.unlinkSync('app/icon.png'); } catch (e) {}
