import React, {Component} from 'react';
import ReactDom from 'react-dom';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './app.less';

const MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
const WEEKDAYS_LONG = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
const WEEKDAYS_SHORT = ['日', '一', '二', '三', '四', '五', '六'];

Date.prototype.format = function(fmt) {
     var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt;
}

class MyAwesomeComponent extends Component {
  constructor(props) {
    super(props);
    this.daypicker = null; // daypicker 插件的ref
    this.DayPickerToday = null; // 当日label element
    this.DayPickerDay = null; // 所有日期的element

    this.currentDayIndex = 0; // 当日所在日期数组的index
    this.effectiveArrNums = 0; // 有效日期数组的个数

    this.drgmrq = "20171030"; // 当日购买日期
    this.zjkyrq = "20171102"; // 资金可用日期
    this.zjkqrq = "20171103"; // 资金可取日期
  }

  state = {
    selectedDay: new Date(),
  }

  componentDidMount() {
    this.DayPickerToday = document.querySelector('.DayPicker-Day--today');
    this.DayPickerDay = document.querySelectorAll('.DayPicker-Day');

    console.log('一个星期的第几天: ', this.getDay());
    console.log('当月总天数: ', this.getDays());
    console.log('年:', this.getCurrentYear(), '月:', this.getCurrentMonth(), '日:', this.getCurrentDay());

    this.currentDayIndex = this.transformLabelTime().indexOf(this.getCurrentDate());

    // 今日购买
    // this.drgm();

    // 资金可用(t+1)
    // this.zjky();

    // 资金可取
    // this.zjkq();

    console.log('有效日期数组的个数：', this.effectiveArrNums);

    // this.deviceArrByDate();
    // this.getContraDate('drgm', 0);
    this.handleDrKyKq();
  }

  // 日期分组函数
  deviceArrByDate = () => {
    var arr = [
      {sgrq: '20171024', sgsl: '100'},
      {sgrq: '20171024', sgsl: '101'},
      {sgrq: '20171025', sgsl: '101'}
    ];

    let obj = {};
    arr.forEach((item, index) => {
      let time = item.sgrq;
      if (!obj[time]) {
        let curDay = this.getWorkDay(
          new Date(
            time.slice(0, 4)+'/'+time.slice(4, 6)+'/'+time.slice(6, 8)
          ).getDay()
        );
        let array = [];
        array.push(item);
        obj[time] = {time: time, day: curDay, data: array};
      } else {
        let temp = obj[time];
        temp.data.push(item);
        obj[time] = temp;
      }
    });

    let result = [];
    for (let key in obj) {
      result.push(obj[key]);
    }

    console.log('分组后的数组: ', result);
    return result;
  }

  // 获取星期几
  getWorkDay = (day) => {
    let material = "";

    switch(day) {
      case 0:
        material = "星期天";
        break;
      case 1:
        material = "星期一";
        break;
      case 2:
        material = "星期二";
        break;
      case 3:
        material = "星期三";
        break;
      case 4:
        material = "星期四";
        break;
      case 5:
        material = "星期五";
        break;
      default:
        material = "星期六";
    }

    return material;
  }

  // 把每个日历里面的label时间转化为时间格式，例如“20171024”,最后以数组的形式输出
  transformLabelTime = () => {
    let result = [];
    this.effectiveArrNums = 0; // 每次进来重置
    document.querySelectorAll('.DayPicker-Day').forEach((item, index) => {
      let date = new Date(`${item.getAttribute("aria-label")}`);
      if (item.getAttribute("aria-label")) {
        let time = date.getFullYear().toString() + (date.getMonth() > 8 ? date.getMonth()+1 : ("0"+(date.getMonth+1))).toString() + (date.getDate() > 9 ?  date.getDate() :  ("0"+date.getDate())).toString();
        result.push(time);
        this.effectiveArrNums++;
      } else {
        let arr = result;
        arr.push(null);
        result = arr;
      }
    });

    return result;
  }

  // 改变label样式
  changeLabelStyle = (index, style) => {
    let DayPickerDay = document.querySelectorAll('.DayPicker-Day');
    if (index > -1 && index < this.effectiveArrNums) {
      let className = DayPickerDay[index].className;
      DayPickerDay[index].className = `${className} ${style}`
    }
  }

