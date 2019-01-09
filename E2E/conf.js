require('dotenv').load();

exports.config = {
  seleniumAddress: process.env.SERVER,
  specs: ['test.js'],

  jasmineNodeOpts: {
  defaultTimeoutInterval: 2500000
  },
  multiCapabilities: [{
	  'browserName':'chrome',
	  'appium-version':'1.10.0',
	  'platformName':'Android',
	  'platformVersion':'7.1.1',
	  'deviceName':'emulator-5554',
  }, {
    browserName: '',
    app: '[ABSOLUTE_PATH_TO_APK/ABSOLUTE_PATH_TO_APP]',
    bundleId: '[com..]',
    deviceName: 'Shahin',
    platformName: 'iOS',
    platformVersion: 'latest',
    udid: 'dc32055c2a076cad92aac3ef29ab3f30a79e09c4'
    }],
};
