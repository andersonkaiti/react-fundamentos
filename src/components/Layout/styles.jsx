import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => css`
    background: #000;
    margin-top: ${theme.spacing.medium};
    padding: ${theme.spacing.medium};
    border-radius: 4px;

    a {
      color: #fff;
      text-decoration: none;
      display: inline-block;
      
      & ~ a {
        margin-left: ${theme.spacing.medium};
      }
    }
  `}
`
