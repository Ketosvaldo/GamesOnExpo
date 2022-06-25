import React from 'react';
import { View } from 'react-native';
import GuessMyNumber from './GuessMyNumber';
import RPS from './RPS';
import Brained from './Brained';

function selectGame(selector){
    switch(selector){
        case 0: return(<GuessMyNumber/>);
        case 1: return(<RPS/>);
        case 2: return(<Brained/>);
    }
}

function Game({route}) {
    const {id} = route.params;
    return (
        <View>
            {selectGame(id)}
        </View>
    );
}

export default Game;