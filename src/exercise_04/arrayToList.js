export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  let list;
  let oldlist;
  if (array == undefined || null) {
    throw new Error('Creating list from undefined array');
  } else if (array.length == 0) {
    throw new Error('Creating list from empty array');
  } else if (array.length == 1) {
    list = { value: array[0], next: null };
  } else {
    list = { value: array[array.length - 1], next: null };
    for (let i = array.length - 2; i >= 0; i -= 1) {
      oldlist = list;
      list = { value: array[i], next: oldlist };
    }
  }
  return list;
}