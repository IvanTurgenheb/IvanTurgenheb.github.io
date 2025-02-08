import { Box, Text } from "@chakra-ui/react"
import React from "react"
import { isLink } from "../utils"

interface ContactCardProps {
  text: string
  icon?: React.ReactNode
}

const ContactCard = ({ text, icon }: ContactCardProps) => {
  return (
    <Box
      maxWidth="440px"
      backgroundColor="gray.200"
      borderRadius="md"
      padding="10px 12px"
      height="42px"
      display="flex"
      alignItems="center"
      gap="10px"
    >
      <Text width="20px">{icon}</Text>

      {isLink(text) ? (
        <a href={text as string} rel="noopener noreferrer" target="_blank">
          {text}
        </a>
      ) : (
        <Text marginTop="2px">{text}</Text>
      )}
    </Box>
  )
}

export default ContactCard
