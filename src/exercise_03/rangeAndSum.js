export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let data = [];
  if (start < end) {
    for (let i = 0; i < (end - start); i += 1) {
      data.push(start + i);
    }
  } else {
    for (let i = 0; i < (start - end); i += 1) {
      data.push(start - i);
    }
  }
  return data;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  return sum;
}
