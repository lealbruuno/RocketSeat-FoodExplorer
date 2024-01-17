import styled from "styled-components";

export const Container = styled.div`
  > section {
    display: flex;
    gap: 1.2rem;
    font-size: 1.2rem;
    font-weight: 500;

    > span {
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      padding: 0.4rem 0.8rem;
      border-radius: 0.5rem;
    }
  }
`;
