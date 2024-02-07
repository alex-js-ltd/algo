import { test, expect } from 'vitest'
import { btPostOrder } from '../BTPostOrder'
import { tree } from './tree'

test('btPostOrder', () => {
	expect(btPostOrder(tree)).toEqual([7, 5, 15, 10, 29, 45, 30, 100, 50, 20])
})
