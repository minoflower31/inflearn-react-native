import {icons} from "../icons";
import styled from "styled-components/native";
import {TouchableOpacity, View} from "react-native";
import PropTypes from "prop-types";

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  color: ${({theme,completed}) => completed ? theme.done : theme.text};
`;

const IconButton = ({icon, onPress, task= {completed: false}}) => {
  const _onPress = () => { // id를 인수로 전달할 수 없기 때문에 가공함
    onPress(task.id);
  }
  return <TouchableOpacity onPress={_onPress}>
    <View>
      <Icon source={icon} completed={task.completed}></Icon>
    </View>
  </TouchableOpacity>
}

IconButton.propTypes = {
  icon: PropTypes.oneOf(Object.values(icons)).isRequired,
  onPress: PropTypes.func,
  task: PropTypes.object,
}

export default IconButton;