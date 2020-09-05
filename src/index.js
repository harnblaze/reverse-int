module.exports = function reverse (n) {
    let res = n.toString().split('').reverse().join('');
    return parseInt(res);
}
