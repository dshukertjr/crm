import React, { ReactElement } from 'react'
import Link from 'next/link'
import { BriefcaseIcon, OfficeBuildingIcon, UserIcon } from '@heroicons/react/outline'

enum MenuItemType {
  people,
  organization,
  deals,
}

const Layout: React.FC<{ title: string; cta?: ReactElement }> = ({
  children,
  title,
  cta,
}): ReactElement => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex items-top justify-between">
        <div className="bg-indigo-400 min-h-screen">
          <div className="h-8"></div>
          <MenuItem type={MenuItemType.people}></MenuItem>
          <MenuItem type={MenuItemType.organization}></MenuItem>
          <MenuItem type={MenuItemType.deals}></MenuItem>
        </div>

        <div className="flex-grow bg-white-900 overflow-y-scroll max-h-screen p-8">
          <main className="bg-white p-10 rounded-md">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl mb-4">{title}</h1>
              {cta}
            </div>
            <div>{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout

const MenuItem: React.FC<{ type: MenuItemType }> = ({ type }): ReactElement => {
  let icon
  let label
  let href = '/'
  switch (type) {
    case MenuItemType.people:
      label = 'People'
      href = '/'
      icon = <UserIcon className="w-6 h-6"></UserIcon>
      break
    case MenuItemType.organization:
      label = 'Organizations'
      href = '/organinzations'
      icon = <OfficeBuildingIcon className="w-6 h-6"></OfficeBuildingIcon>
      break
    case MenuItemType.deals:
      label = 'Deals'
      href = '/deals'
      icon = <BriefcaseIcon className="w-6 h-6"></BriefcaseIcon>
      break
  }
  return (
    <Link href={href}>
      <a className="mb-2 text-white px-4 py-2 text-base font-normal hover:bg-indigo-500 transition-colors flex items-center">
        {icon}
        <span className="px-4">{label}</span>
      </a>
    </Link>
  )
}
