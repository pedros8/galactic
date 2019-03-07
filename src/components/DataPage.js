import React, { Component } from 'react'
import { Header, Image, List } from 'semantic-ui-react';
import { GetData } from '../api/GetData';
import '../css/DataPage.css';

export default class DataPage extends Component {
constructor(props){
  super(props);

  this.state= {
    username: [],
    isLoading: false,     
  }
}

  //get data from api and set into state 
componentDidMount() {
  this.setState({isLoading:true})
    GetData(this.state).then((result) => {
    
    this.setState({
      isLoading:false,
      username:result.data 
    })    
  })  
}

render() {
   
  //use query to get email data
  const params = new URLSearchParams(this.props.location.search);
  let email = params.get('email');

  const { username , isLoading } = this.state;
  
  //map to array and return data list
  const user = (username).map((user) => {    
    return (    
      <List.Item key={user.id} id="User-List">
          <Image avatar src={user.avatar} />
          <List.Content>
              <List.Header as='a'>{user.first_name + " " + user.last_name}</List.Header>
          </List.Content>
          <hr />
      </List.Item>    
    )
  }
 )
 
if (isLoading) { 
  return <h2> Welcome Dear '{email}' </h2>;
}

return (
  <div className="List">
    <Header as="h1" textAlign="center" id="Title">
      Galactic Travel 
    </Header>
    <div>
      {user}
    </div>
  </div>
)
}
}
