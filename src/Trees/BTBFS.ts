export const bfs = (head: BinaryNode<number>, needle: number): boolean => {
	const q = [head]

	while (q.length) {
		const curr = q.shift()

		if (!curr) continue // terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration

		if (curr?.value === needle) return true

		if (curr?.left) q.push(curr?.left)
		if (curr?.right) q.push(curr?.right)
	}

	return false
}
