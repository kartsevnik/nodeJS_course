import { writeFile, appendFile } from 'fs/promises'


// write file

async function createBinaryFile(filePath, binaryData) {
    try {
        await writeFile(filePath, binaryData)
        console.log(`Binary file ${filePath} created successfully`);
    } catch (err) {
        console.log(err);
    }
}

// Example: Create an empty image file
const emptyImageData = Buffer.from([])
createBinaryFile('my-img.png', emptyImageData)

// append to file

async function appendBinaryDataToFile(filePath, binaryData) {
    try {
        await appendFile(filePath, binaryData)
        console.log(`Binary data append to ${filePath} created successfully`);
    } catch (err) {
        console.log(err);
    }
}

const imageData = Buffer.from([0x01, 0x02, 0x03])
appendBinaryDataToFile('my-img.png', imageData)



// deleteFile('my-file.txt')