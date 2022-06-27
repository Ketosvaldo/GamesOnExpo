import React from 'react';
import { View, Button, ImageBackground } from 'react-native';
import styles from './styles';

function Select({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./images/Numbers.png')} style={styles.imageBack}>
                <Button 
                    title="Guess My Number"
                    onPress={() => navigation.navigate("Game", {id: 0})}
                    style={styles.buttons}
                />
                <Button 
                    title="Guess Your Number"
                    onPress={() => navigation.navigate("Game", {id: 4})}
                    style={styles.buttons}
                />
            </ImageBackground>
            <ImageBackground source={require('./images/DBZ.jpg')} style={styles.imageBack}>
                <Button
                    title="Piedra, papel o tijeras"
                    onPress={() => navigation.navigate("Game", {id: 1})}
                    style = {styles.buttons}
                />
            </ImageBackground>
            <ImageBackground source={require('./images/Brain.jpg')} style={styles.imageBack}>
                <Button
                    title="Brained"
                    style={styles.buttons}
                    onPress={() => navigation.navigate("Game", {id: 2})}
                />
            </ImageBackground>
        </View>
    );
}

export default Select;