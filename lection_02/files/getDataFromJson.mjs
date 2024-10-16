// Experimental method
// import JsonData from './data.json' assert{type: 'json'}

// console.log(JsonData.bye);
// console.log(JsonData.hello);
// console.log(JsonData.wordsCount);
// console.log(JsonData.wait);


import { readFile } from 'fs/promises';

async function loadJsonData() {
    try {
        // Чтение файла data.json
        const data = await readFile('./data.json', 'utf8');
        
        // Парсинг JSON
        const jsonData = JSON.parse(data);
        
        // Вывод данных из JSON
        console.log(jsonData.bye);
        console.log(jsonData.hello);
        console.log(jsonData.wordsCount);
        console.log(jsonData.wait);
    } catch (err) {
        console.error('Error reading or parsing JSON:', err);
    }
}

loadJsonData();
