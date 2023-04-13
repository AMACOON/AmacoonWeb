import styled from "styled-components";

export const Container = styled.div``;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
