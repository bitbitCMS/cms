const Header = () => {
  return 'Ini Adalah Header'
}

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}

export default AppLayout
