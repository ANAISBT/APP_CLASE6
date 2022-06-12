import { Button, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import  Card  from "../components/card";
import Colors from "../constants/colors";

const GameOver = ({ rounds, choise, onRestart }) => {
    const [isPortrait, setIsPortrait] = useState(true);
  
    const onPortrait = () => {
      const dim = Dimensions.get("screen");
      return dim.height >= dim.width;
    };
  
    const statePortrait = () => setIsPortrait(onPortrait());
  
    useEffect(() => {
      Dimensions.addEventListener("change", statePortrait);
      return () => {
        Dimensions.removeEventListener("change", statePortrait);
      };
    });
  
    return (
      <View style={isPortrait ? styles.container : styles.containerLandscape}>
        <Image
          style={isPortrait ? styles.image : styles.imageLandscape}
          source={{
            uri: "https://www.mentsalud.com/wp-content/uploads/2020/08/game-over-videojuegos-924x480.jpg",
          }}
        />
        <Card style={styles.resultContainer}>
          <Text>Intentos: {rounds}</Text>
          <Text>El número era: {choise}</Text>
        </Card>
        <Button title="Reiniciar" onPress={onRestart} color={Colors.primary} />
      </View>
    );
  };
  const { width, height } = Dimensions.get("window");
  export default GameOver;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  resultContainer: {
    marginBottom: 20,
    padding: 20,
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: height * 0.3,
  },
  containerLandscape: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageLandscape: {
    width: "50%",
    height: height * 0.2,
  },
});
  