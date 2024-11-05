

import {StatusBar} from 'expo-status-bar';
import styled from "styled-components/native";
import Input from "./input";
import {ThemeProvider} from "styled-components";
import {Switch} from "react-native";
import {useState} from "react";

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => (theme.bgColor)};
  align-items: center;
  justify-content: center;
`;

const lightTheme = {
  inputColor: "#111",
  inputBorder: "#111",
  bgColor: "#e3e3e3"
}
const darkTheme = {
  inputColor: "#e3e3e3",
  inputBorder: "#e3e3e3",
  bgColor: "#111"
}

export default function App() {
  const [isLight, toggleTheme] = useState(true);

  return (
      <ThemeProvider theme={isLight ? lightTheme : darkTheme} >
        <Container>
          <StatusBar style="auto"/>
          <Switch value={isLight} onValueChange={(isLight) => toggleTheme((isLight))}/>
          <Input placeholder="입력하세요" />
          <Input />
        </Container>
      </ThemeProvider>
  );
}

