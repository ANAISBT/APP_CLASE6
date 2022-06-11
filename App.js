import { StyleSheet, View } from 'react-native';

import { Header } from './src/components/index';
import StartGame from './src/screens/start-game';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title= "¡Bienvenidos!" />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
