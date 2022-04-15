import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {

  return (
    <Flex direction='column' minH="100vh">
      <Header />
      <Body />
    </Flex>

  )
}

export default App
