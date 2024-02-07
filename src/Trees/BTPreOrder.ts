const walk = (curr: BinaryNode<number> | null, path: number[]): number[] => {
	if (!curr) return path

	// recurse
	// pre
	path.push(curr.value)
	// recurse
	walk(curr.left, path)
	walk(curr.right, path)

	// post
	return path
}

export const btPreOrder = (head: BinaryNode<number>): number[] => {
	return walk(head, [])
}
