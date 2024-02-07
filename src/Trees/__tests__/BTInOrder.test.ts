import { test, expect } from 'vitest'
import { btInOrder } from '../BTInorder'
import { tree } from './tree'

test('btInorder', () => {
	expect(btInOrder(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100])
})
