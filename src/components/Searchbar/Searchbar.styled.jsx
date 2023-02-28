import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: blue;
`;

export const Input = styled.input`
  width: 600px;
  height: 45px;

  border-radius: 25px;
  border: none;

  font-size: 20px;
  ::placeholder {
    font-size: 20px;
    color: violet;
    padding: 5px;
    text-align: center;
  }
`;

export const Btn = styled.button`
  width: 100px;
  height: 35px;

  margin-left: 20px;
  border: none;
  background-color: purple;
  font-size: 15px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;
