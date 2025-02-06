import { Box } from "@chakra-ui/react"
import React from "react"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box width="100%" height="100dvh">
      <Box width="700px" margin="0 auto" marginTop="80px">
        {children}
      </Box>
    </Box>
  )
}

export default Layout
