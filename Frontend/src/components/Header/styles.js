import styled from "styled-components";

export const Container = styled.main`
  /* Esconder bloco Mobile em telas maiores ou iguais a 700px */
  @media (min-width: 700px) {
    .mobile {
      display: none;
    }
  }
`;

export const Desktop = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;

  @media (max-width: 700px) {
    display: none;
  }

  @media (min-width: 700px) {
    width: 100vw;
    padding: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      > img {
        width: 3rem;
        height: 3rem;
      }

      > h1 {
        font-size: 2.2rem;
      }

      > p {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-size: 1.2rem;
        font-weight: 400;
      }
    }

    > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 1rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};

      > input {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        padding: 1.2rem 1.4rem;
        width: 35vw;
        border: none;
        font-size: 1.4rem;
        outline: none;

        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
      }
    }

    div:nth-child(4) {
      cursor: pointer;
    }
  }
`;

export const MobileClosed = styled.div`
  position: fixed;
  z-index: 1;
  width: 100vw;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex: 0;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    gap: 0.8rem;

    > h1 {
      font-size: 2rem;
    }

    > p {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;

export const MobileOpen = styled.div`
  position: fixed;
  z-index: 1;
  width: 100vw;
  top: 0;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  display: flex;
  flex-direction: column;

  height: 100vh;

  > div:nth-child(1) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 2.4rem;

    > button {
      border: none;
      background-color: transparent;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      font-size: 2rem;
      font-weight: 400;
    }
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    margin: 2.4rem;
    padding: 1.2rem;

    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    gap: 1rem;

    > input {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border: none;
      outline: none;
      width: 100vw;
      font-size: 1.2rem;
    }
  }

  > h1 {
    margin: 2.4rem;
    font-size: 1.6rem;
    font-weight: 300;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
  }
`;
