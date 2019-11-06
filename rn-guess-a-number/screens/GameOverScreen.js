import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The game is over</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    // source={require('../assets/success.png')} // <-- Only for local images
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Summit_of_the_Matterhorn.jpg'}}
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
            <BodyText>Number of rounds: {props.rounds}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    // Always set width and height for images from web!
    image: {
        width: '100%',
        height: '100%',
    },
});

export default GameOverScreen;