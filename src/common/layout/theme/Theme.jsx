export default function Theme() {

    return ({
        typography: {
            fontFamily: [
              'Open Sans Condensed',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          },
        palette: {
            menuColor: {
                light: '#FFFFFF',
                main: '#6C7481',
                contrastText: 'rgba(0, 0, 0, 0.87)',
            }
        }
    })
}