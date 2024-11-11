import styled from "styled-components/native";
import {useState} from "react";

const StyledInput = styled.TextInput.attrs(({placeholder, theme}) => ({
  placeholder: placeholder || "Enter a text",
  placeholderTextColor: theme.inputColor
}))`
  padding: 20px;
  font-size: 20px;
  //border: 1px solid ${({text}) => text ? "#00f" : "#111"};
  border: 1px solid ${({theme}) => theme.inputBorder};
`;

const Input = ({placeholder}) => {
  const [text, setText] = useState("");
  return <StyledInput placeholder={placeholder} onChangeText={(text) => setText(text)} text={text}/>;
};

export default Input;