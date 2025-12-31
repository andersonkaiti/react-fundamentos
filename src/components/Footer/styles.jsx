import styled, { css } from 'styled-components'

export const Container = styled.footer`
  ${({ theme }) => css`
  background: ${theme.footerBackgroundColor};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.large};
  border-radius: ${theme.borderRadius};
  justify-content: space-between;
  margin-top: ${theme.spacing.large};

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
  `}
`
