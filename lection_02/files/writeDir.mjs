
import { mkdir, access, readdir } from 'fs/promises'
import fs from 'fs'

// ==================> Create Directory

async function createDirectory(dirPath) {
    try {
        await mkdir(dirPath)
        console.log(`Directory ${dirPath} created successfully`);
    } catch (err) {
        console.error(err);
    }
}

// createDirectory('my-folder')

// ==================> Rename Directory

// fs.rename('/my-folder', '/new-my-folder', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(`Directory renamed successfully`);
//     }
// })

// ==================> Delete Directory

// const dirPath = './new-my-folder/'

// fs.rmdir(dirPath, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(`Directory deleted successfully`);
//     }
// })

// ==================> Access Directory

// const dirPath = './my-folder/'

// async function checkDirectoryExists(dirPath) {
//     try {
//         await access(dirPath)
//         console.log(`Directory ${dirPath} Exists`);
//     } catch (err) {
//         console.log(`Directory ${dirPath} does not exists`);
//         console.error(err);
//     }
// }

// checkDirectoryExists(dirPath)

// ==================> list files and subdirectories in Directory

const dirPath = './my-folder/'

async function listFilesAndSubDirectories(dirPath) {
    try {
        const items = await readdir(dirPath)
        console.log(`Directory ${dirPath} contents`, items);
    } catch (err) {
        console.error(err);
    }
}

listFilesAndSubDirectories(dirPath)