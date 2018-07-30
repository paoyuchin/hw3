import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const customSettings = {
  dataSource: './json/data1.json',
  initYearMonth: '201710',
  dataKeySetting: {
    guaranteed: 'guaranteed',
    status: 'status',
    available: 'availableVancancy',
    total: 'totalVacnacy',
    price: 'price',
  },
  onClickPrev($btnLeft, data, module) {
    console.log($btnLeft, data, module);
  },
  onClickNext($btnRight, data, module) {
    console.log($btnRight, data, module);
  },
  onClickDate($date, data) {
    console.log($date, data);
  },
};
ReactDOM.render(
  <App
    ref={app => {
      window.app = app;
    }}
    config={customSettings}
  />,
  document.getElementById('app'),
);
