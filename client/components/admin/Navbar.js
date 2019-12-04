const NavBar = () => {
  return (
    <div className="dashboard-header">
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <a className="navbar-brand" href="index.html">Bitbit CMS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right-top">
            <li className="nav-item">
              <div id="custom-search" className="top-search-bar">
                <input className="form-control" type="text" placeholder="Search.." />
              </div>
            </li>
            <li className="nav-item dropdown notification">
              <a className="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-fw fa-bell"></i> <span className="indicator"></span></a>
              <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                <li>
                  <div className="notification-title"> Notification</div>
                  <div className="notification-list">
                    <div className="list-group">
                      <a href="#" className="list-group-item list-group-item-action active">
                        <div className="notification-info">
                          <div className="notification-list-user-img"><img src="/static/images/avatar-2.jpg" alt="" className="user-avatar-md rounded-circle" /></div>
                          <div className="notification-list-user-block"><span className="notification-list-user-name">Jeremy Rakestraw</span>accepted your invitation to join the team.
                                                        <div className="notification-date">2 min ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item list-group-item-action">
                        <div className="notification-info">
                          <div className="notification-list-user-img"><img src="/static/images/avatar-3.jpg" alt="" className="user-avatar-md rounded-circle" /></div>
                          <div className="notification-list-user-block"><span className="notification-list-user-name">John Abraham </span>is now following you
                                                        <div className="notification-date">2 days ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item list-group-item-action">
                        <div className="notification-info">
                          <div className="notification-list-user-img"><img src="/static/images/avatar-4.jpg" alt="" className="user-avatar-md rounded-circle" /></div>
                          <div className="notification-list-user-block"><span className="notification-list-user-name">Monaan Pechi</span> is watching your main repository
                                                        <div className="notification-date">2 min ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item list-group-item-action">
                        <div className="notification-info">
                          <div className="notification-list-user-img"><img src="/static/images/avatar-5.jpg" alt="" className="user-avatar-md rounded-circle" /></div>
                          <div className="notification-list-user-block"><span className="notification-list-user-name">Jessica Caruso</span>accepted your invitation to join the team.
                                                        <div className="notification-date">2 min ago</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list-footer"> <a href="#">View all notifications</a></div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown connection">
              <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-fw fa-th"></i> </a>
              <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
                <li className="connection-list">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                      <a href="#" className="connection-item"><img src="/static/images/github.png" alt="" /> <span>Github</span></a>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                      <a href="#" className="connection-item"><img src="/static/images/dribbble.png" alt="" /> <span>Dribbble</span></a>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                      <a href="#" className="connection-item"><img src="/static/images/dropbox.png" alt="" /> <span>Dropbox</span></a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                      <a href="#" className="connection-item"><img src="/static/images/bitbucket.png" alt="" /> <span>Bitbucket</span></a>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                      <a href="#" className="connection-item"><img src="/static/images/mail_chimp.png" alt="" /><span>Mail chimp</span></a>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                      <a href="#" className="connection-item"><img src="/static/images/slack.png" alt="" /> <span>Slack</span></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="conntection-footer"><a href="#">More</a></div>
                </li>
              </ul>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
