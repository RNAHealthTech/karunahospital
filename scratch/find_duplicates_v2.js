const fs = require('fs');
const content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
const lines = content.split('\n');

let currentSection = '';
const sections = {
    'en': {},
    'hi': {}
};

lines.forEach((line, i) => {
    if (line.match(/^\s*en:\s*{/)) currentSection = 'en';
    if (line.match(/^\s*hi:\s*{/)) currentSection = 'hi';
    if (line.match(/^\s*},/)) {
        // This is a bit naive but might work if we have standard formatting
        // Actually, let's just use the line numbers to define sections
    }

    const match = line.match(/^\s*"([a-zA-Z0-9.-]+)":/);
    if (match && currentSection) {
        const key = match[1];
        if (sections[currentSection][key]) {
            console.log(`Duplicate key in ${currentSection}: "${key}" at lines ${sections[currentSection][key]} and ${i + 1}`);
        }
        sections[currentSection][key] = i + 1;
    }
});
