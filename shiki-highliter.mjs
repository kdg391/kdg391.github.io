import { codeToHtml } from 'shiki'
import fs from 'fs'

async function highlight() {
    const code = fs.readFileSync(0, 'utf-8');
    const lang = process.argv[2] || 'plaintext';

    const html = await codeToHtml(code, {
        lang,
        theme: 'dark-plus' // Change this to any theme Shiki supports 
    });

    console.log(html);
}

highlight();