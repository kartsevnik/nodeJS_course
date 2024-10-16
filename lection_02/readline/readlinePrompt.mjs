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

//node readlinePrompt.mjs