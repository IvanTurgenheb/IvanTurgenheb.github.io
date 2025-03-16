import React from "react"
import { List, Text } from "@chakra-ui/react"
import { LuCircleCheck } from "react-icons/lu"
import useExperiences from "../hooks/useExperiences"

interface DescriptionsProps {
  description: string
}

const Descriptions = ({ description }: DescriptionsProps) => {
  const { inView, ref } = useExperiences()

  return (
    <List.Item
      ref={ref}
      color="blue.900"
      opacity={inView ? 1 : 0}
      transition="opacity 1s ease-in-out, color 0.5s ease-in-out"
    >
      <List.Indicator asChild color="green.500">
        <LuCircleCheck />
      </List.Indicator>
      <Text lineHeight="20px" fontWeight="600">
        {description}
      </Text>
    </List.Item>
  )
}

export default Descriptions
