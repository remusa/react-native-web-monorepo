"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 50,
        width: '100%',
        backgroundColor: '#486550',
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        flex: 1,
    },
    x: {
        color: '#b2a1a1',
        fontSize: 30,
    },
    timeText: {
        color: '#fff',
        fontSize: 18,
    },
    line: {
        height: 3,
        backgroundColor: '#b2a1a1',
    },
});
exports.WorkoutTimer = function (_a) {
    var onXPress = _a.onXPress, currenTime = _a.currenTime, percent = _a.percent;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: [styles.line, { width: percent }] }),
        react_1.default.createElement(react_native_1.View, { style: styles.row },
            react_1.default.createElement(react_native_1.Text, { style: styles.timeText }, currenTime),
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onXPress },
                react_1.default.createElement(react_native_1.Text, { style: styles.x }, "X")))));
};
