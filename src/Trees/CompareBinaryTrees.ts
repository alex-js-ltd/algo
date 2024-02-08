export const compareBinaryTrees = (
	a: BinaryNode<number> | null,
	b: BinaryNode<number> | null,
): boolean => {
	if (a === null && b === null) return true

	if (a === null || b === null) return false

	if (a.value !== b.value) return false

	return (
		compareBinaryTrees(a.left, b.left) && compareBinaryTrees(a.right, b.right)
	)
}
