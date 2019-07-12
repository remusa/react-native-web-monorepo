import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootStoreContext } from '../stores/RootStore'
import { WorkoutCard } from '../ui/WorkoutCard'
import { WorkoutTimer } from '../ui/WorkoutTimer'

interface Props {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 10,
    },
})

export const CurrentWorkout: React.FC<Props> = observer(() => {
    const rootStore = useContext(RootStoreContext)

    useEffect(() => {
        return () => rootStore.workoutTimerStore.stopTimer()
    }, [])

    return (
        <View style={styles.container}>
            <Text>Current Workout page</Text>

            {rootStore.workoutStore.currentExercises.map(e => {
                return (
                    <WorkoutCard
                        onSetPress={setIndex => {
                            rootStore.workoutTimerStore.startTimer()

                            const v = e.sets[setIndex]

                            let newValue: string

                            if (v === '') {
                                newValue = `${e.reps}`
                            } else if (v === '0') {
                                rootStore.workoutTimerStore.stopTimer()
                                newValue = ''
                            } else {
                                newValue = `${parseInt(v) - 1}`
                            }

                            e.sets[setIndex] = newValue
                        }}
                        key={e.exercise}
                        exercise={e.exercise}
                        repsAndWeight={`${e.reps} ${e.weight}`}
                        sets={e.sets}
                    />
                )
            })}

            {rootStore.workoutTimerStore.isRunning && (
                <WorkoutTimer
                    percent={rootStore.workoutTimerStore.percent}
                    currenTime={rootStore.workoutTimerStore.display}
                    onXPress={() => rootStore.workoutTimerStore.stopTimer()}
                />
            )}
        </View>
    )
})
