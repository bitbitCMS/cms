import NavBar from 'components/admin/Navbar'
import Sidebar from 'components/admin/Sidebar'
import Footer from 'components/admin/Footer'

const AppLayout = ({ children }) => {
  return (
    <div className="dashboard-main-wrapper">
      <NavBar />
      <Sidebar />
      <div className="dashboard-wrapper">
        <div className="dashboard-ecommerce">
          <div className="container-fluid dashboard-content">
            {children}
            </div>
          </div>
        <Footer />
      </div>
    </div>
  )
}

export default AppLayout
