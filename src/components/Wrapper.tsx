import React from "react"
import { Box, Text } from "@chakra-ui/react"

type PageWrapperProps = {
  title: string
  children: React.ReactNode
}

const Wrapper = ({ title, children }: PageWrapperProps) => {
  return (
    <Box as="section" display="flex" flexDirection="column" marginBottom="60px">
      <Text fontSize="20px" fontWeight="500" color="green.600">
        {title}
      </Text>
      {children}
    </Box>
  )
}

export default Wrapper
