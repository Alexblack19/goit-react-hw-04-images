import styled from 'styled-components';

export const Header = styled.header`
  padding: 10px 0px;
  background-color: #4354b0;
`;

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #ffff;
  border-radius: 5px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://img.icons8.com/metro/26/search.png');
  background-color: inherit;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover,
  :focus {
    opacity: 1;
  }
`;

export const Span = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
