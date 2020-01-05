const shell = require('shelljs')
const utils = require('./utils')

//每两秒点赞后滑动一条视频
setInterval(() => {
    // utils.praise()
    utils.swipeUp()
    shell.exec('adb shell input tap 900 600')
    shell.exec('adb shell input keyevent 4')
    shell.exec('adb shell input tap 540 2200')

}, 10 * 1000)

// shell.exec('adb shell wm size')
// shell.exec('adb shell input tap 900 600')
// shell.exec('adb shell input tap 540 1800')
// utils.swipeUp()
// shell.exec('adb shell input tap 900 600')
// shell.exec('adb shell input keyevent 4')
// shell.exec('adb shell input tap 540 2200')


