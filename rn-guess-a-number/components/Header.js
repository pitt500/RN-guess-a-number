import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

// Custom Components
import TitleText from '../components/TitleText';

// Constants
import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={{
            ...styles.headerBase,
            ...Platform.select({
                ios: styles.headeriOS,
                android: styles.headerAndroid
            })
        }}>
            <TitleText style={styles.title}>{props.title}</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',

    },
    headeriOS: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        backgroundColor: 'green'
    },
    headerAndroid: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
        backgroundColor: Colors.primary,
    },
    title: {
        color: 'white'
    }
});

export default Header;