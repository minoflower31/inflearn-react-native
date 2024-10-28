import {Pressable, Text, View} from "react-native";
import {log} from "expo/build/devtools/logger";

const MyButtonV2 = () => {
  return (
      <Pressable
          onPress={() => console.log("press")}
          onPressIn={() => console.log("press in")}
          onPressOut={() => console.log("press out")}
          onLongPress={() => console.log("so long")}
                 pressRetentionOffset={{
                   bottom: 20,
                   top: 20,
                   left: 20,
                   right: 20
                 }}>
        <View style={{backgroundColor: "red", padding: 10}}>
          <Text style={{fontSize: 20, color: 'white'}}>텍스트</Text>
        </View>
      </Pressable>
  )
}

export default MyButtonV2;