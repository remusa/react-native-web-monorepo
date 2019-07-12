import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { RouteComponentProps } from 'react-router'
import { RootStoreContext } from '../stores/RootStore'

interface Props extends RouteComponentProps {}

export const WorkoutHistory: React.FC<Props> = observer(({ history }) => {
    const rootStore = useContext(RootStoreContext)

    return (
        <View>
            <Text>Workout History page</Text>

            <Button
                title="create workout"
                onPress={() => {
                    rootStore.workoutStore.currentExercises.push(
                        {
                            exercise: 'Squat',
                            numSets: 5,
                            reps: 5,
                            sets: ['', '', '', '', ''],
                            weight: 260,
                        },
                        {
                            exercise: 'Bench Press',
                            numSets: 5,
                            reps: 5,
                            sets: ['', '', '', '', ''],
                            weight: 200,
                        },
                        {
                            exercise: 'Deadlift',
                            numSets: 1,
                            reps: 5,
                            sets: ['', '', '', '', ''],
                            weight: 360,
                        }
                    )

                    history.push('/current-workout')
                }}
            />
        </View>
    )
})
