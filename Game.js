import React from 'react';
import { View } from 'react-native';
import GuessMyNumber from './GuessMyNumber';
import GuessYourNumber from './GuessYourNumber';
import RPS from './RPS';
import Brained from './Brained';
import styles from './styles';

function selectGame(selector){
    switch(selector){
        case 0: return(<GuessMyNumber/>);
        case 1: return(<RPS/>);
        case 2: return(<Brained/>);
        case 4: return(<GuessYourNumber/>);
    }
}

function Game({route}) {
    const {id} = route.params;
    return (
        <View style={styles.container}>
            {selectGame(id)}
        </View>
    );
}

export default Game;