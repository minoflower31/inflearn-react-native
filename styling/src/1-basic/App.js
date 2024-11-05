import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import {styles} from "./style"

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={[styles.text, {color: "orange"}]}>Park Min Ho</Text>
        <Text style={[styles.text, styles.errorText]}>ERROR</Text>
        <StatusBar style="auto"/>
      </View>
  );
}


