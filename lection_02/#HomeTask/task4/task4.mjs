// server.mjs
import { createServer } from 'node:http';
import { readFile } from 'fs/promises';

const server = createServer(async (req, res) => {
    try {
        if (req.url == '/') {
            const data = await readFile('index.html', 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            return; // Завершаем выполнение после ответа
        } else if (req.url == '/music') {
            const data = await readFile('music.html', 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            return; // Завершаем выполнение после ответа
        } else if (req.url == '/coffee') {
            const data = await readFile('coffee.html', 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            return; // Завершаем выполнение после ответа
        } else {
            // Если маршрут не найден, возвращаем 404
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - Page not found</h1>');
            return;
        }
    } catch (err) {
        // Обработка ошибки (например, если файл не найден)
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 - Internal Server Error</h1>');
        console.error('Error:', err);
    }
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});

// run with `nodemon simpleServer.mjs`
