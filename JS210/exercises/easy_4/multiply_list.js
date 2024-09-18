function multiplyList(arr1, arr2) {
  let multArr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    multArr.push(arr1[i] * arr2[i]);
  }
  console.log(multArr);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]