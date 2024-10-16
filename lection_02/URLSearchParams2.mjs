const argsString = process.argv.slice(2).join('&')
const argsObj = new URLSearchParams(argsString)

setTimeout(() => {
    console.log(`Hello ${argsObj.get('--user')}`);
}, parseInt(argsObj.get('--delay')) * 1000)

// node URLSearchParams2.mjs --user=John --delay=3