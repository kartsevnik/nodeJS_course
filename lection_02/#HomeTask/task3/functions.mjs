import { writeFile, appendFile, unlink, rename } from 'fs/promises';
import { unlinkSync, renameSync } from 'fs';

//  ==================> write file
export async function createTextFile(filePath, content) {
    try {
        await writeFile(filePath, content, 'utf8');
        console.log(`File ${filePath} created successfully`);
    } catch (err) {
        console.error(err);
    }
}

//  ==================> append to file
export async function appendTextToFile(filePath, text) {
    try {
        await appendFile(filePath, text, 'utf8');
        console.log(`Text append to ${filePath} successfully`);
    } catch (err) {
        console.error(err);
    }
}

//  ==================>  delete file async
export async function deleteFile(filePath) {
    try {
        await unlink(filePath);
        console.log(`File ${filePath} deleted successfully`);
    } catch (err) {
        console.error(err);
    }
}

// ==================> delete file Sync
export async function deleteFileSync(filePath) {
    try {
        unlinkSync(filePath);
        console.log(`File ${filePath} deleted synchronously`);
    } catch (err) {
        console.error(err);
    }
}

// ==================> rename file
export async function renameFile(oldPath, newPath) {
    try {
        await rename(oldPath, newPath);
        console.log(`File renamed successfully`);
    } catch (err) {
        console.error(err);
    }
}

// ==================> rename file sync
export async function renameFileSync(oldPath, newPath) {
    try {
        renameSync(oldPath, newPath);
        console.log(`File renamed successfully`);
    } catch (err) {
        console.error(err);
    }
}
