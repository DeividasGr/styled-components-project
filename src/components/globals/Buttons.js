import styled from 'styled-components';
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  setFont,
} from '../../styles';

export const PrimaryBtn = styled.button`
  display: inline-block;
  background-color: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.main};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColor.primaryColor })};
  ${setLetterSpacing(3)};
  &:hover {
    background-color: transparent;
    color: ${setColor.primaryColor};
  }
  text-decoration: none;
  cursor: pointer;
`;
