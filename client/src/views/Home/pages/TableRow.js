import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../../services/userService';
import { authHeader } from "../../../helpers/auth-header";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.userService = new userService();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestOptions = {
      method: 'GET',
      headers: authHeader()
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.userService.deleteUser(this.props.obj._id);
    alert("Are you sure to delete it ?");   
   
  }

  delete(id) {
    fetch('http://localhost:3003/user/delete/' + id, { method: 'delete' }, this.requestOptions)
      .then(response => {
        // this.props.history.push("/users")
        window.location.reload();
      });
  }


  render() {
    return (
      <tr key={this.props.obj._id}>
        <td>
          {this.props.obj.username}
        </td>
        <td>
          {this.props.obj.email}
        </td>
        <td>
          <Link to={`/edit/${this.props.obj._id}`} className="btn btn-outline-success">Edit</Link>
        </td>
        <form onSubmit={this.handleSubmit}>
          <td>
            <button onClick={this.delete.bind(this, this.props.obj._id)} className="btn btn-outline-danger">Delete</button>
          </td>
        </form>
      </tr>

    );
  }
}

export default TableRow;
