import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';
import HomeImage from './component/home'


function App() {
  const [outputText,setText] = useState('Test Native App')

  const changetext = () => {
    setText("Button Clicked")
  }

  return (
    <View style={styles.container}>
      <Text>My React Native</Text>
      <Text>{outputText}</Text>
      <HomeImage/>
     <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')}></Button>
     
     <Button onPress={changetext} title="Change"></Button>

     <Button onPress={() => {setText("Test Native App")}} title="Revert"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App