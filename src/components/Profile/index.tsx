import { Box, Image, Text } from "@chakra-ui/react"
import profile from "../../images/profile.webp"
import React from "react"
import type {
  ContactType,
  InformationType,
} from "../../types/Profile.interface"
import ContactCard from "./components/ContactCard"
import { FaGithub } from "react-icons/fa"
import { MdOutlineEmail, MdOutlinePhoneAndroid } from "react-icons/md"
import { FaSchool } from "react-icons/fa6"

interface HeaderProps {
  information: InformationType
  contact: ContactType
}

const Profile = ({ information, contact }: HeaderProps) => {
  return (
    <Box as="section" marginBottom="60px">
      <Text textStyle="3xl" fontWeight="600">
        {information.title}
      </Text>
      <Box
        display="flex"
        justifyContent="space-between"
        gap="40px"
        marginTop="30px"
      >
        <Box display="flex" flexDirection="column" gap="10px">
          <Box maxWidth="440px">
            <Text fontSize="20px" fontWeight="500" color="green.600">
              {information.subTitle}
            </Text>
            <Box
              backgroundColor="gray.300"
              margin="10px 0"
              borderRadius="md"
              padding="10px 12px"
              lineHeight="22px"
            >
              {information.description}
            </Box>
          </Box>

          <ContactCard text={contact.email} icon={<MdOutlineEmail />} />
          <ContactCard text={contact.github} icon={<FaGithub />} />
          <ContactCard text={contact.phone} icon={<MdOutlinePhoneAndroid />} />
          <ContactCard text={contact.school} icon={<FaSchool />} />
        </Box>
        <Image
          src={profile}
          width="210px"
          height="312px"
          backgroundColor="brown"
          borderRadius="md"
          alt="myProfile"
        />
      </Box>
    </Box>
  )
}

export default Profile
