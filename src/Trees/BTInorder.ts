// in order traversal
// go down our left hand side until we can no longer go left then visit the node then go down our right hand side

const walk = (curr: BinaryNode<number> | null, path: number[]): number[] => {
	if (!curr) return path

	// recurse
	// pre

	// recurse
	walk(curr.left, path)
	path.push(curr.value)
	walk(curr.right, path)

	// post
	return path
}

export const btInOrder = (head: BinaryNode<number>): number[] => {
	return walk(head, [])
}
