import styled from "styled-components/native";
import IconButton from "./IconButton";
import PropTypes from "prop-types";
import {icons} from "../icons";
import {useState} from "react";
import Input from "./input";

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
  color: ${({theme, completed}) => completed ? theme.done : theme.text};
  text-decoration-line: ${({completed}) => completed ? "line-through" : "none"};
`;

const Task = ({task, onDeleteTask, onToggleTask}) => {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing
      ? <Input value={} onChangeText={} onSubmitEditing={}/>
      : <Container>
        <IconButton icon={task.completed ? icons.check : icons.uncheck}
                    task={task} onPress={onToggleTask}/>
        <Contents completed={task.completed}>{task.text}</Contents>
        {task.completed || <IconButton icon={icons.edit}/>}
        <IconButton icon={icons.delete} id={task.id} onPress={onDeleteTask}/>
      </Container>
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onToggleTask: PropTypes.func.isRequired
}

export default Task;