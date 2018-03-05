/**
 * desc: type 类型判断
 * time: 20180207
 */
const type = {
	isString: function(o) { // 是否为字符串
		return Object.prototype.toString.call(o).slice(8, -1) === 'String';
	},

	isNumber: function(o) { // 是否为数字
		return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
	},

	isObj: function(o) { // 是否为对象
		return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
	},

	isArray: function(o) { // 是否为数组
		return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
	},

	isDate: function(o) { // 是否为时间
		return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
	},

	isBoolean: function(o) { // 是否为boolean
		return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
	},

	isFunction: function(o) { // 是否为函数
		return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
	},

	isNull: function(o) { // 是否为null
		return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
	},

	isUndefined: function(o) { // 是否为Undefined
		return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
	},

	isFalse: function(o) { // 是否为false
		if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true;
			return false;
	},

	isTrue: function(o) { // 是否为true
		return !this.isFalse(o);
	},

	isIos: function() { // 当前设备是否是ios
		var u = navigator.userAgent;
		if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { // 安卓手机
			// return 'Android';
			return false;
		} else if (u.indexOf('iPhone') > -1) { // 苹果手机
			// return 'iPhone';
			return true;
		} else if (u.indexOf('iPad') > -1) { // iPad
			// return 'iPad';
			return false;
		} else if (u.indexOf('Windows Phone') > -1) { // winphone手机
			// return 'Windows Phone';
			return false;
		} else {
			return false;
		}
	},

	isPC: function() { // 当前设备是否是PC
		var u = navigator.userAgent;
		var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
		var flag = true;
		for(var v=0; v<Agents.length; v++) {
			if (u.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	},

	browserType: function() { // 当前浏览器类型
		var u = navigator.userAgent; // 取得浏览器的userAgent字符串
		var isOpera = u.indexOf("Opera") > -1; // 判断是否为Opera浏览器
		var isIE = u.indexOf("compatible") > -1 && u.indexOf("MSIE") > -1 && !isOpera; // 判断是否为IE浏览器
		var isEdge = u.indexOf("Edge") > -1; // 判断是否为IE的Edge浏览器
		var isFF = u.indexOf("Firefox") > -1; // 判断是否为Firefox浏览器
		var isSafari = u.indexOf("Safari") > -1 && u.indexOf("Chrome") === -1; // 判断是否为safari浏览器
		var isChrome = u.indexOf("Chrome") > -1 && u.indexOf("Safari") > -1; // 判断是否为chrome
		if (isIE) {
			var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
			reIE.test(u);
			var fIEVersion = parseFloat(RegExp["$1"]);
			if (fIEVersion === 7) return "IE7";
			else if (fIEVersion === 8) return "IE8";
			else if (fIEVersion === 9) return "IE9"; 
			else if (fIEVersion === 10) return "IE10"; 
			else if (fIEVersion === 11) return "IE11"; 
			else return "IE7以下"; // IE版本过低
		}

		if (isFF) return "FF"; // 火狐
		if (isOpera) return "Opera"; // Opera
		if (isEdge) return "Edge"; // Edge
		if (isSafari) return "Safari"; // Safari
		if (isChrome) return "Chrome"; // Chrome
	},

	checkStr: function(str, type) { // 日常信息匹配
		switch (type) {
			case 'phone': // 手机号码
				return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
			case 'tel': // 座机
				return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
			case 'card': // 身份证
				return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
			case 'pwd': // 密码以字母开头，长度在6-18之间，只能包含字母、数字和下划线
				return /^[a-zA-Z]\w{5,17}$/.test(str);
			case 'postal': // 邮政编码
				return /[1-9]\d{5}(?!\d)/.test(str);
			case 'QQ': // QQ号码
				return /^[1-9][0-9]{4-9}$/.test(str);
			case 'email': // 邮箱
				return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
			case 'money': // 金额(小数点2位)
				return /^\d*(?:\.\d{0,2})?$/.test(str);
			case 'URL': // 网址
				return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str);
	        case 'IP':      //IP
	            return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
	        case 'date':    //日期时间
	            return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
	        case 'number':  //数字
	            return /^[0-9]$/.test(str);
	        case 'english': //英文
	            return /^[a-zA-Z]+$/.test(str);
	        case 'chinese': //中文
	            return /^[\u4E00-\u9FA5]+$/.test(str);
	        case 'lower':   //小写
	            return /^[a-z]+$/.test(str);
	        case 'upper':   //大写
	            return /^[A-Z]+$/.test(str);
	        case 'HTML':    //HTML标记
	            return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
	        default:
	            return true;
		}
	},
};

module.exports = type;