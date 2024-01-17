import styled from "styled-components";

export const Container = styled.body`
  margin: 0rem 12.4rem 4.7rem 12.4rem;
  position: relative;
  z-index: 0;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.3rem;
    padding: 1.4rem;
    gap: 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border-radius: 0.8rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      margin-left: 18rem;

      > button {
        border: none;
        cursor: pointer;
        background-color: ${({ theme }) => theme.COLORS.DARK_200};
      }
    }

    > img {
      width: 14.6rem;
      height: 14.6rem;
    }

    > h2 {
      font-size: 1.8rem;
      font-weight: 700;
    }

    > span {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1rem;
      font-weight: 400;
    }

    > p {
      font-size: 2.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    > section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      > button {
        width: 7.2rem;
      }
    }
  }

  //Mobile
  @media (max-width: 700px) {
    margin: 2rem 2.4rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      margin-left: 18rem;

      > button {
        border: none;
        cursor: pointer;
        background-color: ${({ theme }) => theme.COLORS.DARK_200};
      }
    }



    section {
      width: 21rem;
      height: 35rem;

      > img {
        width: 8.8rem;
        height: 8.8rem;
      }

      > h2 {
        font-size: 1.4rem;
        font-weight: 500;
      }

      > span {
        display: none;
      }

      > p {
        font-size: 1.6rem;
        font-weight: 400;
      }

      > section {
        display: flex;
        flex-direction: column;
        margin: 0;
      }
    }
  }
`;
