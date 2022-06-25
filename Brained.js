import React, { useState } from 'react';
import { View, Text, Button, TextInput} from 'react-native';
import CountDown from 'react-native-countdown-component';

function generateRandomNumber(max, min = 1){
    return Math.floor(Math.random()*(max - min) + min);
}

function calculateResult(num1, num2, resp){
    const result = num1 * num2;
    if(resp == result){
        return true;
    } 
    else{
        return false;
    }
}

const rand1 = generateRandomNumber(100);
const rand2 = generateRandomNumber(100);

function Brained(){
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleOnChange = (newNumber) => {
        setNumber(newNumber);
    }

    const handleOnFinish = () => {
        const num = parseInt(number);
        if(calculateResult(rand1, rand2, num)){
            setMessage('Felicidades, has ganado :D')
        }
        else{
            setMessage('Ja que pinche idiota')
        }
    }

    return(
        <View>
            <CountDown
                until={20}
                onFinish={handleOnFinish}
                size={20}
                timeToShow={['S']}
            />
            <Text>
                {rand1} X {rand2}
            </Text>
            <TextInput 
                placeholder="Tu número"
                autoFocus
                onChangeText={handleOnChange}
                defaultValue={number}
            />
            <Text>{message}</Text>
        </View>
    );
}

export default Brained;