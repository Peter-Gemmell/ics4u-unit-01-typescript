/**
 * The program calculates the
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-09-13
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
// let logSize: number

const logString = prompt('What is the size of the log? (.25m, .5m, 1m): ')
const logSize = parseFloat(logString)
const weight = logSize * 20
const logAmount = 1100 / weight
console.log(` ${logAmount} ${logSize} logs would fill the truck`)

console.log('\nDone.')
