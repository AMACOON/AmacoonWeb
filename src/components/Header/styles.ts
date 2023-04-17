import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.primary.main};

  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
