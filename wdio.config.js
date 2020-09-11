const opts = {
  path: "/wd/hub",
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "9",
    deviceName: "Android Emulator",
    app: `${__dirname}/apks/nomeDoAplicativo.apk`,
    appPackage: "br.com.**",
    appActivity: "br.com.**.MainActivity",
    automationName: "UiAutomator2",
  },

  logLevel: 'silent'
};
module.exports = opts;