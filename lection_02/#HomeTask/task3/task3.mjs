import { createServer } from 'node:http';
import { createTextFile, appendTextToFile, deleteFile } from './functions.mjs'; // Исправьте путь к модулю в зависимости от структуры папок
import { access, constants } from 'node:fs';
import { readFile } from 'fs/promises';
const file = 'numbers.txt'; // Добавим переменную для файла

const server = createServer(async (req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello. You can use: add, subtract, mult !\n');
    } else if (req.url.startsWith('/add/')) {
        const data = req.url.split('/add/')[1]; // Получаем часть URL после /add/

        // Убираем прочерки и преобразуем части в числа
        const numbers = data
            .split('-') // Разделяем по прочеркам
            .map(Number); // Преобразуем каждую часть в число

        // Суммируем числа
        const sum = numbers.reduce((acc, num) => acc + num, 0);

        // Отправляем сумму обратно клиенту
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`The sum of the numbers is: ${sum}\n`);
    } else if (req.url.startsWith('/subtract/')) {
        const data = req.url.split('/subtract/')[1]; // Получаем часть URL после /subtract/

        // Преобразование данных аналогично
        const numbers = data.split('-').map(Number);

        // Вычитаем числа
        const result = numbers.reduce((acc, num) => acc - num);

        // Отправляем результат обратно клиенту
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`The result of the subtraction is: ${result}\n`);
    } else if (req.url.startsWith('/mult/')) {
        const data = req.url.split('/mult/')[1]; // Получаем часть URL после /mult/

        // Преобразование данных аналогично
        const numbers = data.split('-').map(Number);

        // Умножаем числа
        const product = numbers.reduce((acc, num) => acc * num, 1);

        // Отправляем результат обратно клиенту
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`The product of the numbers is: ${product}\n`);
    }
});

// Запуск сервера на порту 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
