"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var WorkoutCard_1 = require("../ui/WorkoutCard");
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        margin: 8,
    },
});
exports.CurrentWorkout = function () {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, null, "Current Workout page"),
        react_1.default.createElement(WorkoutCard_1.WorkoutCard, { exercise: "Squat", repsAndWeight: "5x5 260", sets: ['5', '5', '5', '', 'X'] })));
};
