// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

reverse = (str) => {
  debugger;
  return str.split("").reduce((a, c) => {
    return (a = c + a);
  }, "");
};

reverse("asdf");

module.exports = reverse;
