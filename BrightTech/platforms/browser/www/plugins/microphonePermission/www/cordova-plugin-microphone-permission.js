cordova.define("microphonePermission.MicrophonePermission", function(require, exports, module) { var exec = require('cordova/exec');

module.exports = microphonePermission: function(command, callback, error) {
    exec(callback, error, 'Microphone', 'recordPermission', []);
}
});
