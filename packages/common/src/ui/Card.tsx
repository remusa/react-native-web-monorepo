import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

interface Props {
    onPress?: () => void
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
})

export const Card: React.FC<Props> = ({ children, onPress }) => {
    if (onPress) {
        return (
            <TouchableOpacity style={styles.card} onPress={onPress}>
                {children}
            </TouchableOpacity>
        )
    }

    return <View style={styles.card}>{children}</View>
}
