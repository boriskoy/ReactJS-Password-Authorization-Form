(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * Uses the react-transform babel plugin
 * to rewrite modules so that all react components are
 * exported.
 *
 * This allows us to access those components and test them.
 *
 * ex:
 *
 * // component.js
 *
 * var MyComponent = React.createClass({});
 *
 * // component-test.js
 *
 * var components = require('../component.js');
 *
 * console.log(components.__ReactComponents.MyComponent);
 *
 */

module.exports = function createExport(_ref) {
  var locals = _ref.locals;


  return function (ReactClass, componentId) {

    if (!locals[0].exports) {
      locals[0].exports = {};
    }

    if (!locals[0].exports.__ReactComponents) {
      locals[0].exports.__ReactComponents = [];
    }

    locals[0].exports.__ReactComponents.push(ReactClass);

    return ReactClass;
  };
};

},{}],2:[function(require,module,exports){
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');

var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _components = {
  _component: {}
};

var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
  filename: '/home/ccuser/workspace/learn-react-project-01/Contact.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
  };
}

var React = require('react');
var ReactDOM = require('react-dom');

var Contact = _wrapComponent('_component')(React.createClass({
  displayName: 'Contact',

  getInitialState: function getInitialState() {
    return {
      password: 'swordfish',
      authorized: false
    };
  },

  authorize: function authorize(e) {
    var password = e.target.querySelector('input[type="password"]').value;
    var auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  },

  render: function render() {
    var login = React.createElement(
      'form',
      { onSubmit: this.authorize, action: '#' },
      React.createElement('input', { type: 'password', placeholder: 'Password' }),
      React.createElement(
        'button',
        _defineProperty({ type: 'button', input: true }, 'type', 'submit'),
        'Submit'
      )
    );

    var contactInfo = React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        'client@example.com'
      ),
      React.createElement(
        'li',
        null,
        '555.555.5555'
      )
    );

    return React.createElement(
      'div',
      { id: 'authorization' },
      React.createElement(
        'h1',
        null,
        'Contact'
      ),
      this.state.authorized ? contactInfo : login
    );
  }
}));

ReactDOM.render(React.createElement(Contact, null), document.getElementById('app'));

},{"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined,"react-dom":undefined}]},{},[2]);
