import React from "react"
import type { ExperiencesType } from "../../types/Profile.interface"
import { Box, Image, List, Text } from "@chakra-ui/react"
import { LuCircleCheck } from "react-icons/lu"
import Wrapper from "../Wrapper"

interface ExperiencesProps {
  experiences: ExperiencesType[]
}

const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <Wrapper title="🛠️ Experiences" style={{ marginBottom: "40px" }}>
      {experiences.map((experience, idx) => (
        <Box
          key={idx}
          display="flex"
          gap="35px"
          marginTop="15px"
          marginBottom="20px"
        >
          <Box display="flex" flexDirection="column" gap="10px" width="94px">
            <Text fontSize="18px" fontWeight="600">
              {experience.date}
            </Text>
            <Image
              width="94px"
              height="94px"
              borderRadius="md"
              src={experience.imgUrl}
              alt="experience_image"
            />
            <Text
              padding="8px 12px"
              borderRadius="99px"
              backgroundColor="gray.300"
              textStyle="27px"
              fontWeight="500"
              textAlign="center"
            >
              {experience.title}
            </Text>
            {experience.githubLink && (
              <Box
                padding="6px 7px"
                borderRadius="99px"
                backgroundColor="blue.200"
                fontWeight="500"
                textAlign="center"
              >
                <a
                  href={experience.githubLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ fontSize: "15px" }}
                >
                  깃허브 Link
                </a>
              </Box>
            )}
          </Box>
          <Box>
            <Text fontSize="18px">{experience.subTitle}</Text>
            <List.Root gap="2" variant="plain" align="center" marginTop="30px">
              {experience.descriptions.map(description => (
                <List.Item>
                  <List.Indicator asChild color="green.500">
                    <LuCircleCheck />
                  </List.Indicator>
                  <Text lineHeight="20px" fontWeight="600">
                    {description}
                  </Text>
                </List.Item>
              ))}
            </List.Root>
          </Box>
        </Box>
      ))}
    </Wrapper>
  )
}

export default Experiences
