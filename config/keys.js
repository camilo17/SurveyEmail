// keys.js - figure out what set of credentials to return
if(process.NODE_ENV === 'production') {
    module.exports = require('./prod'); 
} else {
    module.exports = require('./dev');
}