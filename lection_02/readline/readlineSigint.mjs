import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.setPrompt('What is your age? ')
rl.prompt()

rl.on('line', (age) => {
    console.log(`Age received by the user: ${age}`);
    rl.close()
})

rl.on('SIGINT', () => {
    rl.question('Exit (y or n)?', (input) => {
        if (input.match(/^y(es)?$/i)) {
            rl.pause()
        }
        if (input.match(/^n(o)?$/i)) {
            console.log('What is your age? ');
        }
    })
})

//node readlineSigint.mjs