function moveNullsKeepOrder(arr) {
  const nonNullValues = [];
  const nullValues = [];

  for (const value of arr) {
    if (value !== null) {
      nonNullValues.push(value);
    } else {
      nullValues.push(value);
    }
  }

  return nonNullValues.concat(nullValues);
}

const detail_list = [12, 23, null, 34, null, 32, null, null];
const result = moveNullsKeepOrder(detail_list);
console.log("result:", result);
