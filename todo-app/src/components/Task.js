import styled from "styled-components/native";
import IconButton from "./IconButton";
import PropTypes from "prop-types";
import {icons} from "../icons";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0;
`;
const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({theme}) => theme.text};
`;

const Task = ({task, onDeleteTask}) => {
  return <Container>
    <IconButton icon={icons.uncheck}/>
    <Contents>{task.text}</Contents>
    <IconButton icon={icons.edit}/>
    <IconButton icon={icons.delete} id={task.id} onPress={onDeleteTask}/>
  </Container>
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onDeleteTask: PropTypes.func.isRequired
}

export default Task;