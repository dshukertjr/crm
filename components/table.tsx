import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { supabase } from '../lib/api'

const Table: React.FC<{
  header: { key: string; label: string }[]
  data?: { [key: string]: string | number }[]
}> = ({ data, header }): ReactElement => {
  if (!data) {
    return <div>loading</div>
  }
  const keys = header.map((head) => head.key)

  const deletePerson = async (personId: string): Promise<void> => {
    const res = confirm('Are you sure you want to delete this person?')
    if (res) {
      await supabase.from('people').delete().eq('id', personId)
    }
  }
  return (
    <table className="w-full">
      <thead className="bg-indigo-100">
        <tr>
          {keys.map((key) => (
            <TableData key={key}>{key}</TableData>
          ))}
          <TableData></TableData>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr className="border-b-2 border-indigo-50" key={Object.values(row)[0]}>
            {keys.map((key) => (
              <TableData key={row[key]}>{row[key]}</TableData>
            ))}
            <TableData>
              <div className="flex justify-around">
                <Link href={`/edit-person/${row.id}`}>
                  <a className="text-base text-gray-300 transition-colors hover:text-black">
                    <PencilAltIcon className="w-6 h-6"></PencilAltIcon>
                  </a>
                </Link>
                <button
                  onClick={() => deletePerson(row.id as string)}
                  className="text-base text-gray-300 transition-colors hover:text-black"
                >
                  <TrashIcon className="w-6 h-6"></TrashIcon>
                </button>
              </div>
            </TableData>
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
