import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

// Custom Components
import TitleText from '../components/TitleText';

// Constants
import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.title}>{props.title}</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Platform.OS === 'android' ?  Colors.primary : 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Platform.OS === 'ios' ? Colors.primary : 'transparent',
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
    },
    title: {
        color: 'white'
    }
});

export default Header;