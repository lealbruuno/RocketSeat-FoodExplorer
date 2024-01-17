import styled from "styled-components";

export const Container = styled.body`
  .content {
    display: flex;
    padding: 4.2rem 12.4rem;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGH_300};

    > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        width: 29.01rem;
        height: 28.9rem;
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      margin-left: 4.7rem;

      > h1 {
        font-size: 3rem;
        font-weight: 500;
      }

      > p {
        font-size: 1.8rem;
        font-weight: 400;
      }

      > section:nth-child(1n) {
        display: flex;
        align-items: center;
        gap: 1.2rem;
      }
    }
  }

  //Mobile
  @media (max-width: 700px) {
    .content  {
      display: flex;
      flex-direction: column;
      padding: 2.4rem;
      align-items: center;

      > div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;

        > img {
          width: 26.8rem;
          height: 26.8rem;
        }
      }

      > div:nth-child(2) {
        display: flex;
        align-items: center;
        margin: 0;

        > h1 {
          margin-top: 2rem;
          font-size: 2.7rem;
          font-weight: 500;
        }

        > p {
          font-size: 1.6rem;
          font-weight: 400;
          text-align: justify;
        }
      }
    }
  }
`;
