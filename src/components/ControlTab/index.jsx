import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import style from '../../App.scss';
import 'font-awesome/css/font-awesome.min.css';

const ControlTab = ({ allYearMonth, currentYearMonth }) => (
  // console.log('allYearMonth',allYearMonth[0].literal);
  // console.log('currentYearMonth',currentYearMonth);
  // for (let i = 0; i < allYearMonth.length; i++) {
  //   if (allYearMonth[i].literal ==
  //   }
  // }
  <div className={style.calendar_tabWrap}>
    <div className={style.calendars_tabWrap}>
      <div className={style.tabBox}>
        <div>
          <i className="fas fa-caret-left" />
        </div>
        <span className={style.tab1}>2017 7月</span>
        <span className={classnames(style.tab2, style.active)}>2017 8月</span>
        <span className={style.tab3}>2017 9月</span>
        <div>
          <i className="fas fa-caret-right" />
        </div>
      </div>
    </div>
  </div>
);

ControlTab.propTypes = {
  title: PropTypes.string,
};

export default ControlTab;
