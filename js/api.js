const Axios = require('axios');
const LocalStorage = require('./localStorage');

/**
 * desc: 请求服务器
 * author: franki
 * time: 20190122
*/
const api = {
    Params: {
        // 服务器返回的状态码
        "code": [0, "ok"],
        "apiUrl":   LocalStorage.getLocalData('pshareUrl')['prod'] ?
                    LocalStorage.getLocalData('pshareUrl')['prod'] :
                    LocalStorage.getLocalData('pshareUrl')['dev']
    },

    call: function(apiId, type, request, responsehandler, options, errCallback) {
        this.callWeb(apiId, type, request, responsehandler, options, errCallback);
    },

    callWeb: function(apiId, type, request, responsehandler, options, errCallback) {
        // 登录之后才能去请求其他功能
        const ActiveUser = LocalStorage.getLocalData("ActiveUser");

        if (!ActiveUser) {
            return;
        }

        const url = this.Params["apiUrl"] + apiId;
        const reqOptions = options || {};
        const isDelay = reqOptions.isDelayLoading;
        const time = isDelay ? reqOptions.delayTime : 0;
        console.log("请求：", url);
        console.log("入参：", request);

        if (isDelay) {

        }
        setTimeout(function() {
            Axios({
              method: type,
              url: url,
              data: request
            })
            .then(function(response) {
              console.log("出参：", response);
              responsehandler(response.data);
            })
            .catch(function(err) {
                console.log('出错了：', err);
                if (reqOptions.isExecuteErrorBack) {
                    errCallback();
                }
            })
        }, time);
    }
};

module.exports = api;
