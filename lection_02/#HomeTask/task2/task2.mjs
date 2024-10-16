// server.mjs
import { createServer } from 'node:http';
import { createTextFile, appendTextToFile, deleteFile } from './functions.mjs'; // Исправьте путь к модулю в зависимости от структуры папок
import { access, constants } from 'node:fs';
import { readFile } from 'fs/promises';
const file = 'numbers.txt'; // Добавим переменную для файла

const server = createServer(async (req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello!\n');
    } else if (req.url.startsWith('/save_num/')) {
        const getNum = req.url.split('/save_num/')[1]; // Получаем номер из URL

        access(file, constants.F_OK, (err) => {
            if (err) {
                // Если файл не существует, создаем его
                createTextFile(file, `${getNum} \n`);
            } else {
                // Если файл существует, добавляем в него новый номер
                appendTextToFile(file, `${getNum} \n`);
            }
        });
    } else if (req.url.startsWith('/sum')) {
        try {
            // Читаем содержимое файла
            const data = await readFile(file, 'utf8');

            // Парсим содержимое файла, преобразуем строки в числа
            const numbers = data
                .trim() // Убираем возможные лишние пробелы и новые строки
                .split('\n') // Разделяем строки по новой строке
                .map(Number); // Преобразуем каждую строку в число

            // Суммируем числа
            const sum = numbers.reduce((acc, num) => acc + num, 0);

            // Отправляем сумму обратно клиенту
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`The sum of the numbers is: ${sum}\n`);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading or processing the file.\n');
            console.error(err);
        }
    } else if (req.url.startsWith('/remove')) {
        deleteFile(file)
    }
});

// Запуск сервера на порту 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
