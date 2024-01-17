import styled from "styled-components";

export const Container = styled.main`
  .main {
    display: flex;
    justify-content: space-between;
    padding: 6.4rem;

    .orders {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > h1 {
        margin-bottom: 3.2rem;
        font-size: 3.2rem;
        font-weight: 500;
      }

      > section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        > div:nth-child(1) {
          > img {
            width: 7rem;
            height: 7rem;
          }
        }

        > div:nth-child(2) {
          > p {
            font-size: 2rem;
            font-weight: 500;

            > strong {
              font-size: 1.2rem;
              font-weight: 400;
            }
          }
          > button {
            border: none;
            background-color: transparent;
            color: red;
            font-size: 1.2rem;
            font-weight: 400;
            cursor: pointer;
          }
        }
      }

      > h2 {
        font-size: 2rem;
        font-weight: 500;
      }
    }

    .payment {
      > h1 {
        font-size: 3.2rem;
        font-weight: 500;
        margin-bottom: 3.2rem;
      }
      > section {
        > div:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-radius: 8px 8px 0px 0px;
          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};

          > button {
            border: none;
            background-color: transparent;
            cursor: pointer;
            padding: 2rem;
            padding: 2rem 11rem;
          }

          > button:nth-child(1) {
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
            border-radius: 8px 8px 0px 0px;
          }
        }

        > div:nth-child(2) {
          padding: 3.7rem 13rem;
          border-radius: 0px 0px 8px 8px;
          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        }
      }
    }
  }

  //Mobile
  @media (max-width: 700px) {
    .payment {
      display: none;
    }
  }
`;
