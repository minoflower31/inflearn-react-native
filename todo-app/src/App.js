import styled from "styled-components/native";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import React, {useState} from "react";
import {StatusBar, useWindowDimensions} from "react-native";
import Input from "./components/input";
import IconButton from "./components/IconButton";
import {icons} from "./icons";
import Task from "./components/Task";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({theme}) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`

const List = styled.ScrollView`
  flex: 1;
  width: ${({width}) => width - 40}px;
`;

export default function App() {
  const width = useWindowDimensions().width;
  const [newTask, setNewTask] = useState("");

  const tempData = {
    1: {id: "1", text: "React", completed: false}
  }

  const [tasks, setTasks] = useState(tempData);

  const addTask = () => {
    if(newTask.length <= 0) {
      alert("할 일을 입력해 주세요.");
      return;
    }

    const ID = Date.now().toString();
    const newTaskObj = {
      [ID]: {id: ID, text: newTask, completed: false}
    }

    setTasks({...tasks, ...newTaskObj});
    setNewTask("");
    alert("Write");
  }

  const deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];

    // delete tasks[id];
    setTasks(currentTasks);
  }

  const toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    setTasks(currentTasks);
  }

  return (
      <ThemeProvider theme={theme}>
        <Container>
          <StatusBar barStyle={"light-content"}
                     backgroundColor={theme.background}/>
          <Title>TODO List</Title>
          <Input placeholder="Add a task" value={newTask}
                 onChangeText={text => setNewTask(text)}
                 onSubmitEditing={addTask}
          />
          <List width={width}>
            {Object.values(tasks)
            .reverse()
            .map((task) => <Task key={task.id} task={task} onDeleteTask={deleteTask} onToggleTask={toggleTask} />)}
          </List>
        </Container>
      </ThemeProvider>
  );
}
