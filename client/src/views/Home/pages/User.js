import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";
import axios from 'axios';
import TableRow from './TableRow';

class UsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', users: [] };
    }
    componentWillMount() {
        axios.get('http://127.0.0.1:3003/user')
            .then(response => {
                this.setState({ users: response.data.data.docs });                
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        if (this.state.users instanceof Array) {
            return this.state.users.map(function (object, i) {
                return <TableRow obj={object} key={i} />;
            })
        }
    }
    render() {
        return (
            
                <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out" >
                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <WidgetComponent header='User-Table' className='table-responsive-sm' excerpt='Would you like to Edit or Delete Users please ?'>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>User Name</th>
                                            <th>Email</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.tabRow()}
                                    </tbody>
                                </table>
                            </WidgetComponent>
                        </div>
                    </div>
                </div>
                
        );
    }
}
export default UsersPage;
