/**
 * index (1) prints triangle parts
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-09-27
 */

import Triangle from './Triangle'
import promptSync from 'prompt-sync'

const prompt = promptSync()

// inputs
const side1 = prompt('Enter side a of triangle: ')
const side2 = prompt('Enter side b of triangle: ')
const side3 = prompt('Enter side c of triangle: ')

try {
  const length1 = parseFloat(side1)
  const length2 = parseFloat(side2)
  const length3 = parseFloat(side3)

  if (isNaN(length1) || isNaN(length2) || isNaN(length3)) {
    throw new Error('not a number')
  }
  if (length1 <= 0 || length2 <= 0 || length3 <= 0) {
    throw new Error('negative number')
  }
  if (
    length1 + length2 < length3 ||
    length1 + length3 < length2 ||
    length2 + length3 < length1
  ) {
    throw new Error('cannot form triangle')
  }
  const triangle = new Triangle(length1, length2, length3)
  triangle.status()
} catch (e) {
  console.log('Not an acceptable input')
}

console.log('\nDone.')
