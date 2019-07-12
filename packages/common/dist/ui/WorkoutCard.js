"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
        padding: 8,
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
        marginTop: 16,
    },
    circle: {
        borderRadius: 100,
        backgroundColor: '#8fb299',
        padding: 15,
    },
    whiteText: {
        color: '#fff',
    },
    circleText: {
        fontSize: 16,
    },
    greyText: {
        color: 'grey',
    },
    fadedBackground: {
        backgroundColor: '#b2a1a1',
    },
});
exports.WorkoutCard = function (_a) {
    var exercise = _a.exercise, repsAndWeight = _a.repsAndWeight, sets = _a.sets;
    return (react_1.default.createElement(react_native_1.View, { style: styles.card },
        react_1.default.createElement(react_native_1.View, { style: styles.topRow },
            react_1.default.createElement(react_native_1.Text, { style: styles.topRowText }, exercise),
            react_1.default.createElement(react_native_1.Text, null, repsAndWeight)),
        react_1.default.createElement(react_native_1.View, { style: styles.bottomRow }, sets.map(function (set, index) {
            if (set === 'x') {
                return (react_1.default.createElement(react_native_1.View, { style: [styles.circle, styles.fadedBackground], key: set + index },
                    react_1.default.createElement(react_native_1.Text, { style: [styles.circleText, styles.greyText] }, "X")));
            }
            if (set === '') {
                return (react_1.default.createElement(react_native_1.View, { style: [styles.circle, styles.fadedBackground], key: set + index }));
            }
            return (react_1.default.createElement(react_native_1.View, { style: styles.circle, key: set + index },
                react_1.default.createElement(react_native_1.Text, { style: [styles.whiteText, styles.circleText] }, set)));
        }))));
};
