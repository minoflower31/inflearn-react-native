import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import MyButtonV2 from "./MyButtonV2";
import MyButton from "./MyButton";
import React, {useState} from 'react';
import MyButtonV3 from "./MyButtonV3";

export default function App() {
  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1);

  const onPressButton = () => {
    alert("안녕하세요");
  }

  return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>{addition}</Text>
        <Text style={{fontSize: 20}}>{multiple}</Text>
        <MyButton title="더하기" onPress={() => { setAddition(addition + 2)}}/>
        <MyButton title="곱하기" onPress={() => { setMultiple(multiple * 2)}}/>

        <StatusBar style="auto"/>
        <Button title="눌러주세요" onPress={onPressButton}></Button>
        <View style={styles.buttonContainer}>
          <MyButton title="버튼1" onPress={onPressButton} title2={"버튼1-title1"}/>
          <MyButton>children</MyButton>
          <MyButtonV2/>
          <MyButtonV3/>
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
