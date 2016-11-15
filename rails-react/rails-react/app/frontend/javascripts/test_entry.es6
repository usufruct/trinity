// Does this run? Let's find out.
var _ = require('lodash');
const count = 4;
_.times(count, function(i) {
  console.log('It does!', i);
});
