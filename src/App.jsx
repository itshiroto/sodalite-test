import { useState, useEffect, createContext, useContext, useReducer } from 'react'
import { Box, Flex, Button, Text, Heading } from '@chakra-ui/react'

const UserContext = createContext();

function UserName() {
  const user = useContext(UserContext);
  return <Heading>Hello, {user}!</Heading>
}

function UserBase() {
  return (
    <UserName />
  )
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { val: state.val + action.payload };
    case 'decrement':
      return { val: state.val - action.payload };
    case 'reset':
      return { val: 0 };
  }
}

function App() {
  const [user, setUser] = useState("Rivo");

  const toggleUser = () => {
    user === "Rivo" ? setUser("Agus") : setUser("Rivo");
  }

  useEffect(() => {
    document.title = `Hello, ${user}!`;
  });

  const [counter, dispatch] = useReducer(reducer, { val: 0 });

  return (
    <UserContext.Provider value={user}>
      <Flex h="100vh" justify="center" align="center">
        <Flex justify="center" direction="column">
          <UserBase />
          <Button onClick={toggleUser}>Ganti Nama</Button>
          <Text textAlign="center" mt="5" fontSize="xl">{counter.val}</Text>
          <Flex gap="3">
            <Button flexGrow={1} onClick={() => dispatch({ type: 'increment', payload: 1 })}>+</Button>
            <Button flexGrow={1} onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-</Button>
            <Button flexGrow={1} onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
          </Flex>
        </Flex>
      </Flex>
    </UserContext.Provider>
  )
}

export default App
