import {Pressable, Text, View} from "react-native";

const MyButtonV2 = () => {
  return (
      <Pressable onPress={() => alert("The alert shows!!")}
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