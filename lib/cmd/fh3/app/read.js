/* globals i18n */
var fhc = require("../../../fhc");

module.exports = {
  'desc' : i18n._('Reads an app under a project.'),
  'examples' : [{ cmd : 'fhc app read --project=1a --app=2b', desc : i18n._('Reads app with id 2b under project with id 1a')}],
  'demand' : ['project', 'app'],
  'alias' : {
    'project' : 'p',
    'app' : 'a',
    0 : 'project',
    1 : 'app'
  },
  'describe' : {
    'project' : i18n._('Unique 24 character GUID of the project your app lives in'),
    'app' : i18n._('Unique 24 character GUID of the app you want to read')
  },
  'url' : function(argv) {
    return "box/api/projects/" + argv.project + "/apps/" + fhc.appId(argv.app);
  },
  'method' : 'get'
};
