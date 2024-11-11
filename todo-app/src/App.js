import styled from "styled-components/native";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import React, {useState} from "react";
import {StatusBar} from "react-native";
import Input from "./components/input";

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

const addTask = () => {


}

export default function App() {
  const [newTask, setNewTask] = useState();
  return (
      <ThemeProvider theme={theme}>
        <Container>
          <StatusBar barStyle={"light-content"}
                     backgroundColor={theme.background}/>
          <Title>TODO List</Title>
          <Input placeholder="Add a task" value={newTask}
                 onChangeText={text => setNewTask(text)}
                 onSubmitEditing={onSubmitEditing}
          />
        </Container>
      </ThemeProvider>
  );
}
