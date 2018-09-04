import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";
import { authHeader } from "../../../helpers/auth-header";
import { Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';


class SchoolPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schooldata: []
        };
        this.requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
    }

    componentWillMount() {
        this.loadSchoolData();
        console.log("YURI++++++++++++04")

    }

    loadSchoolData() {
        fetch('http://Localhost:3003/schooldata/get-data', this.requestOptions)
            .then(response => response.json())
            .then(response => {
                let data = response.data;
                this.setState({ schooldata: data })
            });
    }

    delete(id) {
        fetch('http://Localhost:3003/schooldata/delete-data/' + id, { method: 'delete' }, this.requestOptions)
            .then(response => {
                // this.props.history.push("/")
                window.location.reload();
            });
    }

    render() {
        const schooldata1 = this.state.schooldata.map((item, i) => {
            return <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.year}</td>
                <td>{item.week}</td>
                <td>{item.month}</td>
                <td>{item.elecEuro}</td>
                <td>{item.elecKwh}</td>
                <td>{item.heatEuro}</td>
                <td>{item.heatKwh}</td>
                <td>{item.waterEuro}</td>
                <td>{item.waterLitres}</td>
                <td>
                    <div className="btn-toolbar button-center">
                        <Link to={`/editData/${item._id}`} className="btn btn-outline-success">Edit</Link>&nbsp;
                      <button onClick={this.delete.bind(this, item._id)} className="btn btn-outline-danger button-margin">Delete</button>
                    </div>

                </td>
            </tr>
        });

        return (
            <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out" >
                <div className="row">
                    <div className="col-lg-12 mb-3">
                        <WidgetComponent header='SchoolData-Table' className='table-responsive-sm' excerpt='Would you like to Edit or Delete Data please ?'>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Year</th>
                                        <th>Week</th>
                                        <th>Month</th>
                                        <th>Electricity(€)</th>
                                        <th>Electricity(kWh)</th>
                                        <th>Heating(€)</th>
                                        <th>Heating(kWh)</th>
                                        <th>Water(€)</th>
                                        <th>Water(litres)</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {schooldata1}
                                </tbody>
                            </table>
                        </WidgetComponent>
                    </div>
                </div>
            </div>

        );
    }
}
export default SchoolPage;
