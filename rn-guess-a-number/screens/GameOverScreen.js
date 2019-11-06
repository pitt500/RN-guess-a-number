import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The game is over</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')} // <-- Only for local images
                    //source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Summit_of_the_Matterhorn.jpg'}} //<-- Only for web images
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the 
                    number <Text style={styles.highlight}>{props.userNumber}</Text>.
                </BodyText>
            </View>
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
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginBottom: 20,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOverScreen;