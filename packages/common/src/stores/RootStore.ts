import { create } from 'mobx-persist'
import { createContext } from 'react'
import { AsyncStorage } from 'react-native'
import { WorkoutStore } from './WorkoutStore'
import { WorkoutTimerStore } from './WorkoutTimerStore'

const hydrate = create({
    storage: AsyncStorage, // or AsyncStorage in react-native.
    // default: localStorage
    jsonify: true, // if you use AsyncStorage, here shoud be true
    // default: true
})

export class RootStore {
    workoutStore = new WorkoutStore(this)
    workoutTimerStore = new WorkoutTimerStore()

    constructor() {
        hydrate('workout', this.workoutStore).then(() => {
            if (this.workoutTimerStore.isRunning) {
                this.workoutTimerStore.measure()
            }
        })
        hydrate('workoutTimer', this.workoutTimerStore)
    }
}

export const RootStoreContext = createContext(new RootStore())
