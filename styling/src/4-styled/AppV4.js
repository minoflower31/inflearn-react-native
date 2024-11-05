import {StatusBar} from 'expo-status-bar';
import styled from "styled-components/native";
import {css} from "styled-components";

const cssText = css`
  font-size: 20px;
  font-weight: 600;
`
const Container = styled.View`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  ${cssText};
  color: blue;
`

const StyledButton = styled.Button`
  
`;

const ErrorText = styled.Text`
  ${cssText};
  color: red;
`;

export default function App() {
  return (
      <Container>
        <StatusBar style="auto"/>
        <StyledText>Hi</StyledText>
        <ErrorText>error</ErrorText>

        <StyledButton title={"click"} onPress={() => {
          alert("hi");
        }}/>
      </Container>
  );
}