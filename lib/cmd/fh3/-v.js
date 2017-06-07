/* globals i18n */
var fhc = require('../../fhc');

module.exports = {
  'desc': i18n._('Version info about this tool'),
  'examples': [{
    cmd: 'fhc -v',
    desc: 'Show the version of fh-fhc installed in this environment'
  }],
  'demand': [],
  'alias': {},
  'describe': {},
  customCmd: function(params, cb) {
    var fhcVersionString = i18n._("FHC Version: ") + fhc._version + '\n';
    return cb(null, fhcVersionString);
  }
};
