import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import Shadow from "./Shadow";

export default function AppV3() {
  return (
      <View style={styles.container}>
        <Shadow />
        <StatusBar style="auto"/>
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


