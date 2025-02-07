import React from "react"
import Wrapper from "../Wrapper"
import { Table } from "@chakra-ui/react"
import type { CertificatesType } from "../../types/Profile.interface"

interface CertificatesProps {
  certificates: CertificatesType[]
}

const Certificates = ({ certificates }: CertificatesProps) => {
  return (
    <Wrapper title="🪪 Certificates">
      <Table.Root borderCollapse="separate" borderSpacing="0 10px">
        <Table.Header>
          <Table.Row backgroundColor="gray.300">
            <Table.ColumnHeader
              width="45%"
              padding="15px"
              borderRadius="5px 0 0 5px"
            >
              지격증 이름
            </Table.ColumnHeader>
            <Table.ColumnHeader width="20%" padding="15px">
              취득 연도
            </Table.ColumnHeader>
            <Table.ColumnHeader
              width="35%"
              textAlign="end"
              padding="15px"
              borderRadius="0 5px 5px 0"
            >
              기관
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {certificates.map((certificate, idx) => (
            <Table.Row key={idx}>
              <Table.Cell padding="15px" borderRadius="5px 0 0 5px">
                {certificate.title}
              </Table.Cell>
              <Table.Cell padding="15px">{certificate.date}</Table.Cell>
              <Table.Cell
                padding="15px"
                borderRadius="0 5px 5px 0"
                textAlign="end"
              >
                {certificate.institution}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Wrapper>
  )
}

export default Certificates
