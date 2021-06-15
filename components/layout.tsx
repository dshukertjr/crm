import { ReactElement } from 'react'

enum MenuItemType {
  people,
  organization,
  deals,
}

const Layout: React.FC<{ title: string }> = ({ children, title }): ReactElement => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex items-top justify-between">
        <div className="pt-2 pb-3 space-y-1 bg-indigo-400">
          <div className="h-8"></div>
          <MenuItem type={MenuItemType.people}></MenuItem>
          <MenuItem type={MenuItemType.organization}></MenuItem>
          <MenuItem type={MenuItemType.deals}></MenuItem>
        </div>

        <div className="flex-grow bg-white-900 overflow-y-scroll max-h-screen p-8">
          <main className="bg-white p-10 rounded-md">
            <h1 className="text-2xl mb-4">{title}</h1>
            <div>{children}</div>
          </main>
          <footer>footer</footer>
        </div>
      </div>
    </div>
  )
}

export default Layout

const MenuItem: React.FC<{ type: MenuItemType }> = ({ type }): ReactElement => {
  let icon
  let label
  switch (type) {
    case MenuItemType.people:
      label = 'People'
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      )
      break
    case MenuItemType.organization:
      label = 'Organizations'
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      )
      break
    case MenuItemType.deals:
      label = 'Deals'
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      )
      break
  }
  return (
    <a href="#" className="text-white px-4 py-2 text-base font-normal bg-indigo-500 flex">
      {icon}
      <span className="px-4">{label}</span>
    </a>
  )
}
