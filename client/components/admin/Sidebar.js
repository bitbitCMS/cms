import Navigation from './Navigation'
import navigation from 'navigationConfig'

const Sidebar = () => {
  return (
    <div className="nav-left-sidebar sidebar-dark">
      <div className="menu-list">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navigation navigation={navigation} />
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
