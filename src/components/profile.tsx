import { Box, Image, Text } from "@chakra-ui/react"
import profile from "../images/profile.png"
import React from "react"

interface HeaderProps {
  title: string
}

const Profile = ({ title }: HeaderProps) => {
  return (
    <Box as="section">
      <Text textStyle="3xl" fontWeight="600">
        {title}
      </Text>
      <Box
        display="flex"
        justifyContent="space-between"
        gap="50px"
        marginTop="30px"
      >
        <Box display="flex" flexDirection="column" gap="10px">
          <Box>
            <Text fontSize="20px" fontWeight="500" color="green.600">
              FrontEnd Dev
            </Text>
            <Box
              backgroundColor="gray.300"
              margin="10px 0"
              borderRadius="md"
              padding="10px 12px"
              lineHeight="22px"
            >
              긍정적인 에너지와 유연한 마인드를 바탕으로 성장하는 20살
              프론트엔드 개발자입니다.
            </Box>
          </Box>
          {Array.from({ length: 3 }).map(() => (
            <Box
              backgroundColor="gray.200"
              borderRadius="md"
              padding="10px 12px"
              lineHeight="22px"
            >
              sdfsdf
            </Box>
          ))}
        </Box>

        <Image
          src={profile}
          width="210px"
          height="260px"
          backgroundColor="brown"
          borderRadius="md"
        />
      </Box>
    </Box>
  )
}

export default Profile
