import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import Card from '../components/card';
import Colors from "../../constants/colors";
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min,max,exclude) => {
    min=Math.ceil(min);
    max=Math.floor(max);
    const rndNum = Math.floor(Math.random()*(max-min)+min)
    if(rndNum == exclude){
    return generateRandomBetween(min,max,exclude);
    }else
    {return rndNum};
};
const GameScreen = ({ userOptions, onGameOver }) => {
    const [currentGuess, setCurrentGuess] = useState(
      generateRandomBetween(1, 100, userOptions)
    );

    const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const handlerNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userOptions) ||
      (direction === "greater" && currentGuess > userOptions)
    ) {
      Alert.alert("No mientas", "Tu sabes que no es verdad...!", [
        { text: "¡Disculpa!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((current) => current + 1);
  };

  useEffect(() => {
    if (currentGuess == userOptions) onGameOver(rounds);
  }, [currentGuess, userOptions, onGameOver]);

    return(
        <View style={styles.screen}>
            <Text>La suposición del opnente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContainer}>
            <Button
            title="Menor"
            onPress={() => handlerNextGuess("lower")}
            color={Colors.primary}
            />
            <Button
             title="Mayor"
             onPress={() => handlerNextGuess("greater")}
            color={Colors.primary}
            />
            </View>
        </View>
    );
};
export default GameScreen;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: height > 600 ? 20 : 10,
        width: 300,
        maxWidth: "80%",
    },
});
