import axios from 'axios';

class userService {

  sendData(data) {
    axios.post('http://localhost:3003/user/register', {
      user: data
    })
    .then(res => this.setState({ users: res.data }))
    .catch(err => console.log(err))
  }

  updateUser(data, id){
    axios.post('http://localhost:3003/user/update'+id, {
      user: data
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }

  deleteUser(id){
    axios.get('http://localhost:3003/user/delete/'+id)
    .then().catch(err => console.log(err))
  }
}

export default userService;
