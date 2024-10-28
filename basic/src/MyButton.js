import {Text, TouchableOpacity, View} from "react-native";
import PropTypes from "prop-types";

const MyButton = ({title, onPress, children, title2}) => {


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

MyButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  title2: PropTypes.string
  // title2: PropTypes.string.isRequired
}

export default MyButton;