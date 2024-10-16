export function makeResponse(url) {
    if (url === '/ok') return "All right!\n"
    else if (url === '/hello') return "Hello!\n"
    else return "Welcome to site!\n"
}