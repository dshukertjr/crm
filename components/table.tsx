import { ReactElement } from 'react'

const Table: React.FC<{ data: { [key: string]: string | number }[] }> = ({
  data,
}): ReactElement => {
  const keys = Object.keys(data[0])
  return (
    <table className="w-full">
      <thead className="bg-indigo-100">
        <tr>
          {keys.map((key) => (
            <TableData key={key}>{key}</TableData>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr className="border-b-2 border-indigo-50" key={Object.values(row)[0]}>
            {keys.map((key) => (
              <TableData key={row[key]}>{row[key]}</TableData>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table

const TableData: React.FC = ({ children }): ReactElement => {
  return <td className="py-2 px-4">{children}</td>
}
