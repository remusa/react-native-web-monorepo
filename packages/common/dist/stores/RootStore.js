"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_persist_1 = require("mobx-persist");
var react_1 = require("react");
var react_native_1 = require("react-native");
var WorkoutStore_1 = require("./WorkoutStore");
var WorkoutTimerStore_1 = require("./WorkoutTimerStore");
var hydrate = mobx_persist_1.create({
    storage: react_native_1.AsyncStorage,
    // default: localStorage
    jsonify: true,
});
var RootStore = /** @class */ (function () {
    function RootStore() {
        var _this = this;
        this.workoutStore = new WorkoutStore_1.WorkoutStore(this);
        this.workoutTimerStore = new WorkoutTimerStore_1.WorkoutTimerStore();
        hydrate('workout', this.workoutStore).then(function () {
            if (_this.workoutTimerStore.isRunning) {
                _this.workoutTimerStore.measure();
            }
        });
        hydrate('workoutTimer', this.workoutTimerStore);
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = react_1.createContext(new RootStore());
