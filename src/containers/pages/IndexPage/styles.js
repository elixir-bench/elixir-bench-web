const color_primary = '#3f51b5'

export default () => ({
  root: {},
  gridDescription: {
    lineHeight: 2,
    fontSize: 20,
    padding: 20,
    '& a': {
      textDecoration: 'underline',
      color: color_primary,

      '&:hover, &:visited, &:active': {
        color: color_primary
      }
    }
  },
  gridTitle: {
    fontFamily: 'monospace',
  },
  gridContainer: {
    marginTop: '40px',
  },
  button: {
    marginTop: '30px',
  }
})
