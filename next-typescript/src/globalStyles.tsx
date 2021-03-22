import { css } from '@emotion/react'

export const globalStyles = css`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    -webkit-overflow-scrolling: touch;
  }

  body {
    background: salmon;
  }
`
