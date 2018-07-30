import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import style from '../../App.scss';
import 'font-awesome/css/font-awesome.min.css';
//18
const ControlTab = ({ currentYearMonthTabs , handleClick}) => {
  return (
    <div className={style.calendar_tabWrap}>
      <div className={style.calendars_tabWrap}>
        <div className={style.tabBox}>
          <div onClick={() => handleClick(-1)}>
            <i className="fas fa-caret-left" />
          </div>
          <span className={style.tab1} onClick={() => handleClick(-1)}>{currentYearMonthTabs[0].literal}</span>
          <span className={classnames(style.tab2, style.active)}>{currentYearMonthTabs[1].literal}</span>
          <span onClick={() => handleClick(1)} className={style.tab3}>{currentYearMonthTabs[2].literal}</span>
          <div onClick={() => handleClick(1)}>
            <i className="fas fa-caret-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

ControlTab.propTypes = {
  title: PropTypes.string,
};

export default ControlTab;
