import { test, expect } from 'vitest'
import { dfsOnBST } from '../DFSonBST'
import { tree } from './tree'

test('dfsOnBST', () => {
	expect(dfsOnBST(tree, 45)).toEqual(true)
	expect(dfsOnBST(tree, 7)).toEqual(true)
	expect(dfsOnBST(tree, 69)).toEqual(false)
})
