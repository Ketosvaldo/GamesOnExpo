import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';

function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./images/ImagenChida.png')} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>
                    Game Chafa Collection +
                </Text>
                <Text style={styles.text}>
                En esta aplicación encontrarás una recopilación de juegos que a nadie divierte pero sirven para pasar la materia :D
                </Text>
            </ImageBackground>
        </View>
    );
}

export default Home;