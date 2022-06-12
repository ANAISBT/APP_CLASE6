import {Button, Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from "react";

import Card from '../../components/card';
import Colors from '../../constants/colors';
import Input from '../../components/input';
import NumberContainer from '../../components/NumberContainer';
import { styles } from "./styles";

const StartGame = ({onStartGame}) => {
    const [enteredValue, setEnteredValue]=useState("");
    const [confirmed, setConfirmed] = useState(false);
    const[selectedNumber,setSelectedNumber]= useState("");
    const isIOS = Platform.OS === "ios";
    const handlerInputNumber = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ""));
    };
    const handlerResetInput = () => {
        setEnteredValue('');
        setConfirmed(false);
    };
    const handlerConfirmInput = () => {
        const choseNumber = parseInt(enteredValue);
        if(isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) return;

        setConfirmed(true);
        setSelectedNumber(choseNumber);
        setEnteredValue("");
    }
    let confirmedOuput;
    if(confirmed){
        confirmedOuput=(
            <Card style ={styles.summaryContainer}>
                <Text style={styles.subtitle}>Tu selección</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="EMPEZAR JUEGO" onPress={() => props.onStartGame(selectedNumber)} color={Colors.secondary}/>
            </Card>
        );
    }

    return(
        <KeyboardAvoidingView
        style={styles.container}
        behavior={isIOS ? "position" : "height"}
        keyboardVerticalOffset={30}
        >
        <TouchableWithoutFeedback style={styles.containerTouchable} 
        onPress={()=> {
            Keyboard.dismiss();
        }}>
            <ScrollView style={styles.containerScroll}>
            <Text style={styles.title}>Comenzar Juego</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.subtitle}>Elija el Numero</Text>
                <Input 
                    placeholder="Ingresa un Número"
                    keyboardType="numeric"
                    blurOnSubmit
                    autoCapitalizacion="none"
                    autoCorrect={false}
                    maxLenght={2}
                    onChangeText={handlerInputNumber}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                <View style={styles.button}>
                        <Button title="Limpiar" 
                        onPress={() => handlerResetInput} 
                        color={Colors.primary}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirmar" 
                        onPress={() => handlerConfirmInput} color={Colors.secondary}/>
                    </View>
                </View>
            </Card>
            {confirmedOuput}
        </ScrollView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        );
    };

export default StartGame;