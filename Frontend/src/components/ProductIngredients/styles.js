import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "None"};

  padding: 1.2rem;
  height: 3.8rem;
  border-radius: 0.8rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    width: 100%;

    padding: 1rem 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    background: transparent;
    border: none;
    outline: none;
  }
`;
