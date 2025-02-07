import React from "react"
import Wrapper from "../Wrapper"
import { SkillsType } from "../../types/Profile.interface"
import { Box } from "@chakra-ui/react"
import { ButtonColors } from "./mock/buttonColors"

interface SkillsProps {
  skills: {
    stack: SkillsType[]
  }
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <Wrapper title="💻 Skills">
      <Box
        display="flex"
        alignItems="center"
        gap="8px"
        marginTop="15px"
        flexWrap="wrap"
      >
        {skills.stack.map((skill, idx) => {
          const randomColor =
            ButtonColors[Math.floor(Math.random() * ButtonColors.length)]

          return (
            <Box
              key={idx}
              padding="8px 12px"
              backgroundColor={randomColor}
              borderRadius="999px"
            >
              {String(skill)}
            </Box>
          )
        })}
      </Box>
    </Wrapper>
  )
}

export default Skills
