import { test, expect } from 'vitest'
import { bubbleSort } from '../bubble-sort'

test('bubbleSort', () => {
	const arr = [9, 3, 7, 4, 69, 420, 42]

	expect(bubbleSort(arr)).toEqual([3, 4, 7, 9, 42, 69, 420])
})
