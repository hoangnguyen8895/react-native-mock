/* eslint-disable no-unused-vars */
/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';

const TouchableOpacity = createClass({
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,

    /**
     * Determines what the opacity of the wrapped view should be when touch is
     * active. Defaults to 0.2.
     */
    activeOpacity: PropTypes.number
  },

  render() {
    return null;
  }
});

module.exports = TouchableOpacity;
