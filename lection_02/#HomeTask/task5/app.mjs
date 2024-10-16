import { createServer } from 'node:http';
import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';

const settingsFile = 'settings.json';
let historyFile = 'history.json';
let historyRoute = '/view-history';

// Читаем настройки при старте
async function loadSettings() {
    try {
        const settings = await readFile(settingsFile, 'utf8');
        const config = JSON.parse(settings);
        historyFile = config.historyFile || 'history.json';
        historyRoute = config.historyRoute || '/view-history';
    } catch (err) {
        console.error('Error loading settings:', err);
    }
}

// Обновляем историю посещений
async function updateHistory(route) {
    try {
        let history = {};

        // Читаем историю, если файл существует
        if (existsSync(historyFile)) {
            const data = await readFile(historyFile, 'utf8');
            history = JSON.parse(data);
        }

        // Увеличиваем счетчик посещений для текущего маршрута
        history[route] = (history[route] || 0) + 1;

        // Записываем обновленную историю обратно в файл
        await writeFile(historyFile, JSON.stringify(history, null, 2), 'utf8');
    } catch (err) {
        console.error('Error updating history:', err);
    }
}

// Возвращаем историю
async function getHistory() {
    try {
        if (existsSync(historyFile)) {
            const data = await readFile(historyFile, 'utf8');
            return JSON.parse(data);
        } else {
            return {};
        }
    } catch (err) {
        console.error('Error reading history:', err);
        return {};
    }
}

// Запускаем сервер
const server = createServer(async (req, res) => {
    // Обновляем историю для каждого посещенного маршрута
    await updateHistory(req.url);

    // Маршрут для просмотра истории (определен в settings.json)
    if (req.url === historyRoute) {
        const history = await getHistory();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(history, null, 2));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`You visited ${req.url}\n`);
    }
});

// Загружаем настройки перед запуском сервера
loadSettings().then(() => {
    server.listen(3000, '127.0.0.1', () => {
        console.log(`Server is listening on 127.0.0.1:3000`);
        console.log(`History can be viewed at ${historyRoute}`);
    });
});
