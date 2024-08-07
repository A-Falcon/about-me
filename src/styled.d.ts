import 'styled-components/native'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string
      blood: string
      black: string
      light: string
      mid: string
      dark: string
    
    }

    font: {
      fontFam: string
      fontFamBold: string
      fontSize: number
      fontWeight: number
      fontLabel: number
    }
  }
}
