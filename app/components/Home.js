// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import styles from './Home.scss';

export default class Home extends Component {
  handleDivClick = (event) => {
    const target = event.target.getAttribute('data-tid');
    this.props.toggleDiv(target);
  }

  render() {
    const classes = ['boxes'];
    if (this.props.isSelected) { classes.push('is-selected'); }

    return (
      <div onClick={(event) => this.handleDivClick(event)} className={styles.sixpanel} data-tid="sixpanel" role="presentation">
        <div className={classes} data-tid="one">1</div>
        <div className={styles.two} data-tid="two">2</div>
        <div className={styles.three} data-tid="three">3</div>
        <div className={styles.four} data-tid="four">4</div>
        <div className={styles.five} data-tid="five">5</div>
        <div className={styles.six} data-tid="six">6</div>
        {this.props.uiId}
        {this.props.divVisibility}
      </div>
    );
  }
}

Home.propTypes = {
  toggleDiv: PropTypes.func.isRequired,
  uiId: PropTypes.string.isRequired,
  divVisibility: PropTypes.bool.isRequired
};
