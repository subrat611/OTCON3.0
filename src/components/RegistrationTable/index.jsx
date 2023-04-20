import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { RegistrationFee } from "../../constants";

import "./registrationtable.scss";

export default function RegistrationTable() {
  return (
    <TableContainer className="table-wrapper">
      <Table size="md" className="table">
        {RegistrationFee.thead.map((tableHead, i) => (
          <Thead className="table-head-container" key={i}>
            <Tr>
              {tableHead.th.map((data, i) => (
                <Th className="table-head" key={i}>
                  {data}
                </Th>
              ))}
            </Tr>
          </Thead>
        ))}
        <Tbody>
          {RegistrationFee.tableBody.map((tr, i) => (
            <Tr key={i}>
              {tr.data.map((td, i) => (
                <Td key={i}>
                  {td === "Regular (31st Jan, 2023)" ? (
                    <strong>{td}</strong>
                  ) : (
                    td
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
        <Tfoot className="table-footer">
          {RegistrationFee.tableFooter.map((tr, i) => (
            <Tr key={i}>
              {tr.data.map((th, i) => (
                <Th key={i} className="table-footer-th">
                  {th}
                </Th>
              ))}
            </Tr>
          ))}
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
