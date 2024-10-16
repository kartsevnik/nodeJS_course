// Задача. При запуску передаються числа. Знайти їх суму

import { argv } from 'process'

const numsList = argv.slice(2).map(Number) // Конвертируем каждый элемент в число
const sumOfNums = numsList.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sumOfNums);
