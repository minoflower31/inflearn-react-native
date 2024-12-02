import styled from "styled-components/native";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import Input from "./components/input";
import Task from "./components/Task";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorageNative from "@react-native-async-storage/async-storage/src/AsyncStorage.native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

SplashScreen.preventAutoHideAsync();

export default function App() {
  const width = useWindowDimensions().width;
  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState({});

  const storeData = async (tasks) => {
    try {
      await AsyncStorageNative.setItem("tasks", JSON.stringify(tasks));
      setTasks(tasks);
    } catch (e) {}
  };

  const getData = async () => {
    try {
      const loadedData = await AsyncStorageNative.getItem("tasks");
      setTasks(JSON.parse(loadedData || "{}"));
    } catch (e) {}
  };

  const addTask = () => {
    if (newTask.length <= 0) {
      alert("할 일을 입력해 주세요.");
      return;
    }

    const ID = Date.now().toString();
    const newTaskObj = {
      [ID]: { id: ID, text: newTask, completed: false },
    };

    storeData({ ...tasks, ...newTaskObj });
    setNewTask("");
    alert("Write");
  };

  const deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];

    // delete tasks[id];
    storeData(currentTasks);
  };

  const toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]["completed"] = !currentTasks[id]["completed"];
    storeData(currentTasks);
  };

  const updateTask = (item) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    storeData(currentTasks);
  };

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        getData();
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (isReady) {
      SplashScreen.hide();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container onLayout={onLayoutRootView}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={theme.background}
        />
        <Title>TODO List</Title>
        <Input
          placeholder="Add a task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          onSubmitEditing={addTask}
          onBlur={() => setNewTask("")}
        />
        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                onDeleteTask={deleteTask}
                onToggleTask={toggleTask}
                onUpdateTask={updateTask}
              />
            ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}
