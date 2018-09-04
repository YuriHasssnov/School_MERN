import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";
import { authHeader } from "../../../helpers/auth-header";
import { Link } from 'react-router-dom';
class EditDataPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            schooldata: [],
            schoolData: {
                _id: '', shoolname_id: '', year: '', week: '', month: '', elecEuro: '', elecKwh: '', heatEuro: '',
                heatKwh: '', waterEuro: '', waterLitres: '',
            },
            months: [
                { id: 1, month: 'Jan' }, { id: 2, month: 'Feb' }, { id: 3, month: 'Mar' }, { id: 4, month: 'Apr' },
                { id: 5, month: 'May' }, { id: 6, month: 'June' }, { id: 7, month: 'July' }, { id: 8, month: 'Aug' },
                { id: 9, month: 'Sep' }, { id: 10, month: 'Oct' }, { id: 11, month: 'Nob' }, { id: 12, month: 'Dec' }
            ],
            value: '0',
            schooldata: {
                year: '',
                month: '',
                elecEuro: '',
                elecKwh: '',
                heatEuro: '',
                heatKwh: '',
                waterEuro: '',
                waterLitres: ''
            }
        };

        this.onEditDataSubmit = this.onEditDataSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
    }
    componentWillMount() {
        fetch('http://localhost:3003/schooldata/editData/' + this.props.match.params.id, this.requestOptions)
            .then(response => response.json())
            .then(response => {
                this.setState({ schoolData: response.data })
            });
    }

    // schoolChoice() {
    //     if (this.state.schools instanceof Array) {
    //         return this.state.schools.map(function (school, i) {
    //             return <option value={school._id} id={school._id} key={i}>{school.name}</option>;
    //         })
    //     }
    // }
    yearChoice() {
        var years = [];
        var i = 0;
        for (let year = 2010; year < 2020; year++) {
            years[i] = year;
            i++;
        }
        return years.map(function (year, i) {
            return <option value={year} key={i}>{year}</option>;
        })
    }

    weekChoice() {
        var weeks = [];
        var i = 0;
        for (let week = 1; week < 55; week++) {
            weeks[i] = week;
            i++;
        }
        return weeks.map(function (week, i) {
            return <option value={week} key={i}>{week}</option>;
        })
    }
    monthChoice() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months.map(function (month, i) {
            return <option value={i + 1} key={i}>{month}</option>;
        })
    }

    onChange(event) {
        const state = Object.assign({}, this.state.schooldata);
        state[event.target.name] = event.target.value;
        this.setState({ schooldata: state });
    }

    onEditDataSubmit(event) {
        event.preventDefault();
        const schoolData = this.state.schoolData;
        if (schoolData) {
            this.update(schoolData);
        }
    }

    update(schoolData) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ schoolData })
        };
        return fetch('http://Localhost:3003/schooldata/updateData' + this.props.match.params.id, requestOptions)
            .then(response => {
                window.location.reload();
                this.props.history.push("/");
            })
    }


    render() {
        const schoolData = this.state.schoolData;
        return (
            <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">
                <div className="row">
                    <div className="col-lg-12 mb-3">
                        <WidgetComponent header='Save new data' className='shadow-01 mb-4' excerpt='Please enter the items correctly!'>
                            <form className="container" onSubmit={this.onEditDataSubmit}>
                                {/* <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputState" className="col-form-label">School:</label>
                                        <select name="_id" onChange={this.onChange} value={schoolData.schoolname_id} className="form-control" required>
                                            <option value='0'>Select</option>
                                            {this.schoolChoice}
                                        </select>
                                    </div>
                                </div> */}
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputYear" className="col-form-label">Year:</label>
                                        <select name="year" onChange={this.onChange} value={schoolData.year} className="form-control">
                                            <option value="0">Select</option>
                                            {this.yearChoice()}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputWeek" className="col-form-label">Week:</label>
                                        <select name="week" onChange={this.onChange} value={schoolData.week} className="form-control">
                                            <option value="0">Select</option>
                                            {this.weekChoice()}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputMonth" className="col-form-label">Month:</label>
                                        <select name="month" onChange={this.onChange} value={schoolData.month} className="form-control" >
                                            <option value="0">Select</option>
                                            {this.monthChoice()}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputE_Euro" className="col-form-label">Electricity Euro:</label>
                                        <input type="text" className="form-control" onChange={this.onChange} value={schoolData.elecEuro} name="elecEuro" placeholder="Electricity Euro" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputE_Kwh" className="col-form-label">Electricity kWH:</label>
                                        <input type="text" className="form-control" onChange={this.onChange} value={schoolData.elecKwh} name="elecKwh" placeholder="Electricity kWH" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputH_Euro" className="col-form-label">Heating Euro:</label>
                                        <input type="text" className="form-control" onChange={this.onChange} value={schoolData.heatEuro} name="heatEuro" placeholder="Heating Euro" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputH_Kwh" className="col-form-label">Heating kWH:</label>
                                        <input type="text" className="form-control" onChange={this.onChange} value={schoolData.heatKwh} name="heatKwh" placeholder="Heating kWH" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputW_Euro" className="col-form-label">Water Euro:</label>
                                        <input type="text" className="form-control" onChange={this.onChange} value={schoolData.waterEuro} name="waterEuro" placeholder="Water Euro" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputW_Litres" className="col-form-label" placeholder="Water Litres">Water Litres:</label>
                                        <input type="text" className="form-control" onChange={this.onChange} value={schoolData.waterLitres} name="waterLitres" placeholder="Water Litres" required />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-success">Save</button>&nbsp;&nbsp;
                                <Link to={`/add`} className="btn btn-outline-danger">Cancel</Link>
                            </form>
                        </WidgetComponent>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditDataPage;
