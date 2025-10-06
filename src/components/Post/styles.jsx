import styled, { css } from 'styled-components'

const REMOVED_OPACITY = 0.5
const FULL_OPACITY = 1

export const Container = styled.article`
  margin-bottom: 24px;
  /* opacity: ${({ removed }) => (removed ? REMOVED_OPACITY : FULL_OPACITY)}; */
  /* color: ${({ removed }) => (removed ? '#f00' : '#fff')}; */

  ${({ removed }) => css`
    opacity: ${removed ? REMOVED_OPACITY : FULL_OPACITY};
    color: ${removed ? '#f00' : '#fff'};
  `}
`

export const Subtitle = styled.small`
  display: block;
`

export const Rate = styled.span`
  font-size: 10px;
  opacity: 0.7;
`
