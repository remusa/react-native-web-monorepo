import React from 'react'
import { Text } from 'react-native'
import { CurrentExercise } from '../stores/WorkoutStore'
import { Card } from './Card'

interface Props {
    header: string
    currentExercises: CurrentExercise[]
    onPress: () => void
}

const exerciseShortName = {
    Squat: 'SQ',
    Deadlift: 'DL',
    'Bench Press': 'BP',
    'Overhead Press': 'OHP',
    'Barbell Row': 'RW',
}

const HistoryCard: React.FC<Props> = ({ header, currentExercises, onPress }) => {
    return (
        <Card onPress={onPress}>
            <Text>{header}</Text>

            {currentExercises.map((ce, index) => {
                return (
                    <Text key={ce.exercise}>
                        {`${exerciseShortName[ce.exercise as keyof typeof exerciseShortName]} ${
                            ce.numSets
                        }x${ce.reps} ${ce.weight}`}
                    </Text>
                )
            })}
        </Card>
    )
}

export default HistoryCard
