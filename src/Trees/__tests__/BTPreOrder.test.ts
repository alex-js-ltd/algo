import { test, expect } from 'vitest'
import { btPreOrder } from '../BTPreOrder'
import { tree } from './tree'

test('btPreOrder', () => {
	expect(btPreOrder(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100])
})
