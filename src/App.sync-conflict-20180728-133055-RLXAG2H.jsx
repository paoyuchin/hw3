import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import moment from 'moment/src/moment';
import ControlTab from './components/ControlTab';
import Board from './components/Board';
import style from './App.scss';

const ModuleDefaults = {
  dataSource: [
    // 資料來源的輸入接口 [ array | string ] 如果是 string的話，請輸入網址
    {
      guaranteed: true, // {boolean}
      date: '2016/12/15', // {string} YYYY/MM/DD
      price: '234567', // {string|number} XXXXXX | 近期上架
      availableVancancy: 0, // {number}
      totalVacnacy: 20, // {number}
      status: '報名', // {string} 報名(#24a07c) | 後補(#24a07c) | 預定(#24a07c) | 截止(#ff7800) | 額滿(#ff7800) | 關團(#ff7800)
    },
  ],
  // 輸入一開始要在哪一個月份 [string] YYYYMM
  // 若輸入的年月沒有資料，就要找相近的年月
  // 若前一個月後一個月都有資料，就顯示資料比數比較多的那一個月
  initYearMonth: '201807',
  // 設定各資料的key
  dataKeySetting: {
    // 保證出團
    guaranteed: 'guaranteed',
    // 狀態
    status: 'status',
    // 可賣團位
    available: 'availableVancancy',
    // 團位
    total: 'totalVacnacy',
    // 價格
    price: 'price',
  },
  // 點上一個月時
  // @param $btn {$object} jquery 物件
  // @param $data {array} 上一個月的資料
  // @param module {object} 此模組實例物件
  onClickPrev($btn, data, module) {
    console.log($btn, data, module);
  },
  // 點下一個月時
  onClickNext($btn, data, module) {
    console.log($btn, data, module);
  },
  // 點日期時
  onClickDate($date, data) {
    console.log($date, data);
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.option = ModuleDefaults;
    this.state = {
      error: null,
      isLoaded: false,
      data: [], // 1
    };
    this.data = {};
  }

  componentDidMount() {
    fetch(this.option.dataSource)
      .then(res => res.json()) // 與fetch回傳的是xml格式 所以要轉成json檔
      .then(
        data => {
          for (let i = 0; i < data.length; i++) {
            this.addEvent(data[i]); // 讓data的每一個放進當作參數，執行addEvent
          }
          // 再轉成json檔
          this.setState({
            isLoaded: true,
            data,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  addEvent(event) {
    // 按照 年月日，放資料，一個年月日一筆, 我們希望,資料結構可以 選某年 就得到該年的所有月,一路到最裡面都是物件,this.data就是最上層的物件,
    // this.data[year] 就是看year是多少, 取該year的全部month, 會再取到一個物件
    // 每一筆的data[i]被傳進來後，是物件後 也就是每一筆的資料，去分析，用moment的物件去整理資料
    const date = moment(event.date);
    const year = date.get('year');
    const month = date.get('month');
    const day = date.get('date');
    const dataKeySetting = this.option.dataKeySetting;
    // 設定key value，因為不同資料的keu value都不一樣
    // 以下，中括號是放變數的地方
    // 每一筆key的guaranteed = this.option.dataKeySetting的guaranteed的value 也就是"key"
    event.guaranteed = event[dataKeySetting.guaranteed];
    event.status = event[dataKeySetting.status];
    event.available = event[dataKeySetting.available];
    event.total = event[dataKeySetting.total];
    event.price = event[dataKeySetting.price];
    if (!this.data[year]) {
      // 還沒加資料前， this.data[year]是 undefined
      this.data[year] = {};
    }
    if (!this.data[year][month]) {
      this.data[year][month] = {};
    }
    if (!this.data[year][month][day]) {
      this.data[year][month][day] = event;
      // console.log(event)
      // console.log(this.data[year][month][day]);
      // debugger;
    } else {
      // already has event
      // 去比對資料當有資料相同一筆的時後
      if (
        // 保證出團
        this.data[year][month][day].guaranteed == false &&
        event.guaranteed == true
        // 為什麼這邊會是指舊的？我不了解
      ) {
        this.data[year][month][day] = event;
      } else if (
        // 報名
        this.data[year][month][day].guaranteed == true &&
        event.guaranteed == true &&
        this.data[year][month][day].status != '報名' &&
        event.status == '報名'
        // 報名 後補 預定 截止
      ) {
        this.data[year][month][day] = event;
      } else if (
        // 價格便宜
        this.data[year][month][day].status == '報名' &&
        event.status == '報名' &&
        this.data[year][month][day].price < event.price
      ) {
        this.data[year][month][day] = event;
      } // 還是本來的比較厲害
    }
  }

  render() {
    const { shit } = this.state;
    return (
      <div>
        <ControlTab title={shit} />
        <Board />
      </div>
    );
  }
}
// App.js this.state 全部的資料 Obj (this.data)
// setState當月的資料
export default hot(module)(App);
