"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/*
{
    '2019-18-02': [
        {
            exercise: 'squat',
            value: 90
        },
        {
            exercise: 'benchpress',
            value: 100
        },
    ]
}
*/
var WorkoutStore = /** @class */ (function () {
    function WorkoutStore() {
    }
    return WorkoutStore;
}());
exports.WorkoutStoreContext = react_1.createContext(new WorkoutStore());
