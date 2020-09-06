export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  let countC;
  if (prediction === undefined) {
    prediction = {};
    if (string == undefined || null) {
      countC = 0;
    } else {
      countC = string.length;
    }
  } else {
    let reg = /[prediction]+/g;
    countC = string.match(reg).length;
  } 
  return countC;
}
