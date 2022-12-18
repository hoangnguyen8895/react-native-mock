/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';

const TouchableNativeFeedback = createClass({
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,

    background: PropTypes.object
  },
  statics: {
    SelectableBackground() {},
    SelectableBackgroundBorderless() {},
    Ripple(color, borderless) {}
  },
  render() {
    return null;
  }
});

module.exports = TouchableNativeFeedback;
