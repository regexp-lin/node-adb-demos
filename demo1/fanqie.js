const utils = require('./utils')

//每两秒点赞后滑动一条视频
setInterval(() => {
    // utils.praise()
    utils.swipeLeft()
}, 5000)