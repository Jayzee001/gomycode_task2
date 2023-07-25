// def InsertionSort(arr):
//     for i in range(1, len(arr)):  # Start from second element since the first element is already sorted
//         currentVal = arr[i]  # Pick the current element

//         j = i-1
//         while j >= 0 and currentVal < arr[j]:  # Compare it to the previous element(s) and shift them to the right if they are greater
//             arr[j+1] = arr[j]
//             j -= 1
//         arr[j+1] = currentVal  # Insert the current element into its proper position in the sorted sequence

//     return arr
