import React from "react"
import type { ExperiencesType } from "../../types/Profile.interface"
import { Box, Image, List, Text } from "@chakra-ui/react"
import Wrapper from "../Wrapper"
import useExperiences from "./hooks/useExperiences"
import Descriptions from "./components/descriptions"

interface ExperiencesProps {
  experiences: ExperiencesType[]
}

const Experiences = ({ experiences }: ExperiencesProps) => {
  const { isLessThan700 } = useExperiences()

  return (
    <Wrapper title="🛠️ Experiences" style={{ marginBottom: "40px" }}>
      {experiences.map((experience, idx) => (
        <Box
          key={idx}
          display="flex"
          flexDirection={isLessThan700 ? "column" : "row"}
          gap="35px"
          marginTop="15px"
          marginBottom="20px"
        >
          <Box
            display="flex"
            flexDirection={isLessThan700 ? "row" : "column"}
            gap="10px"
            alignItems={isLessThan700 ? "center" : "none"}
            width={isLessThan700 ? "100%" : "94px"}
          >
            <Text
              fontSize={isLessThan700 ? "20px" : "18px"}
              fontWeight="600"
              width={isLessThan700 ? "100px" : "none"}
            >
              {experience.date}
            </Text>
            <Image
              width={isLessThan700 ? "70px" : "94px"}
              height={isLessThan700 ? "70px" : "94px"}
              borderRadius="md"
              src={experience.imgUrl}
              alt="experience_image"
            />
            <Box display="flex" flexDirection="column" gap="8px">
              <Text
                padding="8px 12px"
                borderRadius="99px"
                backgroundColor="gray.300"
                textStyle="27px"
                fontWeight="500"
                textAlign="center"
                fontSize={isLessThan700 ? "15px" : "16px"}
              >
                {experience.title}
              </Text>
              {experience.githubLink && (
                <Box
                  padding={isLessThan700 ? "8px 12px" : "6px 7px"}
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
          </Box>
          <Box maxWidth="550px">
            <Text fontSize="18px">{experience.subTitle}</Text>
            <List.Root
              gap="20px"
              variant="plain"
              align="center"
              marginTop="30px"
            >
              {experience.descriptions.map((description, idx) => (
                <Descriptions key={idx} description={description} />
              ))}
            </List.Root>
          </Box>
        </Box>
      ))}
    </Wrapper>
  )
}

export default Experiences
