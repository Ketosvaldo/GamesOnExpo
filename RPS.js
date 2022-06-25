import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

function generateRandomNumber(max, min = 1){
    return Math.floor(Math.random()*(max - min) + min);
}

function calculatePoint(number, random) {
    switch(number){
        case 0: //Piedra
            switch(random){
                case 0: return 0;
                case 1: return 2;
                case 2: return 1;
            }
        case 1: //Papel
            switch(random){
                case 0: return 1;
                case 1: return 0;
                case 2: return 2;
            }
        case 2: //Tijera
            switch(random){
                case 0: return 2;
                case 1: return 1;
                case 2: return 0;
            }
        case 3: return 3;
    }
}

function calculateText(number, random) {
    switch(number){
        case 0: //Piedra
            switch(random){
                case 0: return "Empate, no pasa nada";
                case 1: return "La computadora gana";
                case 2: return "Tu ganas";
            }
        case 1: //Papel
            switch(random){
                case 0: return "Tu ganas";
                case 1: return "Empate, no pasa nada";
                case 2: return "La computadora gana";
            }
        case 2: //Tijera
            switch(random){
                case 0: return "La computadora gana";
                case 1: return "Tu ganas";
                case 2: return "Empate, no pasa nada";
            }
    }
}

function RPS() {
    const [message, setMessage] = useState('');
    const [count, setCount] = useState(0);
    const [IAcount, setIACount] = useState(0);
    const [win, setWin] = useState(false);
    const [lose, setLose] = useState(false);

    const Reset = () => {
        setWin(false);
        setLose(false);
        setCount(0);
        setIACount(0);
        setMessage("");
    }

    const Piedra = () => { 
        const num = 0;
        let point = 0;
        let IAPoint = 0;
        const numRand = parseInt(generateRandomNumber(3));
        let text = calculateText(num, numRand);
        switch(calculatePoint(num,numRand)){
            case 1: point = count + 1; setCount(count + 1); break;
            case 2: IAPoint = IAcount + 1; setIACount(IAcount + 1); break;
        }
        if(point == 3){
            setWin(true);
            text = "";
        }
        else if(IAPoint == 3){
            setLose(true);
            text = "";
        }
        setMessage(text);
    }

    const Papel = () => {
        const num = 1;
        let point = 0;
        let IAPoint = 0;
        const numRand = parseInt(generateRandomNumber(3));
        let text = calculateText(num, numRand);
        switch(calculatePoint(num,numRand)){
            case 1: point = count + 1; setCount(count + 1); break;
            case 2: IAPoint = IAcount + 1; setIACount(IAcount + 1); break;
        }
        if(point == 3){
            setWin(true);
            text = "";
        }
        else if(IAPoint == 3){
            setLose(true);
            text = "";
        }
        setMessage(text);
    }

    const Tijera = () => {
        const num = 2;
        const numRand = parseInt(generateRandomNumber(3));
        let point = 0;
        let IAPoint = 0;
        let text = calculateText(num, numRand);
        switch(calculatePoint(num,numRand)){
            case 1: point = count + 1; setCount(count + 1); break;
            case 2: IAPoint = IAcount + 1; setIACount(IAcount + 1); break;
        }
        if(point == 3){
            setWin(true);
            text = "";
        }
        else if(IAPoint == 3){
            setLose(true);
            text = "";
        }
        setMessage(text);
    }

    return (
        <View style={styles.game}>
            {
                win ?
                    <View>
                        <Text>Has Ganado :D</Text>
                        <Button 
                            title="¿Volver a jugar?"
                            onPress={Reset}
                        />
                    </View>
                    :
                    lose ?
                        <View>
                            <Text>Has perdido :c</Text>
                            <Button 
                                title="¿Volver a jugar?"
                                onPress={Reset}
                            />
                        </View>
                        :<View>
                            <Button 
                                title="Piedra"
                                onPress={Piedra}
                            />
                            <Button 
                                title="Papel"
                                onPress={Papel}
                            />
                            <Button 
                                title="Tijera"
                                onPress={Tijera}
                            />
                            <Text>Mis puntos: {count}</Text>
                            <Text>Computadora: {IAcount}</Text>
                            <Text>{message}</Text>
                        </View>
            }
        </View>
    );
}

export default RPS;