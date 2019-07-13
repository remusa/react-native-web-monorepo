"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Card_1 = require("./Card");
var exerciseShortName = {
    Squat: 'SQ',
    Deadlift: 'DL',
    'Bench Press': 'BP',
    'Overhead Press': 'OHP',
    'Barbell Row': 'RW',
};
var HistoryCard = function (_a) {
    var header = _a.header, currentExercises = _a.currentExercises, onPress = _a.onPress;
    return (react_1.default.createElement(Card_1.Card, { onPress: onPress },
        react_1.default.createElement(react_native_1.Text, null, header),
        currentExercises.map(function (ce, index) {
            return (react_1.default.createElement(react_native_1.Text, { key: ce.exercise }, exerciseShortName[ce.exercise] + " " + ce.numSets + "x" + ce.reps + " " + ce.weight));
        })));
};
exports.default = HistoryCard;
