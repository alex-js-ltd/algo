export const bubbleSort = (array: number[]) => {
	let sorted = false
	while (!sorted) {
		sorted = true

		array.forEach((el, index, arr) => {
			if (el > arr[index + 1]) {
				arr[index] = arr[index + 1]
				arr[index + 1] = el
				sorted = false
			}
		})
	}

	return array
}
