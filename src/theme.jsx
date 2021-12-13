import {createTheme} from '@mui/material/styles'


const theme = createTheme({
    palette: {
        primary: {
            main: "#e3001b",
            contrastText: "#fff"
        },
        secondary: {
            main: "#676767",
        },
        error: {
            main: "#cb0000"
        }
    },
    typography: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontSize: 16,
    },
})


export default theme;