import axios from 'axios';

class SchoolService {

  // Send the SchoolName...
  sendSchoolName(data) {
    axios.post('http://localhost:3003/schoolname/add', {
      name: data
    })
      .then(res => this.setState({ names: res.data }))
      .catch(err => console.log(err))
  }

  // updateUser(data, id){
  //   axios.post('http://localhost:3003/user/edit'+id, {
  //     user: data
  //   })
  //   .then(res => this.setState({ items: res.data }))
  //   .catch(err => console.log(err))
  // }

  // deleteUser(id){
  //   axios.delete('http://localhost:3003/user/delete/'+id)
  //   .then().catch(err => console.log(err))
  // }




}

export default SchoolService;
