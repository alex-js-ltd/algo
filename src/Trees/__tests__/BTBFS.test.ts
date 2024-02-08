import { test, expect } from 'vitest'
import { bfs } from '../BTBFS'
import { tree } from './tree'

test('bfs', () => {
	expect(bfs(tree, 45)).toEqual(true)
	expect(bfs(tree, 7)).toEqual(true)
	expect(bfs(tree, 69)).toEqual(false)
})
