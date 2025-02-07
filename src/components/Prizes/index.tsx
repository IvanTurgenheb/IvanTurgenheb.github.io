import { Table } from "@chakra-ui/react"
import React from "react"
import type { PrizeType } from "../../types/Profile.interface"
import Wrapper from "../Wrapper"

interface PrizesProps {
  prizes: PrizeType[]
}

const Prizes = ({ prizes }: PrizesProps) => {
  console.log("prizes", prizes)
  return (
    <Wrapper title="Prizes">
      <Table.Root borderCollapse="separate" borderSpacing="0 10px">
        <Table.Header>
          <Table.Row backgroundColor="gray.300">
            <Table.ColumnHeader
              width="45%"
              padding="15px"
              borderRadius="5px 0 0 5px"
            >
              수상 이름
            </Table.ColumnHeader>
            <Table.ColumnHeader width="20%" padding="10px">
              수상 연도/날짜
            </Table.ColumnHeader>
            <Table.ColumnHeader
              width="35%"
              textAlign="end"
              padding="10px"
              borderRadius="0 5px 5px 0"
            >
              수상 기관
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {prizes.map((prize, idx) => (
            <Table.Row key={idx}>
              <Table.Cell padding="15px" borderRadius="5px 0 0 5px">
                {prize.title}
              </Table.Cell>
              <Table.Cell padding="15px">{prize.date}</Table.Cell>
              <Table.Cell
                padding="15px"
                borderRadius="0 5px 5px 0"
                textAlign="end"
              >
                {prize.institution}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Wrapper>
  )
}

export default Prizes
