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
const logWeight = 20
const truckWeight = 1100
const logString = prompt('What is the size of the log? (.25m, .5m, 1m): ')
const logSize = parseFloat(logString)
const weight = logSize * logWeight
const logAmount = truckWeight / weight
console.log(` ${logAmount} ${logSize} logs would fill the truck`)

console.log('\nDone.')
