import React,{ Component } from 'react';
import { Button,Form,Grid,Header,Message,Segment } from 'semantic-ui-react';
import '../css/Login.css';
import { PostData } from '../api/PostData';
import { withRouter } from 'react-router';


export class Login extends Component {
  constructor(props) {
      super(props);

      this.state = {
          email:'',
          password:'',
          loading: false,
        
      }
  }

  //after button press , data send to api and set into state
  handleClick = () => {
  this.setState({loading:true},() => PostData(this.state).then((result) => {
      let responseJson = result;
      console.log(responseJson); 

      //after button press , login to new page
      this.props.history.push('/user?email=' + this.state['email']);      
    })
  )
  }
  
  handleChange = e => {
      //get current value from input and set into state
      this.setState({
        [e.target.name]: e.target.value
      });        
  }

  handleSubmit = e => {
        //prevent to behavior of submit  
        e.preventDefault();
  }  

  render(){    
    const { loading } = this.state;
      
    return(  
      <Grid centered columns={3}>
        <Grid.Column>
          <Header as="h2" textAlign="center" id="header">
            Sign In
          </Header>
        <Segment>
          
        {loading ? <Loading /> : 
          <Form size="large" onSubmit={this.handleSubmit} >
          
            <Form.Input
              fluid
              name="email"
              icon="user"
              iconPosition="left"
              placeholder="Email address"
              value={this.state.email}
              onChange={this.handleChange}
              id="text-field"
            />
          
            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="pass-field"
            />

            <Button type="button" color="green" fluid size="large" onClick={this.handleClick}>
              Login
            </Button>
            
          </Form>       
        }
        </Segment>
          
        <Message className="Message">
          <div className="ui checkbox">
              <input type="checkbox"/>
              <label>Remember me</label>
          </div>
          <a href="#">Forgot Password?</a>
        </Message>

        </Grid.Column>
      </Grid>
      )
    }
  }
//define loading spinner
const Loading = () => <div className="loading">
                        <i className="fa fa-spinner fa-spin" />
                      </div>
                    

export default withRouter(Login);