const chalk = require("chalk");
const {promisify} = require("util")
const figlet = promisify(require("figlet"))
const clear = require("clear")
const log = content => console.log(chalk.green(content))
const clone = require("./download") 
const open = require("open")
const spawn = async (...args) => {
    const {spawn} = require("child_process")
    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on("close", () => {
            resolve();
        })
    })
}
module.exports = async name => {
    clear()
    const data = await figlet('MF CLI')
    log(data)

    log(`🚀创建项目: ${name}`)
    await clone ("github:onlyLiru/react-lazy-render", name)
}