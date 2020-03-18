import { Global, css } from '@emotion/core'

const styles = css`
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

export const GlobalStyle = () => <Global styles={styles} />
