import { Box } from "@chakra-ui/react"
import React from "react"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box width="100%" minHeight="100dvh" paddingBottom="80px">
      <Box maxWidth="725px" margin="0 auto" marginTop="80px" padding="0 15px">
        {children}
      </Box>
    </Box>
  )
}

export default Layout
