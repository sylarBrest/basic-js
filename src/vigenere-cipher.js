const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type = true) {
    this.type = type;
  }
  encrypt(string, key) {
    if ((string === undefined) || (key === undefined)) throw new SyntaxError('Incorrect arguments!');
    string = string.toLowerCase();
    key = key.padEnd(string.length, key).toLowerCase();
    let res = '', k = 0;
    for (let i = 0; i < string.length; i++) {
      if ((string.charCodeAt(i) >= 97) && (string.charCodeAt(i) <= 122)) {
        res += String.fromCharCode(97 + (string.charCodeAt(i) + key.charCodeAt(k) - 2 * 97) % 26);
        k++;
      }
      else res += string[i];
    }
    if (!this.type) {
      res = res.split('').reverse().join('');
    }
    return res.toUpperCase();
  }
  decrypt(string, key) {
    if ((string === undefined) || (key === undefined)) throw new SyntaxError('Incorrect arguments!');
    string = string.toLowerCase();
    key = key.padEnd(string.length, key).toLowerCase();
    let res = '', k = 0;
    for (let i = 0; i < string.length; i++) {
      if ((string.charCodeAt(i) >= 97) && (string.charCodeAt(i) <= 122)) {
        res += String.fromCharCode(97 + (26 + string.charCodeAt(i) - key.charCodeAt(k)) % 26);
        k++;
      }
      else res += string[i];
    }
    if (!this.type) {
      res = res.split('').reverse().join('');
    }
    return res.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};

/*
const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));

const reverseMachine = new VigenereCipheringMachine(false);
console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
*/