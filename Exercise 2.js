function miniMaxSum(arr = [1, 2, 3, 4, 5]) {
  const sortedArray = arr.sort();

  let min_sum = 0;
  let max_sum = 0;
  // for (let index of arr) index < arr.length -1 ? min_sum += arr[index] :(index > 0 ? max_sum += arr[index] : null)

  for (let i = 0; i < arr.length; i++) {
    i < arr.length - 1 ? min_sum += arr[i] : null;
    i > 0 ? max_sum += arr[i] : null;
  }
  
  console.log(min_sum, max_sum);
}

miniMaxSum();
