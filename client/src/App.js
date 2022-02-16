import React from 'react';
import './App.css';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const App = ({ Component }) => {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}

export default App;
