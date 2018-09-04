import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";
import { authHeader } from "../../../helpers/auth-header";
import userService from '../../../services/school.service';
import Axios from 'axios';

class UserEditPage extends Component {
    constructor(props) {
        super(props);
        // this.userService = new userService();
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user: {
                username: '',
                email: '',
            }
        };
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.requestOptions = {
            method: 'GET',
            headers: authHeader()
        };

    }
    componentWillMount() {
        fetch('http://localhost:3003/user/edit' + this.props.match.params.id, this.requestOptions)
            .then(response => response.json())
            .then(response => {
                this.setState({ user: response.data })
            });
    }
    onChange = (e) => {
        const state = this.state.user
        state[e.target.name] = e.target.value;
        this.setState({ user: state });
    }

    onEditSubmit(e) {
        e.preventDefault();
        const { username, email } = this.state.user;
        const { dispatch } = this.props;
        if (username && email) {
            this.edit(username, email);
        }
    }
    edit(username, email) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email })
        };
        return fetch('http://localhost:3003/user/edit' + this.props.match.params.id, requestOptions)
            .then(response => {
                this.props.history.push("/users");
            })
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 10 + 'em' }}>
                <div className="row">
                    <div className="col-lg-8 mb-4" style={{ marginLeft: 16 + 'em' }}>
                        <WidgetComponent header='Edit User-Info' className='shadow-02 mb-8' excerpt='Would you please edit the user-info?'>
                            <form form onSubmit={this.onEditSubmit}>
                                <div className={'form-group'}>
                                    <div className="col-12">
                                        < label htmlFor="eamil">User Name:</label>
                                        <input type="text" name="username" className="form-control" value={this.state.user.username} onChange={this.onChange} autoComplete="off" required />
                                    </div>
                                </div>
                                <div className={'form-group'}>
                                    <div className="col-12">
                                        < label htmlFor="eamil">Email:</label>
                                        <input type="email" name="email" className="form-control" value={this.state.user.email} onChange={this.onChange} autoComplete="off" required />
                                    </div>
                                </div>
                                <div className={'form-group'}>
                                    <div className="col-12" style={{ marginTop: 1 + 'em' }}>
                                        <input type="submit" value="Edit" className="btn btn-outline-primary" />&nbsp;&nbsp;
                                        <a className="btn btn-outline-danger" href="/users">cancel</a>
                                    </div>
                                </div>
                            </form>
                        </WidgetComponent>
                    </div>
                </div >
            </div >
        );
    }

}
export default UserEditPage;