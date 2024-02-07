const walk = (curr: BinaryNode<number> | null, path: number[]) => {
	if (!curr) return path

	walk(curr.left, path)
	walk(curr.right, path)
	path.push(curr.value)

	return path
}

export const btPostOrder = (head: BinaryNode<number>): number[] => {
	return walk(head, [])
}
