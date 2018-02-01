/**
 * desc: 本地缓存
 * author: franki
 * time: 20190122
*/
const LocalStorage = {
    /*
     * 设置本地数据存储
    */
    setLocalData: (key, value) => {
        value = value instanceof String ? value : JSON.stringify(value);
        window.localStorage.setItem(key, value);
    },

    /*
     * 获取本地存储数据
    */
    getLocalData: (key) => {
        let result = window.localStorage.getItem(key);
        if (result) {
            // 如果返回的是数组或者是对象的时候，需要转化为对象
            if (result.indexOf("[") || result.indexOf("{")) {
                return JSON.parse(result);
            } else {
                return result;
            }
        }
        return null;
    },

    /*
     * 删除本地存储数据
    */
    removeLocalData: (key) => {
        window.localStorage.removeItem(key);
    },

    /*
     * 清空本地存储数据
    */
    clearLocalData: () => {
        window.localStorage.clear();
    }

};

module.exports = LocalStorage;

