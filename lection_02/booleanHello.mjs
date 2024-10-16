import { argv } from 'process'

const argsList = argv.slice(2)
const argsString = argsList.join("&")
const args = new URLSearchParams(argsString)

if (args.get('--needHello') == 'yes') {
    console.log('Hello ' + args.get('--name') + '!');
} else {
    console.log('Hello maaan!');
}


// node booleanHello.mjs --name='Nikolas' --needHello='yes'
// node booleanHello.mjs --name='Nikolas' --needHello='no'