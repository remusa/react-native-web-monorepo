"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: 'column',
        padding: 10,
        marginBottom: 10,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topRowText: {
        fontSize: 16,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 14,
    },
    circle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#8FB299',
    },
    whiteText: {
        color: '#fff',
    },
    circleText: {
        fontSize: 16,
        margin: 'auto',
    },
    grayText: {
        color: '#655252',
    },
    fadedBackground: {
        backgroundColor: '#B2A1A1',
    },
});
exports.WorkoutCard = mobx_react_lite_1.observer(function (_a) {
    var exercise = _a.exercise, repsAndWeight = _a.repsAndWeight, sets = _a.sets, onSetPress = _a.onSetPress;
    return (react_1.default.createElement(react_native_1.View, { style: styles.card },
        react_1.default.createElement(react_native_1.View, { style: styles.topRow },
            react_1.default.createElement(react_native_1.Text, { style: styles.topRowText }, exercise),
            react_1.default.createElement(react_native_1.Text, null, repsAndWeight)),
        react_1.default.createElement(react_native_1.View, { style: styles.bottomRow }, sets.map(function (set, index) {
            if (set === 'x') {
                return (react_1.default.createElement(react_native_1.View, { style: [styles.circle, styles.fadedBackground], key: set + index },
                    react_1.default.createElement(react_native_1.Text, { style: [styles.grayText, styles.circleText] }, "X")));
            }
            if (set === '') {
                return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSetPress(index); }, style: [styles.circle, styles.fadedBackground], key: set + index }));
            }
            return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSetPress(index); }, style: styles.circle, key: set + index },
                react_1.default.createElement(react_native_1.Text, { style: [styles.whiteText, styles.circleText] }, set)));
        }))));
});
