const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let num = 1;
  let res = '';
  for(i = 0; i < str.length; i++){
    if(str[i] === str[i + 1]){
    num++;
  }else{
    res += num >= 2 ? num + str[i] : str[i];
    num = 1;
   }
  }
  return res
}

module.exports = {
  encodeLine
};
