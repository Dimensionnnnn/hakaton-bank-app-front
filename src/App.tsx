import { ChakraProvider, CSSReset, extendTheme, ThemeProvider } from '@chakra-ui/react';
import Form from './Components/Form';

function App() {

  const theme = extendTheme({})

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Form />
        </div>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default App
