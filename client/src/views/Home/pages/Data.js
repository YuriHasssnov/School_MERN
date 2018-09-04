import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";

class DataPage extends Component {
    render() {
        return (
            <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out" >
                <div className="row">
                    <div className="col-lg-12 mb-3">
                        <WidgetComponent header='User-Table' className='shadow-01' excerpt='Would you like to Edit or Delete Users please ?'>
                            <table className="table table-stripped">
                                <thead>
                                    <tr>
                                        <th>Year</th>
                                        <th>Week</th>
                                        <th>Month</th>
                                        <th>Electricity, €</th>
                                        <th>Electricity, kWH</th>
                                        <th>Heating, €</th>
                                        <th>Heating, kWH</th>
                                        <th>Water, €</th>
                                        <th>Water, litres</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>2017</th>
                                        <td>36</td>
                                        <td>September</td>
                                        <td>123</td>
                                        <td>234</td>
                                        <td>345</td>
                                        <td>456</td>
                                        <td>567</td>
                                        <td>678</td>
                                        <td>
                                            <a className="btn btn-outline-success"><i class="fa fa-edit" aria-hidden="true"></i></a>&nbsp;&nbsp;
                                            <a className="btn btn-outline-danger"><i class="fa fa-remove" aria-hidden="true"></i></a>
                                            {/* <Link to={`/users/${users.id}`} className="btn btn-primary">Edit</Link>
                                            <a onClick={onDelete.bind(this, users)} className="btn btn-danger">Delete</a> */}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>2018</th>
                                        <td>36</td>
                                        <td>September</td>
                                        <td>123</td>
                                        <td>234</td>
                                        <td>345</td>
                                        <td>456</td>
                                        <td>567</td>
                                        <td>678</td>
                                        <td>
                                            <a className="btn btn-outline-success"><i class="fa fa-edit" aria-hidden="true"></i></a>&nbsp;&nbsp;
                                            <a className="btn btn-outline-danger"><i class="fa fa-remove" aria-hidden="true"></i></a>
                                            {/* <Link to={`/users/${users.id}`} className="btn btn-primary">Edit</Link>
                                            <a onClick={onDelete.bind(this, users)} className="btn btn-danger">Delete</a> */}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </WidgetComponent>
                    </div>
                </div>
            </div>
        );
    }
}
export default DataPage;
