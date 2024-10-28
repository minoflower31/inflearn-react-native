import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1);

  const onPressButton = () => {
    alert("안녕하세요");
  }

  return (
      <View style={styles.container}>
        <TextInput onChangeText={(text) => console.log(text)}
                   style={{borderWidth: 1, padding: 10, fontSize: 16}}></TextInput>
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
