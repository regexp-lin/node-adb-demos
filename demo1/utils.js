const shell = require('shelljs')

//向上滑动 swipe x1, y1 -> x2, y2
const swipeUp = function () {
  shell.exec('adb shell input swipe 300 1000 300 500')
}

//向下滑动 swipe x1, y1 -> x2, y2
const swipeDown = function() {
  shell.exec('adb shell input swipe 300 1000 300 500')
}

//向右滑动 swipe x1, y1 -> x2, y2
const swipeRight = function() {
  shell.exec('adb shell input swipe 300 500 900 500')
}

//向左滑动 swipe x1, y1 -> x2, y2
const swipeLeft = function() {
  shell.exec('adb shell input swipe 900 500 300 500')
}

//点击屏幕
const tap = function() {
  shell.exec('adb shell input tap 500 500')
}

//获取分辨率
const showPhysicalSize = function() {
  shell.exec('adb shell wm size')
}

//点关注
const focus = function() {
  shell.exec('adb shell input tap 1000 1170')
}

//点赞
const praise = function() {
  shell.exec('adb shell input tap 1000 1270')
}

module.exports = {
  swipeUp,
  swipeDown, 
  swipeRight, 
  swipeLeft,
  showPhysicalSize, 
  focus, 
  praise, 
  tap
}