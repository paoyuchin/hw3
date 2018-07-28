import React from 'react';
import PropTypes from 'prop-types';
import style from '../../App.scss';

const ControlTab = ({ title }) => (
  <div className="calendars_tabWrap">
    {title}
    <div className="tabBox">
      <div className="pre btn">
        <i className="fas fa-caret-left"> </i>
      </div>
      <span className="tab"> 2017 7月 </span>
      <span className="tab">2017 8月</span>
      <span className="tab">2017 9月</span>
      <div className="next btn">
        <i className="fas fa-caret-right"> </i>
      </div>
    </div>
  </div>
);

ControlTab.propTypes = {
  title: PropTypes.string,
};

export default ControlTab;
