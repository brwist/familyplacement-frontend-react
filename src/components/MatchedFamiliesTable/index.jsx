import React from 'react'
import { useHistory } from 'react-router-dom'
import { FormGroup, Input, Table } from 'reactstrap'
import './index.scss'

const MatchedFamiliesTable = ({ data, tableOf }) => {
  const history = useHistory()

  return (
    <Table borderless className="table">
      <tbody>
        {data.map(({ name, country, createdAt, _id: id }) => (
          <tr key={id}>
            <td>
              <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck" />
              </FormGroup>
            </td>
            <th
              scope="row"
              onClick={() => history.push(`/${tableOf}?id=${id}`)}
            >
              {id}
            </th>
            <td>{name}</td>
            <td>{country}</td>
            <td>{createdAt}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default MatchedFamiliesTable
