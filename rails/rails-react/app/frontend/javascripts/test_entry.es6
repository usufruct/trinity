import Hello from './hello.jsx';

// Does this run? Let's find out.
var _ = require('lodash');
const count = 4;
_.times(count, function(i) {
  console.log('It does!', i);
});

let foo = 'bar';
let zed = () => {
  console.log(`hello ${foo}`);
}

zed();
