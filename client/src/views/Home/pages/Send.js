import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";

class SendPage extends Component {

    render() {
        return (
            <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">
                <div className="row">
                    <div className="col-lg-12 mb-6">
                        <WidgetComponent header='Send charts to email' className='shadow-01 mb-4'>
                            <form>
                                <div className="form-row">
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="School">School:</label>
                                        <select multiple className="form-control" id="exampleFormControlSelect2">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="year" className="col-form-label">Year:</label>
                                        <select id="inputState" className="form-control">
                                            <option>Select</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="month" className="col-form-label">Month:</label>
                                        <select id="inputState" className="form-control">
                                            <option>Select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="email" className="col-form-label">Email:</label>
                                        <input type="text" className="form-control" id="e_euro" placeholder="Please enter the email !" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Send</button>
                            </form>
                        </WidgetComponent>
                    </div>
                </div>
            </div >
        );
    }
}
export default SendPage;
