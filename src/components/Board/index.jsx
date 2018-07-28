import React from 'react';
import PropTypes from 'prop-types';
import style from '../../App.scss';

const Board = ({ title }) => (
  <ul className="calendars_daysWrap">
    <li className={style['calendars_weeksWrap']}>星期日</li>
    <li>星期一</li>
    <li>星期二</li>
    <li>星期三</li>
    <li>星期四</li>
    <li>星期五</li>
    <li>星期六</li>
    <li className="calendars_days disabled"> </li>
    <li className="calendars_days hasData">
      <div className="date">1</div>
      <div className="status">候補</div>
      <div className="sell">可賣：0</div>
      <div className="group">團位：0</div>
      <div className="price">$4,999</div>
    </li>
  </ul>
);

Board.propTypes = {
  title: PropTypes.string,
};

export default Board;
