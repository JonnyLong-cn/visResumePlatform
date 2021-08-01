import styled from 'styled-components';
export const ESButton = styled("button") <{ theme?: Object }>`
  display: inline-block;
  cursor: ${props=>props.theme.disabled===true?'pointer':'not-allowed'};
  box-sizing: border-box;
  border: ${props=>props.theme.border===true?"1px solid #ddd":""};
  border-radius: 16px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  user-select: none;
  opacity: 1;
  width: ${props => props.theme.size === "small" ? "64px" : props.theme.size === "big" ? "118px" : "90px"};
  height: ${props => props.theme.size === "small" ? "32px" : props.theme.size === "big" ? "42px" : "36px"};
  line-height: ${props => props.theme.size === "small" ? "30px" : props.theme.size === "big" ? "40px" : "34px"};

  :hover{
    opacity: 0.9;
  }
`;