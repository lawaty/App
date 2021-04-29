cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-speechrecognition.SpeechRecognition",
      "file": "plugins/cordova-plugin-speechrecognition/www/speechRecognition.js",
      "pluginId": "cordova-plugin-speechrecognition",
      "merges": [
        "window.plugins.speechRecognition"
      ]
    },
    {
      "id": "cordova-plugin-whitelist.whitelist",
      "file": "plugins/cordova-plugin-whitelist/whitelist.js",
      "pluginId": "cordova-plugin-whitelist",
      "runs": true
    },
    {
      "id": "microphonePermission.MicrophonePermission",
      "file": "plugins/microphonePermission/www/cordova-plugin-microphone-permission.js",
      "pluginId": "microphonePermission",
      "clobbers": [
        "cordova.microphonePermission"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-speechrecognition": "1.1.2",
    "cordova-plugin-whitelist": "1.0.0",
    "microphonePermission": "0.0.2"
  };
});