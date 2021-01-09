/**
 * A scaffolder wrapper to generate files into a new directory.
 * The new directory will have the same name provided for the files.
 *
 * Rather than running this directly, you should favor using an existing
 * yarn script or creating a new one.
 *
 * Required args:
 *    [0]: template
 *        The name of the template set to use. This needs to be a directory of one or more files
 *        in the top-level `scaffolder` directory.
 *    [1]: name
 *        The name of the files (and directory) to generate.
 *
 * Optional args:
 *    --path [valid path on disk]
 *        Defines an additional path to be APPENDED to your current-working directory.
 *        e.g. If you run the command from "/src" and provide "--path app/store", the
 *             output will be directed to "/src/app/store"
 */
const childProcess = require('child_process')
const path = require('path')

const chalk = require('chalk')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv
const [template, name] = argv._
const { path: pathArg = '' } = argv

const cwd = process.env.INIT_CWD // the user's current directory in terminal
const outPath = path.resolve(cwd, pathArg)
const command = `scaff create ${template} name=${name} --folder ${name}`

if (!template || !name) {
  console.log(chalk.red('\n=== ERROR! ==='))
  console.error(
    chalk.yellow(
      'Not enough args provided! Please check the command you tried to run\n',
    ),
  )
  return
}

console.log(chalk.green(`\nGenerating file(s) from template:`), template)
console.log(chalk.green(`CWD:`), cwd)
console.log(chalk.green(`Additional path:`), pathArg || '[none]')
console.log(chalk.green(`Target path:`), path.resolve(outPath, name))
console.log()

return childProcess.execSync(`cd ${outPath} && ${command}`)
