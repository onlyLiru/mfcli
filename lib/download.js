/*
 * @Description: 
 * @Version: 
 * @Autor: ru.li
 * @Date: 2022-05-19 10:31:19
 * @LastEditors: ru.li
 * @LastEditTime: 2022-05-19 10:54:44
 */
const chalk = require("chalk");
const log = content => console.log(chalk.green(content))
const {promisify} = require("util")
module.exports = async function (repo, name) {
    const download = promisify(require('download-git-repo'))
    log(`${repo} 下载中...`);
    await download(repo, name)
    log('下载成功');
}