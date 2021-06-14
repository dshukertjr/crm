import { ReactElement } from 'react'

const Layout: React.FC<{ title: string }> = ({ children, title }): ReactElement => {
  return (
    <div>
      <main>
        <h1>{title}</h1>
        <div>{children}</div>
      </main>

      <footer>footer</footer>
    </div>
  )
}

export default Layout
