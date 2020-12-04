import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan("large")`
      flex-direction: column;
  `}
`

export const LayoutMain = styled.main`
  background: #1b1324;
  min-height: 100vh;
  padding: 0 0 0 23.75rem;
  width: 100%;
`