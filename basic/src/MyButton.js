import {Text, TouchableOpacity, View} from "react-native";

const MyButton = ({title, onPress = () => {}, children}) => {
  return (
      <TouchableOpacity onPress={onPress}
                        pressRetentionOffset={{
                          bottom: 10,
                          top: 10,
                          left: 10,
                          right: 10
                        }}>
        <View style={{backgroundColor: "red", padding: 10}}>
          <Text style={{fontSize: 20, color: 'white'}}>
            {children || title}
          </Text>
        </View>
      </TouchableOpacity>
  )
}

MyButton.defaultProps = {
  title: "no text",
  onPress: () => alert("default"),
}

export default MyButton;