import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Collapse } from 'reactstrap';
import { authHeader } from "../../helpers/auth-header";

class MainNavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolname: [],
      showNavItem: { root: 0, sub: 0 }
    };
    this.requestOptions = {
      method: 'GET',
      headers: authHeader()
    };
  }

  menuToggle(e) {
    let navRoot = +e.currentTarget.dataset.navRoot || 0;
    let navSub = +e.currentTarget.dataset.navSub || 0;

    if (this.state.showNavItem.root === navRoot && navSub === 0) {
      this.setState({ showNavItem: { root: 0, sub: 0 } });
    } else if (this.state.showNavItem.sub >= navSub) {
      this.setState({ showNavItem: { root: navRoot, sub: --navSub } });
    } else {
      this.setState({ showNavItem: { root: navRoot, sub: navSub } });
    }
  }

  componentWillMount() {
    console.log("Yuri-------6");
    this.loadSchoolNames();
  }

  loadSchoolNames() {
    fetch('http://localhost:3003/schoolname/get', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        this.setState({ schoolname: response.data })
      });
  }

  render() {

    const schoolnames = this.state.schoolname.map(function (item, i) {
      return <li key={item._id} className="nav-item">
        <Link className="nav-link" to={`/school/${item._id}`} >
          <i className="fa fa-star" aria-hidden="true" />
          <span className="d-none d-lg-inline">{item.name}</span>
        </Link>
      </li>
    })

    //   return <li className="nav-item" key={item._id}>
    //     <a className="nav-link nav-level-1" onClick={this.menuToggle.bind(this)} aria-expanded={this.state.showNavItem.sub > 0}
    //       data-nav-root="1" data-nav-sub="1"><i class="fa fa-star" aria-hidden="true"></i>
    //       {item.name}
    //     </a>
    //     <Collapse isOpen={this.state.showNavItem.sub > 0} tag="ul" className="nav flex-column">
    //       <li className="nav-item">
    //         <Link className="nav-link" to={`${process.env.PUBLIC_URL}/data`}>
    //           <span className="d-none d-lg-inline"><h5><i class="fa fa-book" aria-hidden="true"></i>Data</h5></span>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to={`${process.env.PUBLIC_URL}/users`}>
    //           <span className="d-none d-lg-inline"><h5><i class="fa fa-bar-chart" aria-hidden="true"></i>Chart</h5></span>
    //         </Link>
    //       </li>
    //     </Collapse>
    //   </li>
    // })


    return (
      <nav className="sidebar-nav">
        <div className="mb-1 text-uppercase d-none d-lg-block text-immuted">
          <small>School Management</small>
        </div>
        <ul id="sidebarNav" className="nav nav-dark flex-column">
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/save`}>
              <span className="d-none d-lg-inline"><h5><i class="fa fa-keyboard-o" aria-hidden="true"></i>Save new data</h5></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/add`}>
              <span className="d-none d-lg-inline"><h5><i class="fa fa-futbol-o" aria-hidden="true"></i>Add new school</h5></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/send`}>
              <span className="d-none d-lg-inline"><h5><i class="fa fa-envelope" aria-hidden="true"></i>Send charts to Email</h5></span>
            </Link>
          </li>
          <div className="mb-1 text-uppercase d-none d-lg-block text-immuted">
            <small>&nbsp;&nbsp;User Management</small>
          </div>
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/users`}>
              <span className="d-none d-lg-inline"><h5><i class="fa fa-user-o" aria-hidden="true"></i>User-List</h5></span>
            </Link>
          </li>
          <div className="mb-1 text-uppercase d-none d-lg-block text-immuted">
            <small>&nbsp;&nbsp;Added-School-List</small>
          </div>
          {schoolnames}
          {/* <li className="nav-item">
            <a className="nav-link nav-level-1" onClick={this.menuToggle.bind(this)} aria-expanded={this.state.showNavItem.sub > 0}
              data-nav-root="1" data-nav-sub="1"><i class="fa fa-star" aria-hidden="true"></i>
              School Name
                </a>
            <Collapse isOpen={this.state.showNavItem.sub > 0} tag="ul" className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to={`${process.env.PUBLIC_URL}/data`}>
                  <span className="d-none d-lg-inline"><h5><i class="fa fa-book" aria-hidden="true"></i>Data</h5></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${process.env.PUBLIC_URL}/users`}>
                  <span className="d-none d-lg-inline"><h5><i class="fa fa-bar-chart" aria-hidden="true"></i>Chart</h5></span>
                </Link>
              </li>
            </Collapse>
          </li> */}
          {/* <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/dashboard`}>
              <i className="fa fa-tachometer" aria-hidden="true" />
              <span className="d-none d-lg-inline">Dashboards</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/charts`}>
              <i className="fa fa-pie-chart" aria-hidden="true" />
              <span className="d-none d-lg-inline">Charts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/widgets`}>
              <i className="fa fa-list" aria-hidden="true" />
              <span className="d-none d-lg-inline">Widgets</span>
              <Badge color="success" className='text-uppercase float-right d-none d-lg-block'>New</Badge>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/tables`}>
              <i className="fa fa-table" aria-hidden="true" />
              <span className="d-none d-lg-inline">Users</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/grid`}>
              <i className="fa fa-th" aria-hidden="true" />
              <span className="d-none d-lg-inline">Grid</span>
              <Badge color="danger" className='text-uppercase float-right d-none d-lg-block'>Hot</Badge>
            </Link>
          </li>
        </ul> */}

          {/* <div className="mt-4 mb-1 text-uppercase d-none d-lg-block text-muted">
            <small>Extras</small>
          </div>
          <ul className="nav nav-dark flex-column">
            <li className="nav-item">
              <a className="nav-link" onClick={this.menuToggle.bind(this)} aria-expanded={this.state.showNavItem.root === 2}
                data-nav-root="2">
                <i className="fa fa-files-o" aria-hidden="true" />
                <span className="d-none d-lg-inline">Pages</span>
              </a>
              <Collapse isOpen={this.state.showNavItem.root === 2} tag="ul" className="nav flex-column bg-dark">
                <li className="nav-item">
                  <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/login`}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/404`}>404 Error</Link>
                </li>
              </Collapse>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={this.menuToggle.bind(this)} aria-expanded={this.state.showNavItem.root === 3}
                data-nav-root="3">
                <i className="fa fa-suitcase" aria-hidden="true" />
                <span className="d-none d-lg-inline">UI Elements</span>
              </a>
              <Collapse isOpen={this.state.showNavItem.root === 3} tag="ul" className="nav flex-column bg-dark">
                <li className="nav-item">
                  <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/buttons`}>Buttons</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/typography`}>Typography</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/icons`}>Icons</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/navs`}>Navs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/badges`}>Badges, Labels</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/progress`}>Progress</Link>
                </li>
              </Collapse>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`${process.env.PUBLIC_URL}/forms`}>
                <i className="fa fa-id-card" aria-hidden="true" />
                <span className="d-none d-lg-inline">Forms</span>
              </Link>
            </li>
          </ul> */}
        </ul>
      </nav >
    );
  }
}

export default MainNavComponent;
