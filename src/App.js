import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  )
}

export default App;
