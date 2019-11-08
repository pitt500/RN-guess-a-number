import React, { useEffect, useState } from 'react';
import {
    View,
    Text, 
    StyleSheet,
    Image, 
    Dimensions,
    ScrollView
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>The game is over</TitleText>
                <View style={{
                    ...styles.imageContainer, ...{
                        width: availableDeviceHeight > 450 ? availableDeviceWidth * 0.7 : availableDeviceWidth * 0.4,
                        height: availableDeviceHeight > 450 ? availableDeviceWidth * 0.7 : availableDeviceWidth * 0.4,
                        borderRadius: availableDeviceHeight > 400 ? (availableDeviceWidth * 0.7) / 2 : (availableDeviceWidth * 0.4) / 2,
                        marginVertical: availableDeviceHeight / 30
                    }
                }}>
                    <Image
                        source={require('../assets/success.png')} // <-- Only for local images
                        //source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Summit_of_the_Matterhorn.jpg'}} //<-- Only for web images
                        style={styles.image}
                        resizeMode='cover'
                    />
                </View>
                <View style={{
                    ...styles.resultContainer, ...{
                        marginVertical: availableDeviceHeight / 60
                    }
                }}>
                    <BodyText style={{
                        ...styles.resultText, ...{
                            fontSize: availableDeviceHeight < 400 ? 16 : 20
                        }
                    }}>Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the
                    number <Text style={styles.highlight}>{props.userNumber}</Text>.
                </BodyText>
                </View>
                <MainButton onPress={props.onRestart} >
                    NEW GAME
            </MainButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden'
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
    },
    resultText: {
        textAlign: 'center',
    }
});

export default GameOverScreen;