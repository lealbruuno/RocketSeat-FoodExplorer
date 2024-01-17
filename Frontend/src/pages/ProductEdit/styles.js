import styled from "styled-components";

export const Container = styled.main`
  margin-top: 12.4rem;

  h2 {
    margin: 2.4rem 12.4rem 3.2rem 12.4rem;
    font-size: 3.2rem;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 2.4rem 12.4rem 3.2rem 12.4rem;

    //Todas as DIVS
    > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2.2rem;

      > section {
        display: flex;
        flex-direction: column;
        > input,
        textarea,
        select,
        option {
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
          border: none;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          padding: 1.2rem 1.4rem;
          border-radius: 0.8rem;
          font-size: 1.4rem;
          font-weight: 400;
          height: 4.8rem;
        }
      }
    }
    //Primeira DIV
    > div:nth-child(1) {
      > section:nth-child(1) {
        > label {
          > div {
            display: flex;
            justify-content: center;
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
            padding: 1.2rem 1.4rem;
            border-radius: 0.8rem;
            font-size: 1.4rem;
            font-weight: 400;
            height: 4.8rem;
            width: 22.9rem;
            gap: 0.8rem;

            > span {
              color: ${({ theme }) => theme.COLORS.LIGHT_100};
              text-align: center;
              font-size: 1.4rem;
              font-weight: 500;
            }
            > input {
              display: none;
            }
          }
        }
      }
      > section:nth-child(2) {
        width: 46.3rem;
      }
      > section:nth-child(3) {
        width: 36.4rem;
      }
    }

    //Segunda DIV
    > div:nth-child(2) {
      > section:nth-child(1) {
        width: 81.5rem;

        > section {
          display: flex;
          align-items: center;
          border-radius: 0.8rem;
          background-color: ${({ theme }) => theme.COLORS.DARK_800};

          padding: 1.2rem 1.4rem;
          border-radius: 0.8rem;
          height: 4.8rem;
          gap: 0.8rem;
        }
      }
      > section:nth-child(2) {
        width: 26rem;
      }
    }

    //Terceira DIV
    > div:nth-child(3) {
      > section:nth-child(1) {
        width: 112rem;
        textarea {
          height: 17.2rem;
        }
      }
    }

    //Quarta DIV *Botões
    > div:nth-child(4) {
      display: flex;
      justify-content: flex-end;
      gap: 3.2rem;
      button:nth-child(1) {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
      button:nth-child(2) {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
      }
    }
  }

  //Mobile
  @media (max-width: 700px) {
    margin-top: 12.4rem;

    h2 {
      margin: 2.4rem;
      font-size: 3.2rem;
      font-weight: 500;
    }

    form {
      display: flex;
      flex-direction: column;
      margin: 2.4rem;

      //Todas as DIVS
      > div {
        display: flex;
        flex-direction: column;

        > section {
          display: flex;
          flex-direction: column;

          > input,
          textarea,
          select,
          option {
            padding: 1.2rem 1.4rem;
            border-radius: 0.8rem;
            font-size: 1.4rem;
            font-weight: 400;
            height: 4.8rem;
          }
        }
      }
      //Primeira DIV
      > div:nth-child(1) {
        > section:nth-child(1) {
          > label {
            > div {
              display: flex;
              justify-content: center;
              background-color: ${({ theme }) => theme.COLORS.DARK_800};
              padding: 1.2rem 1.4rem;
              border-radius: 0.8rem;
              font-size: 1.4rem;
              font-weight: 400;
              height: 4.8rem;
              width: 36rem;
              gap: 0.8rem;

              > span {
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                text-align: center;
                font-size: 1.4rem;
                font-weight: 500;
              }
              > input {
                display: none;
              }
            }
          }
        }
        > section:nth-child(2) {
          width: 36rem;
        }
        > section:nth-child(3) {
          width: 36rem;
        }
      }

      //Segunda DIV
      > div:nth-child(2) {
        > section:nth-child(1) {
          width: 36rem;

        }
        > section:nth-child(2) {
          width: 36rem;
        }
      }

      //Terceira DIV
      > div:nth-child(3) {
        > section:nth-child(1) {
          width: 36rem;
        }
      }

      //Quarta DIV *Botões
      > div:nth-child(4) {
        align-items: center;
      }
    }
  }
`;
