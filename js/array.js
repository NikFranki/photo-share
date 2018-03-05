/**
 * desc: 时间处理对象
 * time: 20180209
 */
const array = {
    /**
     * @description 判断一个元素是否在数组中
     * @time: 20180208
     * @param {arr} 数组
     * @param {val} 具体值
     * @return {boolean}
     */
    contains: function(arr, val) {
        return arr.indexOf(val) !== -1 ? true : false;
    },

    /**
     * desc: each 遍历
     * time: 20180208
     * @param {arr} 数组
     * @param {fn} 回调函数
     * @return {undefined}
     */
    each: function(arr, fn) {
        fn = fn || Function;
        var a = [];
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i=0; i<arr.length; i++) {
            var res = fn.apply(arr, [arr[i], i].concat(args));
            if (res != null) a.push(res);
        }
    },

    /**
     * desc: map
     * time: 20180208
     * @param {arr} 数组
     * @param {fn} 回调函数
     * @param {thisObj} this指向
     * @return {Array}
     */
    map: function(arr, fn, thisObj) {
        var scope = thisObj || window;
        var a = [];
        for (var i=0, j=arr.length; i<j; ++i) {
            var res = fn.call(scope, arr[i], i, this);
            if (res !== null) a.push(res);
        }
        return a;
    },

    /**
     * desc: sort 排序
     * time: 20180208
     * @param {arr} 数组
     * @param {type} 1 从小到大 2 从大到小 3 随机
     * @return {Array}
     */
    sort: function(arr, type = 1) {
        return arr.sort(function(a, b) {
            switch(type) {
                case 1:
                    return a - b;
                case 2:
                    return b - a;
                default:
                    return arr;
            }
        });
    },

    /**
     * desc: unique 去重
     * time: 20180208
     * @param {arr} 数组
     * @return {Array}
     */
    unique: function(arr) {
        if (Array.hasOwnProperty('from')) {
            return Array.from(new Set(arr));
        } else {
            var n = {}, r = [];
            for (var i=0, len=arr.length; i<len; i++) {
                if (!n[arr[i]]) {
                    n[arr[i]] = true;
                    r.push(arr[i]);
                }
            }
            return r;
        }
    },

    /**
     * desc: 两个集合的并集
     * time: 20180208
     * @param {a} 数组
     * @param {b} 数组
     * @return {Array}
     */
    union: function(a, b) {
        var newArr = a.concat(b);
        return this.unique(newArr);
    },

    /**
     * desc: 两个集合的交集
     * time: 20180208
     * @param {a} 数组
     * @param {b} 数组
     * @return {Array}
     */
    intersect: function(a, b) {
        var _this = this;
        a = this.unique(a);
        return this.map(a, function(o) {
            return _this.contains(b, o) ? o : null;
        });
    },

    /**
     * desc: 删除其中一个元素
     * time: 20180208
     * @param {a} 数组
     * @param {ele} 要删除的元素
     * @return {Array}
     */
    remove: function(arr, ele) {
        var index = arr.indexOf(ele);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    },

    /**
     * desc: 将类数组转化为数组
     * time: 20180208
     * @param {ary} object
     * @return {Array}
     */
    formArray: function(ary) {
        var arr = [];
        if (Array.isArray(ary)) {
            arr = ary;
        } else {
            arr = Array.prototype.slice.call(ary);
        }
        return arr;
    },

    /**
     * desc: 最大值
     * time: 20180208
     * @param {arr} 数组
     * @return {Number}
     */
    max: function(arr) {
        return Math.max.apply(null, arr);
    },

    /**
     * desc: 最大值
     * time: 20180208
     * @param {arr} 数组
     * @return {Number}
     */
    min: function(arr) {
        return Math.min.apply(null, arr);
    },

    /**
     * desc: 求和
     * time: 20180208
     * @param {arr} 数组
     * @return {Number}
     */
    sum: function(arr) {
        return arr.reduce(function(pre, cur) {
            return pre + cur;
        });
    },

    /**
     * desc: 平均值
     * time: 20180208
     * @param {arr} 数组
     * @return {Number}
     */
    average: function(arr) {
        return this.sum(arr) / arr.length;
    },
};

module.exports = array;
