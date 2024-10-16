// получить параметры с помощью URLSearchParams

import { argv } from 'process'


const argList = argv.slice(2) // получаем массив параметров 
const argsString = argList.join('&') //ковертируем в одну строку добавляя & как разделитель
const args = new URLSearchParams(argsString) // создаем объект URLSearchParams с параметрами
// URLSearchParams {'--name' => 'John'. '--age' => '30}

// тоже самое тольео упрощенная запись
// const urlSearchString = process.argv.slice(2).join('&')
// const args2 = new urlSearchString(urlSearchString)

console.log('args values');
console.log('name = ' + args.get('--name'));
console.log('age = ' + args.get('--age'));

//command for verifica in console
// node URLSearchParams.mjs --name=John --age=30
