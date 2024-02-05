export const bubbleSort = (array: number[]) => {
	let swapped = false
	do {
		swapped = false
		for (let [index, value] of array.entries()) {
			if (value > array[index + 1]) {
				const temp = value
				array[index] = array[index + 1]
				array[index + 1] = temp
				swapped = true
			}
		}
	} while (swapped)

	return array
}
