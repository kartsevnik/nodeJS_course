// Задача 1. У консольний додаток передають через параметр пенсійний вік. Наприклад
import { argv } from 'process'
import readline from 'readline'

const argList = argv.slice(2) // получаем массив параметров 
const argsString = argList.join('&') //ковертируем в одну строку добавляя & как разделитель
const args = new URLSearchParams(argsString) // создаем объект URLSearchParams с параметрами
const getParam = Number(args.get('--pension')) 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(
    "How old are you?\n", 
    (answer) => {
        if (Number(answer) > getParam) {
            console.log("You are pensioner");
        } else if (Number(answer) < getParam) {
            console.log('You need to go are doing works');
        } else {
            console.log('Incorrect value');
        }
        rl.close()
    }
)

// node isPension.mjs --pension=65