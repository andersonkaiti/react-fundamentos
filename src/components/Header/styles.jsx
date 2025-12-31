import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
  background: ${theme.headerBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.large};
  border-radius: ${theme.borderRadius};
  justify-content: space-between;

  button {
    font-size: ${theme.spacing.medium};
    cursor: pointer;
    cursor: pointer;
    background: transparent;
    border: none;
  }
  `}
`
