import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  border: 1px solid #ccc;
  border-radius: 0.5rem;

  p {
    background: #ccc;
    padding: 1rem 0.5rem;

    font-size: 1.5rem;
  }
`;

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 1rem 0.5rem;

  a {
    color: #000;
  }
`;
