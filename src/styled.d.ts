import 'styled-components/native'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      boldText: string
      normalText: string

      light: string
      dark: string
    
    }

    font: {
      fontSize: number
      fontWeight: number
    }
  }
}
