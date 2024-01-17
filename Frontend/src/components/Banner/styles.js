import styled from "styled-components";

export const Container = styled.main`
  margin: 26.8rem 12.4rem 4.9rem 12.4rem;

  section {
    height: 26rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    padding-right: 10rem;
    gap: 0.8rem;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    > img {
      //display: none;
      position: absolute;
      top: 12rem;
      left: 6rem;

      width: 63.2rem;
      height: 40.6rem;
      object-fit: cover;
      object-position: center top; /* Ajusta a posição para cortar a parte superior */

      opacity: 0.8;
      transform: rotateY(180deg);
    }

    > h1 {
      font-size: 4rem;
      font-weight: 500;
    }

    > p {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }

  //Mobile
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    margin: 15.8rem 1.6rem 4.9rem 1.6rem;

    section {
      width: 37rem;
      height: 14rem;
      padding: 0rem 1rem 0rem 16rem;

      > h1 {
        font-size: 1.8rem;
        font-weight: 600;
      }

      > p {
        font-size: 1.2rem;
        font-weight: 400;
      }

      > img {
        width: 19.1rem;
        height: 16.9rem;

        position: absolute;
        top: 13rem;
        left: 0.5rem;
      }
    }
  }
`;
