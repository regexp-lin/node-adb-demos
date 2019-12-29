const shell = require('shelljs')
const adb = require('adbkit')

//向上滑动 swipe x1, y1 -> x2, y2
// shell.exec('adb shell input swipe 300 1000 300 500')

//向下滑动 swipe x1, y1 -> x2, y2
// shell.exec('adb shell input swipe 300 500 300 1000')

//点击屏幕 
// shell.exec('adb shell input tap 500 500')

//获取分辨率
// shell.exec('adb shell wm size')  //1080 * 2340 

//点关注
shell.exec('adb shell input tap 1000 1170')

//点赞
shell.exec('adb shell input tap 1000 1270')
