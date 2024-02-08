import { test, expect } from 'vitest'
import { compareBinaryTrees } from '../CompareBinaryTrees'
import { tree, tree2 } from './tree'

test('compareBinaryTrees', () => {
	expect(compareBinaryTrees(tree, tree)).toEqual(true)
	expect(compareBinaryTrees(tree, tree2)).toEqual(false)
})
