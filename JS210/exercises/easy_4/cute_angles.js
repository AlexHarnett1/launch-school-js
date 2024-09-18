const DEGREE = '\u00B0';

function dms(num) {
  let degrees = Math.floor(num);
  let remainingDec = num - degrees;
  let minutes = Math.floor(remainingDec * 60);
  let seconds = Math.floor((remainingDec * 3600) - (minutes * 60));

  return `${degrees}${DEGREE}${prependZero(minutes)}'${prependZero(seconds)}"`;
}

function prependZero(num) {
  if (num < 10) {
    return '0' + String(num);
  }
  return String(num);
}

// All test cases should return true
console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");