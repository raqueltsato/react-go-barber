import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #ff9000;
  border: 0;
  border-radius: 10px;
  height: 56px;
  width: 100%;
  padding: 0 16px;
  color: #312e38;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
