const ftoc = function(x) {
  let fahrenheitTemp = x;
  let celciusTemp;
  celciusTemp = (fahrenheitTemp - 32) * 5/9;
  return Number ( celciusTemp.toFixed(1) );

};

const ctof = function(x) {
  let fahrenheitTemp;
  let celciusTemp = x;
  fahrenheitTemp = ( celciusTemp * (9/5) ) + 32;
  return Number( fahrenheitTemp.toFixed(1) );

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
