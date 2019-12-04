import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="nav-left-sidebar sidebar-dark">
      <div className="menu-list">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li className="nav-divider">Menu</li>
              <li className="nav-item">
                <Link href="/admin">
                  <a className="nav-link active"><i className="fa fa-fw fa-user-circle"></i>Dashboard <span className="badge badge-success">6</span></a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/post">
                <a className="nav-link"><i className="fa fa-fw fa-rocket"></i>Post</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/category">
                  <a className="nav-link"><i className="fas fa-fw fa-chart-pie"></i>Category</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
