export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  let flatA;
  if (array == undefined || null) {
    throw new Error('Flatten undefined or null array');
  } else if (array.length == 0) {
    flatA = [];
  } else {
    flatA = [].concat.apply([],array);
  }
  return flatA;
}