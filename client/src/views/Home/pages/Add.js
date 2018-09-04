import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";
import SchoolService from '../../../services/school.service';
class AddPage extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.schoolService = new SchoolService();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.schoolService.sendSchoolName(this.state.value);
        this.props.history.push('/save');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">
                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <WidgetComponent header='Add new school' className='shadow-01 mb-4' excerpt='Please enter a new school name!'>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputCity" className="col-form-label">School Name:</label>
                                        <input type="text" className="form-control" id="schoolname" value={this.state.value} onChange={this.handleChange} placeholder="School Name" required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Add</button>
                            </WidgetComponent>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default AddPage;
