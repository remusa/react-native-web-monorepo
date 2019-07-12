import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    exercise: string
    repsAndWeight: string
    sets: string[]
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        padding: 8,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topRowText: {
        fontSize: 16,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    circle: {
        borderRadius: 100,
        backgroundColor: '#8fb299',
        padding: 15,
    },
    whiteText: {
        color: '#fff',
    },
    circleText: {
        fontSize: 16,
    },
    greyText: {
        color: 'grey',
    },
    fadedBackground: {
        backgroundColor: '#b2a1a1',
    },
})

export const WorkoutCard: React.FC<Props> = ({ exercise, repsAndWeight, sets }) => {
    return (
        <View style={styles.card}>
            <View style={styles.topRow}>
                <Text style={styles.topRowText}>{exercise}</Text>
                <Text>{repsAndWeight}</Text>
            </View>

            <View style={styles.bottomRow}>
                {sets.map((set, index) => {
                    if (set === 'x') {
                        return (
                            <View style={[styles.circle, styles.fadedBackground]} key={set + index}>
                                <Text style={[styles.circleText, styles.greyText]}>X</Text>
                            </View>
                        )
                    }

                    if (set === '') {
                        return (
                            <View style={[styles.circle, styles.fadedBackground]} key={set + index}>
                                {/* <Text style={styles.whiteText} /> */}
                            </View>
                        )
                    }

                    return (
                        <View style={styles.circle} key={set + index}>
                            <Text style={[styles.whiteText, styles.circleText]}>{set}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}
