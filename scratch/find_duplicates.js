const fs = require('fs');
const content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
const lines = content.split('\n');
const keys = {};
let found = false;

lines.forEach((line, i) => {
    // Look for "key": pattern at start of line
    const match = line.match(/^\s*"([a-zA-Z0-9.-]+)":/);
    if (match) {
        const key = match[1];
        if (keys[key]) {
            console.log(`Duplicate key: "${key}" at lines ${keys[key]} and ${i + 1}`);
            found = true;
        }
        keys[key] = i + 1;
    }
});

if (!found) {
    console.log('No duplicate keys found.');
}
