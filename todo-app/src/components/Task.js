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

const Task = ({task, onDeleteTask, onToggleTask, onUpdateTask}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const _onSubmitEditing = () => {
    setIsEditing(false);

    if(isEditing) {
      const updatedTask = Object.assign({}, task);
      updatedTask.text = text;
      setIsEditing(false);
      onUpdateTask(updatedTask);
    }
  }

  return isEditing
      ? <Input value={text} onChangeText={(text) => setText(text)}
               onSubmitEditing={_onSubmitEditing}
               onBlur={() => {
                 setText(task.text);
                 setIsEditing(false);
               }}
      />
      : <Container>
        <IconButton icon={task.completed ? icons.check : icons.uncheck}
                    task={task} onPress={onToggleTask}/>
        <Contents completed={task.completed}>{task.text}</Contents>
        {task.completed || <IconButton icon={icons.edit} onPress={() => setIsEditing(true)}/>}
        <IconButton icon={icons.delete} task={task} onPress={onDeleteTask}/>
      </Container>
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onUpdateTask: PropTypes.func.isRequired,
}

export default Task;