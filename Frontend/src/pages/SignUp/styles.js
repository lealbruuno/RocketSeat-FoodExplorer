import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    padding: 6.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;

    > h1 {
      text-align: center;
      font-size: 3.2rem;
      font-weight: 500;
    }

    > a {
      text-align: center;
      font-size: 1.4rem;
      font-weight: 500;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > label {
      display: flex;
      flex-direction: column;
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      > input {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        padding: 1rem 1.2rem;
        width: 28.8rem;
        border-radius: 0.5rem;;
        border: none;
        font-size: 1.2rem;
      }
    }
  }

  > section {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.4rem;
    font-weight: 700;
  }

  //Mobile
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    > form {
      background-color: ${({ theme }) => theme.COLORS.DARK_400};
      > h1 {
        color: red;
        display: none;
      }
    }

    > section {
      font-size: 2.4rem;
      font-weight: 700;
      > img {
        height: 4rem;
      }
    }
  }
`;
