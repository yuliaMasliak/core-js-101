/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0 && num % 5 !== 0) {
    return 'Fizz';
  }
  if (num % 5 === 0 && num % 3 !== 0) {
    return 'Buzz';
  }
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let total = 1;
  let num = n;
  if (num < 0 || num > 12) {
    throw new RangeError();
  }
  while (num) {
    total *= num;
    num -= 1;
  }
  return total;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */

function getSumBetweenNumbers(n1, n2) {
  let total = 0;
  for (let i = n1; i <= n2; i += 1) {
    total += i;
  }
  return total;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  const max = Math.max(a, b, c);

  if (max === a && max >= (b + c)) {
    return false;
  }
  if (max === b && max >= (c + a)) {
    return false;
  }
  if (max === c && max >= (b + a)) {
    return false;
  }
  return true;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  if ((rect1.top + rect1.height) > rect2.top && (rect1.left + rect1.width) > rect2.left) {
    return true;
  }
  return false;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const radius = circle.radius * circle.radius;
  const pointX = point.x - circle.center.x;
  return pointX * pointX + (point.y - circle.center.y) * (point.y - circle.center.y) < radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const arr = str.split('');
  for (let item = 0; item < arr.length; item += 1) {
    if (arr.indexOf(arr[item]) === arr.lastIndexOf(arr[item])) {
      return arr[item];
    }
  }
  return null;
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const result = [];
  if (isStartIncluded) {
    result.push('[');
  } else {
    result.push('(');
  }
  if (a > b) {
    result.push(b);
    result.push(a);
  } else {
    result.push(a);
    result.push(b);
  }
  if (isEndIncluded) {
    result.push(']');
  } else {
    result.push(')');
  }
  let string = `${result}`;
  string = string.replace(',', '');
  return `${string.slice(0, 3)} ${string.slice(3, 4)}${string.slice(5, 6)}`;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  const arr = str.split('').reverse().join('');
  return arr;
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const arr = (`${num}`).split('').reverse().join('');
  return Number(arr);
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   4536468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const sumOfNumb = ccn
    .toString()
    .split('')
    .slice(0, -1)
    .reverse()
    .reduce((acc, item, index) => {
      const num = +item * (index % 2 ? 1 : 2);
      return acc + (num > 9 ? num - 9 : num);
    }, 0);
  const lastNumbControl = (10 - (sumOfNumb % 10)) % 10;
  const contrNumb = ccn.toString().split('').slice(-1);
  return +contrNumb === lastNumbControl;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const arr = num.toString().split('');
  let total = 0;
  arr.forEach((el) => { total += Number(el); });
  let total1 = 0;
  const arr1 = total.toString().split('');
  arr1.forEach((el) => { total1 += Number(el); });
  return total1;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  if (typeof str !== 'string' || str.length % 2 !== 0) return false;
  let i = 0;
  const arr = [];
  while (i < str.length) {
    if (str[i] === '{' || str[i] === '(' || str[i] === '[' || str[i] === '<') {
      arr.push(str[i]);
    } else if (str[i] === '}' && arr[arr.length - 1] === '{') {
      arr.pop();
    } else if (str[i] === ')' && arr[arr.length - 1] === '(') {
      arr.pop();
    } else if (str[i] === ']' && arr[arr.length - 1] === '[') {
      arr.pop();
    } else if (str[i] === '>' && arr[arr.length - 1] === '<') {
      arr.pop();
    } else {
      return false;
    }
    i += 1;
  }
  return arr.length === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const arr = [];
  const first = pathes[0].toString().split('');
  let index = 0;
  let length1 = first.length;
  while (length1 > 0) {
    for (let i = 0; i < pathes.length; i += 1) {
      arr.push(pathes[i][index]);
    } index += 1;
    length1 -= 1;
  }

  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== arr[i + pathes.length - 1]) {
      break;
    }
    if (arr[i] === arr[i + pathes.length - 1]) {
      result.push(arr[i]);
      i += 1;
    }
  }
  const { length } = result;
  for (let i = length - 1; i > 0; i -= 1) {
    if (result[i] !== '/') {
      result.splice(i, 1);
    } if (result[i] === '/') {
      break;
    }
  }
  return result.join('');
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(/* m1, m2 */) {
  throw new Error('Not implemented');
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(arr) {
  const p = arr;
  for (let i = 0; i < arr.length; i += 1) {
    for (let x = 0; x < arr[i].length; x += 1) {
      if (!arr[i][x]) {
        p[i][x] = 1;
      }
    }
  }
  if (p[0][0] === p[0][1] && p[0][0] === p[0][2] && p[0][0] !== 1) {
    return p[0][0];
  }
  if (p[0][0] === p[1][0] && p[0][0] === p[2][0] && p[0][0] !== 1) {
    return p[0][0];
  }
  if (p[0][0] === p[1][1] && p[0][0] === p[2][2] && p[0][0] !== 1) {
    return p[0][0];
  }
  if (p[0][1] === p[1][1] && p[0][1] === p[2][1] && p[0][1] !== 1) {
    return p[0][1];
  }
  if (p[0][2] === p[1][2] && p[0][2] === p[2][2] && p[0][2] !== 1) {
    return p[0][2];
  }
  if (p[0][2] === p[1][1] && p[0][2] === p[2][0] && p[0][2] !== 1) {
    return p[0][2];
  }
  if (p[1][0] === p[1][1] && p[1][0] === p[1][2] && p[1][0] !== 1) {
    return p[1][0];
  }
  if (p[2][0] === p[2][1] && p[2][1] === p[2][2] && p[2][0] !== 1) {
    return p[2][0];
  }
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
