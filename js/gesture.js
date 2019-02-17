/**
 * desc: 手势动作
 * author: franki
 * time: 20190122
*/
const Gesture = {
    // 返回角度 dx 水平滑动的距离 dy 垂直滑动的距离
    GetSlideAngle: function(dx, dy) {
        return Math.atan2(dy, dx) * 180 / Math.PI;
    },

    // 根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
    GetSlideDirection: function(startX, startY, endX, endY) {
        let dy = startY - endY;
        let dx = endX - startX;
        let result = 0;

        //如果滑动距离太短
        if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
            return result;
        }

        let angle = this.GetSlideAngle(dx, dy);
        if(angle >= -45 && angle < 45) {
            result = 4;
        }else if (angle >= 45 && angle < 135) {
            result = 1;
        }else if (angle >= -135 && angle < -45) {
            result = 2;
        }else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        }

        return result;
    },

    //滑动处理 el 监听滑动的dom json 各个滑动方向触发的事件
    // json = {up: function(){}, down: function(){}, left: function(){}, right: function(){}, static: function(){} }
    handleSlide: function(el, json){
        let startX, startY;
        el.addEventListener('touchstart', ev => {
            startX = ev.touches[0].pageX;
            startY = ev.touches[0].pageY;
        }, false);
        el.addEventListener('touchend', ev => {
            let endX, endY;
            endX = ev.changedTouches[0].pageX;
            endY = ev.changedTouches[0].pageY;
            let direction = this.GetSlideDirection(startX, startY, endX, endY);

            switch(direction) {
                case 0:
                    console.log("没滑动");
                    if (json['static']) {
                        json['static']();
                    }
                    break;
                case 1:
                    console.log("向上");
                    if (json['up']) {
                        json['up']();
                    }
                    break;
                case 2:
                    console.log("向下");
                    if (json['down']) {
                        json['down']();
                    }
                    break;
                case 3:
                    console.log("向左");
                    if (json['left']) {
                        json['left']();
                    }
                    break;
                case 4:
                    console.log("向右");
                    if (json['right']) {
                        json['right']();
                    }
                    break;
                default:
                    break;
            }
        }, false);
    },

    // 判断是否是长按操作 el dom fn 长按后要执行的方法
    longPress: function(el, fn) {
        if (el instanceof Array) {
            el.forEach((item, index) => {
                let timeout = undefined;
                item.addEventListener('touchstart', ev => {
                    timeout = setTimeout(fn, 800);
                }, false);

                item.addEventListener('touchend', ev => {
                    clearTimeout(timeout);
                }, false);
            });
        } else {
            let timeout = undefined;
            el.addEventListener('touchstart', ev => {
                timeout = setTimeout(fn, 800);
            }, false);

            el.addEventListener('touchend', ev => {
                clearTimeout(timeout);
            }, false);
        }
    },

    // 控制原生返回button，单词点击返回不退出app
    listenAppCancelButton: function() {
        document.addEventListener('plusready', function() {
            var webview = plus.webview.currentWebview();
            plus.key.addEventListener('backbutton', function() {
                webview.canBack(function(e) {
                    if (e.canBack) {
                        webview.back();
                    } else {
                        webview.close();
                    }
                });
            }, false)
        }, false);
    }
}

module.exports = Gesture;
