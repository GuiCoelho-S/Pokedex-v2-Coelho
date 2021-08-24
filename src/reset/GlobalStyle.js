import { createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding:0;
        margin:0;
        font-family: 'Montserrat', sans-serif;
    }

    html, body, #root {
        width:100%;
        height: 100%;
    }
`