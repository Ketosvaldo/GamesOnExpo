import React, { useState } from 'react';
import { Text, ImageBackground, TextInput} from 'react-native';
import CountDown from 'react-native-countdown-component';
import styles from './styles';
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
    const [finish, setFinish] = useState(true);
    const [win, setWin] = useState(false);
    const handleOnChange = (newNumber) => {
        setNumber(newNumber);
    }

    const handleOnFinish = () => {
        const num = parseInt(number);
        if(calculateResult(rand1, rand2, num)){
            setMessage('Felicidades, eres muy inteligente');
            setWin(true);
        }
        else{
            setMessage('Ja que tonto');
            setWin(false);
        }
        setFinish(false);
    }

    return(
        finish ?
            <ImageBackground 
                source={require('./images/UltraSmart.png')} 
                style={{
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100%', 
                    width: '100%',
                }}>
                <CountDown
                    until={20}
                    onFinish={handleOnFinish}
                    size={20}
                    timeToShow={['S']}
                />
                <Text style={styles.text}>
                {rand1} X {rand2}
                </Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Tu número"
                    autoFocus
                    onChangeText={handleOnChange}
                    defaultValue={number}
                />
                <Text>{message}</Text>
            </ImageBackground>
            :
            win ? 
                <ImageBackground 
                    source={require('./images/UltraSmart.png')} 
                    style={{
                        justifyContent: 'flex-start', 
                        alignItems: 'center', 
                        height: '100%', 
                        width: '100%',
                    }}>
                <Text style={styles.title}>{message}</Text>
                </ImageBackground>

            :

                <ImageBackground
                    source={require('./images/Stupid.png')} 
                    style={{
                        justifyContent: 'flex-start', 
                        alignItems: 'center', 
                        height: '100%', 
                        width: '100%',
                    }}>
                    <Text style={styles.title}>{message}</Text>
                </ImageBackground>
    );
}

export default Brained;