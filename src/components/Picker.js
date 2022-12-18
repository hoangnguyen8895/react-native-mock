/* eslint-disable no-unused-vars */
import React from 'react';
import createMockComponent from './createMockComponent';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';

const Picker = createClass({
  propTypes: {
    children: PropTypes.node
  },
  statics: {
    Item: createMockComponent('Picker.Item')
  },
  render() {
    return null;
  }
});

module.exports = Picker;
