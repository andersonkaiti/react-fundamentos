import styled, { css } from 'styled-components'

export const Container = styled.article`
  ${({ theme }) => css`
  background: ${theme.postBackgroundColor};
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.medium};
  border-radius: ${theme.borderRadius};

  h2 {
    margin: 0 0 ${theme.spacing.small};
  }

  small {
    opacity: 0.7;
  }

  & + article {
    margin-top: ${theme.spacing.small};
  }
  `}
`
