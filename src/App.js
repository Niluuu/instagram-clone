import React, { Component } from 'react'
import Appbar from './components/Appbar'
import  ContainerGrid  from './components/ContainerGrid'


export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: []
    };
  }

  componentDidMount = ()=> {
    const access_token = "5341013910.4d3a0b8.ba1bb1c0cfbf44cd8e1547e5d591e222"
    const url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + access_token
      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(jsonStr => {
        const user = jsonStr
        this.setState({ user })
        console.log("user", user);
      })
      .catch(error => {
        console.log("error") 
      })
  }

  render() {
    return (
      <div>
        <Appbar/>
        <ContainerGrid 
          user={this.state.user}
        />
      </div>
    )
  }
}

export default App

