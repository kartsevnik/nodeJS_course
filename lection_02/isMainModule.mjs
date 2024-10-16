import path from 'node:path'
import { fileURLToPath } from 'node:url'




const isMainModule =
    path.resolve(process.argv[1]) ===
    fileURLToPath(import.meta.url)

if (isMainModule) {
    console.log('Yes, it\'s main');
} else {
    console.log('No, it\'s not');
}
