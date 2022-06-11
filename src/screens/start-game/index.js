import {Button, Text, TextInput, View} from 'react-native';

import Colors from '../../constants/colors';
import React from "react";
import { styles } from "./styles";

const StartGame = ()=> {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Comenzar Juego
            </Text>
            <View style={styles.inputContainer}>
                <Text>Elija el Numero</Text>
                <TextInput placeholder="Ingresa un Numero" keyboardType='numeric'/>
                <View style={styles.buttonContainer}>
                <View style={styles.button}>
                        <Button title="Limpiar" onPress={()=>null} color={Colors.primary}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirmar" onPress={()=>null} color={Colors.secondary}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default StartGame;