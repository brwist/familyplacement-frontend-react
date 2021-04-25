import React from 'react'
import { Table } from 'reactstrap'
import './index.scss'
import { useHistory } from 'react-router-dom'

const CustomTable = ({ thead, data, tableOf }) => {
  const history = useHistory()

  return (
    <Table borderless className="table">
      <thead className="table-head">
        <tr>
          {thead.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, country, createdAt, families, id }) => (
          <tr key={id}>
            <th scope="row" onClick={() => history.push(`/${tableOf}?id=${id}`)}>
              {id}
            </th>
            <td>{name}</td>
            {thead.length > 4 && <td>{families}</td>}
            <td>{country}</td>
            <td>{createdAt}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default CustomTable
