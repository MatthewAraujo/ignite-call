import { globalCss } from '@ignite-ui/react'

export const GlobalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto, sans-serif',
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
