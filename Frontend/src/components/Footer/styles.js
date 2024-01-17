import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  display: flex;
  width: 100%;
  height: 7.7rem;
  padding: 4rem;
  align-items: center;
  justify-content: space-between;
  //position: fixed;
  //bottom: 0;

  > footer {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    font-size: 1.4rem;

    h1 {
      font-size: 2.2rem;
    }
  }

  > span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  //Mobile
  @media (max-width: 700px) {
    padding: 2.4rem;

    footer {
      > h1 {
        font-size: 1.4rem;
      }

      > img {
        width: 2.2rem;
        height: 1.8rem;
      }
    }
    span {
      display: flex;
      font-size: 1rem;
    }
  }
`;
