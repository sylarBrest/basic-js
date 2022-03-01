const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  let strRes = [],
      addRes = [],
      repT = (options.hasOwnProperty('repeatTimes')) ? options.repeatTimes : 1,
      sep = (options.hasOwnProperty('separator')) ? options.separator : '+',
      add = (options.hasOwnProperty('addition')) ? `${options.addition}` : '',
      addRepT = (options.hasOwnProperty('additionRepeatTimes')) ? options.additionRepeatTimes : 1,
      addSep = (options.hasOwnProperty('additionSeparator')) ? options.additionSeparator : '|';
  for (j = 1; j <= addRepT; j++) {
    addRes.push(add);
  }
  for (i = 1; i <= repT; i++) {
    strRes.push(str+addRes.join(`${addSep}`));
  }
  return strRes.join(`${sep}`);
}

module.exports = {
  repeater
};
