const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = [], dnsStats = {};
  domains = domains.map(el => el.split('.').reverse())
                   .forEach(el => {
                     let dns = '';
                     for (word of el) {
                       dns += `.${word}`;
                       res.push(dns);
                     }  
                   });
  for (dns of res)
    (dnsStats.hasOwnProperty(dns)) ? dnsStats[dns]++ : dnsStats[dns] = 1;
  return dnsStats;
}

module.exports = {
  getDNSStats
};
