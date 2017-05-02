// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UIActions from '../actions/ui';
import Home from '../components/Home';

class HomePage extends Component {
  render() {
    return (
      <Home />
    );
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UIActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
