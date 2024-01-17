import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  margin-top: 12.4rem;
  margin-left: 6.4rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  cursor: pointer;
  background-color: transparent;
  border: none;

  @media (max-width: 700px) {
    margin-left: 2.4rem;
  }
`;
