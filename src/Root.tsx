import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import React from "react"

interface RootProps {
  children: React.ReactNode
}

const Root = ({ children }: RootProps) => {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
}

export default Root
