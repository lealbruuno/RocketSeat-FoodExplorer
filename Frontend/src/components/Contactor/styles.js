import styled from "styled-components";

export const Container = styled.body`
  div {
    display: flex;
    flex-direction: end;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    > p {
      font-size: 1.8rem;
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.COLORS.DARK_200};
      border: none;
      cursor: pointer;
    }
  }
`;
