import React from 'react';
// import PropTypes from 'prop-types';
import DayNode from '../DayNode';
import style from '../../App.scss';

const Board = ({ currentNodes }) => {
  const dayNodes = currentNodes.map((value, i) => (
    <DayNode key={i} data={value} />
  ));
  return (
    <ul className={style.calendar_weeksWrap}>
      <span>星期日</span>
      <span>星期一</span>
      <span>星期二</span>
      <span>星期三</span>
      <span>星期四</span>
      <span>星期五</span>
      <span>星期六</span>
      <ul className={style.calendar_daysWrap}>{dayNodes}</ul>
    </ul>
  );
};

// Board.propTypes = {
//   title: PropTypes.string,
// };

export default Board;
