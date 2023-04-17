import styled from "styled-components";

export const Container = styled.div`
  & + & {
    margin-top: 32px;
  }

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;

  background: ${({ theme }) => theme.colors.gray[200]};

  border-radius: 4px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
`;
