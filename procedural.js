//test onw

// Function to calculate dot product:
// Algorithm dot_product(v1, v2):
//     sum = 0
//     for i in range(len(v1)):
//         sum += v1[i] * v2[i]
//     return sum

// Algorithm to determine if vectors are orthogonal:
// Algorithm determine_orthogonal(n, vectors):
//     for i in range(n):
//         v1 = vectors[i][0]  // First vector
//         v2 = vectors[i][1]  // Second vector
//         result = dot_product(v1, v2)
//         if result == 0:
//             print("Vectors {} and {} are orthogonal".format(v1, v2))
//         else:
//             print("Vectors {} and {} are not orthogonal".format(v1, v2))

// // Example usage:
// vectors = [
//     [[1, 2], [3, 4]],
//     [[5, 6], [1, -1]],
//     [[0, 1], [1, 0]]
// ]

// determine_orthogonal(len(vectors), vectors)

//test 2