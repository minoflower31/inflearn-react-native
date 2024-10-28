import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import MyButtonV2 from "./MyButtonV2";
import MyButton from "./MyButton";

export default function App() {

  const onPressButton = () => {
    alert("안녕하세요");
  }

  return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! test</Text>
        <StatusBar style="auto"/>
        <Button title="눌러주세요" onPress={onPressButton}></Button>
        <View style={styles.buttonContainer}>
          <MyButton title="버튼1" onPress={onPressButton}/>
          <MyButton>children</MyButton>
          <MyButtonV2/>
        </View>
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

  buttonContainer: {
    gap: 16,
    padding: 20,
  }
});