  // 获取当日购买日期、资金可用日期、资金可取日期
  getContraDate = (type, t) => {
    console.log(this.getCurrentDate());
    let overflag = false;
    let index = this.currentDayIndex + t < this.effectiveArrNums ? this.currentDayIndex + t : -1;
    console.log(index);
    if (type === "drgm" && index > -1) {
      this.drgmrq = this.getCurrentDate();
    }
    if (type === "zjky" && index > -1) {
      this.zjkyrq = this.getCurrentDate()+t;
    } else {
      overflag = true; // 超过当月的日期
      this.zjkyrq = this.getCurrentYear().toString+(this.getCurrentMonth()+1).toString()+t;
    }
    if (type === "zjkq") {
      this.zjkyrq = this.getCurrentDate()+t+1;
    } else {
        this.zjkyrq = overflag ? this.getCurrentYear().toString+(this.getCurrentMonth()+1).toString()+t+1
                               : this.getCurrentYear().toString+(this.getCurrentMonth()+1).toString()+t;
    }
  }

  // 获取改日期是在日期数组的位置
  getDateIndex = (date) => {
    let curDayIndex = this.transformLabelTime().indexOf(date);
    return curDayIndex < this.effectiveArrNums ? curDayIndex : -1;
  }

  // 当日购买
  drgm = () => {
    let index = this.getDateIndex(this.drgmrq);
    if (index === -1) {
      return;
    }
    let style = "active";
    this.changeLabelStyle(index, style);
  }

  // 资金可用
  zjky = () => {
    let index = this.getDateIndex(this.zjkyrq);
    if (index === -1) {
      return;
    }
    let style = "zjky";
    this.changeLabelStyle(index, style);
  }

  // 资金可取
  zjkq = () => {
    let index = this.getDateIndex(this.zjkqrq);
    if (index === -1) {
      return;
    }
    let style = "zjkq";
    this.changeLabelStyle(index, style);
  }

  // 当日购买、资金可用、资金可取放在同一个函数里面处理
  handleDrKyKq = (arr = ["20171031", "20171205", "20171206"]) => {
    arr.forEach((item, index) => {
      let curIndex = this.getDateIndex(item);
      if (curIndex === -1) {
        return;
      }

      let style = "";
      if (index === 0) {
        style = "active";
        this.changeLabelStyle(curIndex, style);
      } else if (index === 1) {
        style = "zjky";
        this.changeLabelStyle(curIndex, style);
      } else {
        style = "zjkq";
        this.changeLabelStyle(curIndex, style);
      }

    });
  }

  // 获取当天的年月日
  getCurrentDate = () => {
    return this.getCurrentYear().toString()+this.getCurrentMonth().toString()+this.getCurrentDay().toString();
  }

  getDay = () => {
    return new Date(this.DayPickerToday.getAttribute('aria-label')).getDay();
  }

  getDays = () => {
    let days = 0,
        dayPickerNums = this.DayPickerDay;
        dayPickerNums.forEach((item, index) => {
        if (item.innerHTML) {
            days++;
        }
    });
    return days;
  }

  getCurrentDay = () => {
    // return document.querySelector('.DayPicker-Day--today').innerHTML;
    return new Date(this.DayPickerToday.getAttribute('aria-label')).getDate();
  }

  getCurrentMonth = () => {
    return new Date(this.DayPickerToday.getAttribute('aria-label')).getMonth()+1;
  }

  getCurrentYear = () => {
    return new Date(this.DayPickerToday.getAttribute('aria-label')).getFullYear();
  }

  handleDayClick = day => {
    // this.setState({
    //   selectedDay: day,
    // });
  }

  MonthChange = (time) => {
    // this.drgm();
    // this.zjky();
    // this.zjkq();
    this.handleDrKyKq();
  }

  render() {

    return (
      <div>
        <DayPicker
            locale="it"
            months={MONTHS}
            weekdaysLong={WEEKDAYS_LONG}
            weekdaysShort={WEEKDAYS_SHORT}
            firstDayOfWeek={0}
            onDayClick={this.handleDayClick}
            selectedDays={this.state.selectedDay}
            ref={ev => this.daypicker = ev}
            onMonthChange={this.MonthChange}
        />

        <div className="jxsm">
            <p>今日购买，计息2天</p>
            <p>计息日期：2017年10月3日-2017年10月7日</p>
            <p>每天均以3.554的年利率计算收益</p>
            <p>资金可用：10月5日</p>
        </div>
      </div>
    );
  }
}

ReactDom.render(<MyAwesomeComponent />, document.getElementById('material-calendar'));
