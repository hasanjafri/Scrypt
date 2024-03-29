'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

var _colors = require('../../node_modules/material-ui/styles/colors');

var _colorManipulator = require('../../node_modules/material-ui/utils/colorManipulator');

var _spacing = require('../../node_modules/material-ui/styles/spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule
        ? obj
        : {
            default: obj
        };
}

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
exports.default = {
    spacing: _spacing2.default,
    fontFamily: 'Roboto, sans-serif',
    borderRadius: 2,
    palette: {
        primary1Color: _colors.deepOrange500,
        primary2Color: _colors.deepOrange700,
        primary3Color: _colors.grey400,
        accent1Color: _colors.deepOrangeA200,
        accent2Color: _colors.grey100,
        accent3Color: _colors.grey500,
        textColor: _colors.darkBlack,
        secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
        alternateTextColor: _colors.white,
        canvasColor: _colors.white,
        borderColor: _colors.grey300,
        disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
        pickerHeaderColor: _colors.cyan500,
        clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
        shadowColor: _colors.fullBlack
    },
    appBar: {
        height: 50
    }
};