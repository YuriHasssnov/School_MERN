import React, { Component } from 'react';
import { userActions } from '../../actions/user.actions';
import WidgetComponent from "../../components/Widget";
import { connect } from "react-redux";

class RegisterView extends Component {
    constructor(props) {
        super(props);
        // // reset login status
        // this.props.dispatch(userActions.logout());
        this.state = {
            registerusername: '',
            registerEmail: '',
            registerPassword: '',
            registerSubmitted: false,
        };
        this.formChange = this.formChange.bind(this);
        this.registerSubmit = this.registerSubmit.bind(this);
    }
    formChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    registerSubmit(e) {
        e.preventDefault();
        // this.setState({ registerSubmitted: true });
        const { registerusername, registerEmail, registerPassword } = this.state;
        const { dispatch } = this.props;

        dispatch(userActions.register(registerusername, registerEmail, registerPassword));

    }
    render() {
        const { registerEmail, registerPassword, registerSubmitted, registerusername } = this.state;
        return (
            <div className="container" style={{ marginTop: 10 + 'em' }}>
                <div className="row">
                    <div className="col-lg-8 mb-4" style={{ marginLeft: 16 + 'em' }}>
                        <WidgetComponent header='Register' className='shadow-02 mb-8' excerpt='Please enter your account!'>
                            <form onSubmit={this.registerSubmit}>
                                <div className="form-row">
                                    <div className="col-12">
                                        <label htmlFor="username">Username:</label>
                                        <input type="text" name="registerusername" className="form-control" value={registerusername} onChange={this.formChange} placeholder="Enter username" autoComplete="" required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="eamil">Email:</label>
                                        <input type="email" name="registerEmail" className="form-control" value={registerEmail} onChange={this.formChange} placeholder="Enter email" autoComplete="" required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="password">Password:</label>
                                        <input type="password" name="registerPassword" className="form-control" value={registerPassword} onChange={this.formChange} placeholder="Password" required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="username">Confirm Password:</label>
                                        <input type="password" className="form-control" placeholder="Repeat Password" />
                                    </div>
                                    <div className="col-12" style={{ marginTop: 1 + 'em' }}>
                                        <button type="submit" className="btn btn-outline-primary"><i class="fa fa-hand-o-up" aria-hidden="true"></i> Register</button>&nbsp;
                                        <a className="btn btn-outline-success" href="/login"><i class="fa fa-hand-o-right" aria-hidden="true"></i> login</a>
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
const connectedRegisterView = connect(mapStateToProps)(RegisterView);
export { connectedRegisterView as RegisterView };