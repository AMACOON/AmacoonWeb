import styled, { css } from "styled-components";

type InputProps = {
  error?: boolean;
};

export default styled.input<InputProps>`
  width: 100%;
  height: 52px;

  background: #fff;

  box-shadow: 0px 4px 10px (0, 0, 0, 0.04);

  border: 2px solid #fff;
  border-radius: 4px;

  outline: none;

  padding: 0 16px;

  font-size: 16px;

  transition: border-color 0.2s ease-in;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) =>
    error &&
    css`
      border-color: ${theme.colors.danger.main} !important;

      color: ${theme.colors.danger.main};
    `}
`;
