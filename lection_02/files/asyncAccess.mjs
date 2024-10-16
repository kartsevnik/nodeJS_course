import { createServer } from 'node:http';
import { readFile } from 'fs/promises';
import fs from 'fs/promises';

const filePath = 'welcome.html';
// const filePath = 'welcome2.html';

async function checkFileAndStartServer() {
    try {
        // Проверяем доступность файла
        await fs.access(filePath);
        console.log("File exists, starting the server...");

        // Создаем сервер
        const server = createServer(async (req, res) => {
            try {
                const data = await readFile(filePath, 'utf8');
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            } catch (err) {
                console.error('Error reading file:', err);
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end("Error reading the file!");
            }
        });

        // Запускаем сервер
        server.listen(3000, '127.0.0.1', () => {
            console.log('Listening on 127.0.0.1:3000');
        });

    } catch (err) {
        console.error("File does not exist, server not started.");
    }
}

checkFileAndStartServer();

//node asyncAccess.mjs
