import React from 'react';
import { View, Button, ImageBackground } from 'react-native';
import styles from './styles';

function Select({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./images/ImagenChida.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.buttons}>
                    <Button 
                        title="Guess My Number"
                        onPress={() => navigation.navigate("Game", {id: 0})}
                    />
                    <Button
                        title="Piedra, papel o tijeras"
                        onPress={() => navigation.navigate("Game", {id: 1})}
                    />
                    <Button
                        title="Brained"
                        onPress={() => navigation.navigate("Game", {id: 2})}
                    />
                </View>
            </ImageBackground>
        </View>
    );
}

export default Select;