import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";
import { authHeader } from "../../../helpers/auth-header";

class SavePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            schoolname: [],
            schoolData: {
                _id: '',  year: '', week: '', month: '', elecEuro: '', elecKwh: '', heatEuro: '',
                heatKwh: '', waterEuro: '', waterLitres: '',
            },
            months: [
                { id: 1, month: 'Jan' }, { id: 2, month: 'Feb' }, { id: 3, month: 'Mar' }, { id: 4, month: 'Apr' },
                { id: 5, month: 'May' }, { id: 6, month: 'June' }, { id: 7, month: 'July' }, { id: 8, month: 'Aug' },
                { id: 9, month: 'Sep' }, { id: 10, month: 'Oct' }, { id: 11, month: 'Nob' }, { id: 12, month: 'Dec' }
            ],
            value: '0'
        };
        this.onSaveSubmit = this.onSaveSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
    }

    componentWillMount() {
        console.log("Yuri-------2");
        this.loadSchoolNames();
    }

    loadSchoolNames() {
        fetch('http://localhost:3003/schoolname/get', this.requestOptions)
            .then(response => response.json())
            .then(response => {
                this.setState({ schoolname: response.data })
            });
    }
    getYears() {
        var years = [];
        var i = 0;
        for (let year = 2010; year < 2030; year++) {
            years[i] = year;
            i++;
        }
        return years.map(function (year, i) {
            return <option value={year} key={i}>{year}</option>;
        })
    }
    getWeeks() {
        var weeks = [];
        var i = 0;
        for (let week = 1; week <= 54; week++) {
            weeks[i] = week;
            i++;
        }
        return weeks.map(function (week, i) {
            return <option value={week} key={i}>{week}</option>;
        })
    }
    onChange(event) {
        const schoolData = Object.assign({}, this.state.schoolData);
        schoolData[event.target.name] = event.target.value;
        this.setState({ schoolData: schoolData });
        this.setState({ value: event.target.value });
        console.log(this.state.schoolData);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    onSaveSubmit(e) {
        e.preventDefault();
        this.save(this.state.schoolData);
        console.log("Yuri---------5")
        console.log(this.state.schoolData)
    }
    save(data) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
        };
        return fetch('http://localhost:3003/schooldata/add-data', requestOptions)
            .then(response => {
                //this.props.history.push("/");
                window.location.reload();
            })
    }

    render() {
        const schoolData = this.state.schoolData;
        const schoolname = this.state.schoolname.map(function (value, i) {
            return <option value={value._id} id={value._id} key={i + 1} className="nav-item">
                {value.name}
            </option>
        })
        const month = this.state.months.map(function (item, i) {
            return <option value={item.id} value={item.id} key={item.id} className="nav-item">
                {item.month}
            </option>
        })

        return (
            <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">
                <div className="row">
                    <div className="col-lg-12 mb-3">
                        <WidgetComponent header='Save new data' className='shadow-01 mb-4' excerpt='Please enter the items correctly!'>
                            <form className="container" onSubmit={this.onSaveSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputState" className="col-form-label">School:</label>
                                        <select name="_id" onChange={this.onChange} className="form-control" required>
                                            <option value='0'>Select</option>
                                            {schoolname}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState" className="col-form-label">Year:</label>
                                        <select name="year" onChange={this.onChange} className="form-control">
                                            <option value="0">Select</option>
                                            {this.getYears()}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState" className="col-form-label">Week:</label>
                                        <select name="week" onChange={this.onChange} className="form-control">
                                            <option value="0">Select</option>
                                            {this.getWeeks()}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState" className="col-form-label">Month:</label>
                                        <select name="month"  onChange={this.onChange} className="form-control" >
                                            <option value="0">Select</option>
                                            {month}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity" className="col-form-label">Electricity Euro:</label>
                                        <input type="text" className="form-control" onChange={this.onChange} value={schoolData.elecEuro} name="elecEuro" placeholder="Electricity Euro" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity" className="col-form-label">Electricity kWH:</label>
                                        <input type="text" className="form-control" onChange={this.onChange} value={schoolData.elecKwh} name="elecKwh" placeholder="Electricity kWH" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity" className="col-form-label">Heating Euro:</label>
                                        <input type="text" className="form-control" onChange={this.onChange} value={schoolData.heatEuro} name="heatEuro" placeholder="Heating Euro" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity" className="col-form-label">Heating kWH:</label>
                                        <input type="text" className="form-control" onChange={this.onChange} value={schoolData.heatKwh} name="heatKwh" placeholder="Heating kWH" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity" className="col-form-label">Water Euro:</label>
                                        <input type="text" className="form-control" onChange={this.onChange} value={schoolData.waterEuro} name="waterEuro" placeholder="Water Euro" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity" className="col-form-label" placeholder="Water Litres">Water Litres:</label>
                                        <input type="text" className="form-control" onChange={this.onChange} value={schoolData.waterLitres} name="waterLitres" required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Save</button>
                            </form>
                        </WidgetComponent>
                    </div>
                </div>
            </div>
        );
    }
}
export default SavePage;
