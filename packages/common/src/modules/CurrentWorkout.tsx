import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WorkoutCard } from '../ui/WorkoutCard'

interface Props {}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        margin: 8,
    },
})

export const CurrentWorkout: React.FC<Props> = () => {
    return (
        <View style={styles.container}>
            <Text>Current Workout page</Text>

            <WorkoutCard exercise="Squat" repsAndWeight="5x5 260" sets={['5', '5', '5', '', 'X']} />
        </View>
    )
}
