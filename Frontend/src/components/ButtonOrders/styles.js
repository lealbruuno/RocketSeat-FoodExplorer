import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: 21.6rem;
  padding: 1.2rem 3.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;
  border: none;
  cursor: pointer;

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  text-align: center;

  &:disabled {
    opacity: 0.5;
  }
`;
