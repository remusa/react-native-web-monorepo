"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var RootStore_1 = require("../stores/RootStore");
var WorkoutCard_1 = require("../ui/WorkoutCard");
var WorkoutTimer_1 = require("../ui/WorkoutTimer");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    scrollContainer: {
        padding: 10,
        marginBottom: 50,
    },
});
exports.CurrentWorkout = mobx_react_lite_1.observer(function (_a) {
    var history = _a.history, _b = _a.match.params, day = _b.day, month = _b.month, year = _b.year;
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    react_1.useEffect(function () {
        return function () { return rootStore.workoutTimerStore.stopTimer(); };
    }, []);
    var isCurrentWorkout = !year && !month && !day;
    var dateKey = year + "-" + month + "-" + day;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.ScrollView, { keyboardShouldPersistTaps: "always", contentContainerStyle: styles.scrollContainer },
            (isCurrentWorkout
                ? rootStore.workoutStore.currentExercises
                : rootStore.workoutStore.history[dateKey]).map(function (e) {
                return (react_1.default.createElement(WorkoutCard_1.WorkoutCard, { onSetPress: function (setIndex) {
                        rootStore.workoutTimerStore.startTimer();
                        var v = e.sets[setIndex];
                        var newValue;
                        if (v === '') {
                            newValue = "" + e.reps;
                        }
                        else if (v === '0') {
                            rootStore.workoutTimerStore.stopTimer();
                            newValue = '';
                        }
                        else {
                            newValue = "" + (parseInt(v) - 1);
                        }
                        e.sets[setIndex] = newValue;
                    }, key: e.exercise, exercise: e.exercise, repsAndWeight: e.reps + " " + e.weight, sets: e.sets }));
            }),
            react_1.default.createElement(react_native_1.Button, { title: "SAVE", onPress: function () {
                    if (isCurrentWorkout) {
                        rootStore.workoutStore.history[dayjs_1.default().format('YYYY-MM-DD')] =
                            rootStore.workoutStore.currentExercises;
                        rootStore.workoutStore.currentExercises = [];
                    }
                    history.push('/');
                } })),
        rootStore.workoutTimerStore.isRunning && (react_1.default.createElement(WorkoutTimer_1.WorkoutTimer, { percent: rootStore.workoutTimerStore.percent, currenTime: rootStore.workoutTimerStore.display, onXPress: function () { return rootStore.workoutTimerStore.stopTimer(); } }))));
});
