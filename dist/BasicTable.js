'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _setPrototypeOf = require('babel-runtime/core-js/object/set-prototype-of');

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _extends = _assign2.default || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

var _handsontable = require('handsontable');

var _handsontable2 = _interopRequireDefault(_handsontable);

require('handsontable/dist/handsontable.full.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/first */
/**
 * Created by ranyanchuan on 2018/3/11.
 */


var BasicTable = function (_React$Component) {
    _inherits(BasicTable, _React$Component);

    function BasicTable() {
        var _ref;

        var _temp, _this2, _ret;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _classCallCheck(this, BasicTable);

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = BasicTable.__proto__ || (0, _getPrototypeOf2.default)(BasicTable)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {}, _this2.hot = null, _this2.onHandsonTable = function (container, data) {
            _this2.hot = new _handsontable2.default(container, _extends({}, data));
        }, _this2.dealData = function () {
            var _this2$props = _this2.props,
                multiSelect = _this2$props.multiSelect,
                colHeaders = _this2$props.colHeaders,
                columns = _this2$props.columns,
                data = _this2$props.data,
                dropdownMenu = _this2$props.dropdownMenu,
                rowStyle = _this2$props.rowStyle;

            // 添加 多选框

            if (multiSelect) {
                var checkedHeader = '<input type=\'checkbox\' class=\'multiSelectChecker\' />';
                var className = 'htCenter htMiddle ';
                if (dropdownMenu) {
                    className += 'menuCheckbox';
                }
                var checkboxCell = {
                    data: 'checkbox_status',
                    type: 'checkbox',
                    className: className
                };
                colHeaders.unshift(checkedHeader);
                columns.unshift(checkboxCell);
            }

            // 添加行样式
            if (columns && columns.length > 0 && rowStyle) {
                var _loop = function _loop(column) {
                    var renderer = column.renderer,
                        data = column.data,
                        type = column.type;
                    // 添加样式

                    if (!renderer) {
                        column.renderer = function (instance, td, row, col, prop, value) {

                            switch (type) {
                                case 'date':
                                    _handsontable2.default.renderers.DateRenderer.apply(this, arguments);break;
                                case 'numeric':
                                    _handsontable2.default.renderers.NumericRenderer.apply(this, arguments);break;
                                case 'checkbox':
                                    _handsontable2.default.renderers.CheckboxRenderer.apply(this, arguments);break;
                                case 'time':
                                    _handsontable2.default.renderers.TimeRenderer.apply(this, arguments);break;
                                case 'base':
                                    _handsontable2.default.renderers.BaseRenderer.apply(this, arguments);break;
                                case 'autocomplete':
                                    _handsontable2.default.renderers.AutocompleteRenderer.apply(this, arguments);break;
                                case 'password':
                                    _handsontable2.default.renderers.PasswordRenderer.apply(this, arguments);break;
                                case 'dropdown':
                                    _handsontable2.default.renderers.DropdownRenderer.apply(this, arguments);break;
                                default:
                                    _handsontable2.default.renderers.TextRenderer.apply(this, arguments);
                            }

                            var styles = rowStyle(row + 1, col, prop);
                            if (styles) {
                                // 修改行样式
                                for (var style in styles) {
                                    td.style[style] = styles[style];
                                }
                            }
                        };
                    }
                };

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(columns), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var column = _step.value;

                        _loop(column);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }

            return _extends({}, _this2.props);
        }, _this2.getData = function () {
            var data = _this2.props.data;

            return data;
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(BasicTable, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            // 在父组件上绑定子组件方法
            this.props.onRef(this);

            var _this = this;

            var _props = this.props,
                id = _props.id,
                data = _props.data,
                colHeaders = _props.colHeaders,
                rowStyle = _props.rowStyle;


            var container = document.getElementById(id);
            // 数据处理满足 handsontable 格式
            var tempObj = this.dealData(this.props);
            this.onHandsonTable(container, tempObj);

            //  去掉 license
            var hotDisplay = document.getElementById('hot-display-license-info');
            var newDoc = document.createElement('span');
            hotDisplay.parentNode.replaceChild(newDoc, hotDisplay);

            // 添加 mousedown
            _handsontable2.default.dom.addEvent(container, 'mousedown', function (event) {
                if (event.target.nodeName === 'INPUT' && event.target.className == 'multiSelectChecker') {
                    event.stopPropagation();
                }
            });

            // 添加 mouseup
            _handsontable2.default.dom.addEvent(container, 'mouseup', function (event) {
                // 多选操作
                if (event.target.nodeName === 'INPUT' && event.target.className == 'multiSelectChecker') {
                    var checked = !event.target.checked;
                    // hot2.render();
                    event.stopPropagation();
                    if (checked) {
                        colHeaders[0] = '<input type=\'checkbox\' class=\'multiSelectChecker\' checked />';
                        data.map(function (item) {
                            return item['checkbox_status'] = true;
                        });
                    } else {
                        colHeaders[0] = '<input type=\'checkbox\' class=\'multiSelectChecker\' />';
                        data.map(function (item) {
                            return item['checkbox_status'] = false;
                        });
                    }
                    _this.hot.render();
                }
            });
        }

        // 将修改后的数据返回

    }, {
        key: 'render',
        value: function render() {
            var id = this.props.id;

            return _react2.default.createElement('div', { id: id });
        }
    }]);

    return BasicTable;
}(_react2.default.Component);

exports.default = BasicTable;