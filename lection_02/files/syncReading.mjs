import { createServer } from 'node:http';
import { readFileSync } from 'fs';

const server = createServer((req, res) => {
    try {
        const data = readFileSync('welcome.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } catch (err) {
        console.error('Error reading file:', err);  // Выводим ошибку в консоль
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end("Error!");
    }
});

// Запуск сервера
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
