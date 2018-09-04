import React, { Component } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
import { userActions } from '../../actions/user.actions';
import LogoComponent from "../../components/Logo";
import { connect } from "react-redux";
import WidgetComponent from "../../components/Widget";
class LoginView extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());
    this.state = {
      activeTab: 'login',
      loginEmail: '',
      loginPassword: '',
      loginSubmitted: false,
    };
    this.formChange = this.formChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }
  formChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  loginSubmit(e) {
    e.preventDefault();
    // this.setState({ loginSubmitted: true });
    const { loginEmail, loginPassword } = this.state;
    const { dispatch } = this.props;
    if (loginEmail && loginPassword) {
      dispatch(userActions.login(loginEmail, loginPassword));
    }
  }
  render() {
    const { loggingIn } = this.props;
    const { loginEmail, loginPassword, loginSubmitted, } = this.state;
    return (

      <div className="container" style={{ marginTop: 10 + 'em' }}>
        <div className="row">
          <div className="col-lg-8 mb-4" style={{ marginLeft: 16 + 'em' }}>
            <WidgetComponent header='Log in' className='shadow-02 mb-8' excerpt='Please enter your account!'>
              <form form onSubmit={this.loginSubmit}>
                <div className={'form-group' + (loginSubmitted && !loginEmail ? ' has-error' : '')}>
                  <div className="col-12">
                    < label htmlFor="eamil">Email:</label>
                    <input type="email" name="loginEmail" className="form-control" value={loginEmail} onChange={this.formChange} placeholder="Enter email" autoComplete="off" required />
                    {loginSubmitted && !loginEmail &&
                      <div className="invalid-feedback">Email is required</div>
                    }
                  </div>
                </div>
                <div className={'form-group' + (loginSubmitted && !loginPassword ? ' has-error' : '')}>
                  <div className="col-12">
                    < label htmlFor="eamil">Password:</label>
                    <input type="password" name="loginPassword" className="form-control" value={loginPassword} onChange={this.formChange} placeholder="Password" autoComplete="off" required />
                    {loginSubmitted && !loginPassword &&
                      <div className="invalid-feedback">Password is required</div>
                    }
                  </div>
                  <div className="col-12" style={{ marginTop: 1 + 'em' }}>
                    <button type="submit" className="btn btn-outline-primary"><i class="fa fa-hand-o-up" aria-hidden="true"></i> Log in</button>&nbsp;&nbsp;&nbsp;
                      <a className="btn btn-outline-success" href="/register"><i class="fa fa-hand-o-right" aria-hidden="true"></i> Register</a>
                  </div>
                </div>
              </form>
            </WidgetComponent>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { layout } = state;
  return {
    layout
  };
}


const connectedLoginView = connect(mapStateToProps)(LoginView);
export { connectedLoginView as LoginView };