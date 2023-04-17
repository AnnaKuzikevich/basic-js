const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let res = 0;
    let count = 1;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        res++;
        res = 1 + this.calculateDepth(item);
      }
      if (res > count) {
        count = res;
      }
    })

    return count;
  }
}

module.exports = {
  DepthCalculator
};
