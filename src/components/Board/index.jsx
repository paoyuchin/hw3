import React from 'react';
// import PropTypes from 'prop-types';
import DayNode from '../DayNode';
import style from '../../App.scss';

const Board = ({ currentNodes, currentNode, focused }) => {
  // console.log(focused)
  const dayNodes = currentNodes.map((value, i) => (
    <DayNode key={i} data={value} focused={focused} currentNode={currentNode} />
  ));
  return (
    <div>
      <ul className={style.calendar_weeksWrap}>
        <span>星期日</span>
        <span>星期一</span>
        <span>星期二</span>
        <span>星期三</span>
        <span>星期四</span>
        <span>星期五</span>
        <span>星期六</span>
      </ul>
      <ul className={style.calendar_daysWrap}>{dayNodes}</ul>
    </div>
  );
};

// Board.propTypes = {
//   title: PropTypes.string,
// };

export default Board;
