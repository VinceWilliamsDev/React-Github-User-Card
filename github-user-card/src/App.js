import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/VinceWilliamsDev')
      .then( res => {
        // console.log(res)
        this.setState({
          ...this.state,
          user: res.data
        })
        // console.log(this.state)
      })
      .catch( err => {
        console.log(err)
      })
    
    axios.get('https://api.github.com/users/VinceWilliamsDev/followers')
      .then( res => {
        // console.log(res.data)
        this.setState({
          ...this.state,
          followers: res.data
        })
        console.log(this.state)
      })
      .catch( err => {
        console.log(err)
      })
      
  }



  render() {
    return (
      <div className="App App-header">
        <h1>Vince Williams Github User Card</h1>
        <div className='cardContainer'>
          <div className='userContainer'>
            <div className='userCard'>
              <img src={this.state.user.avatar_url} alt={this.state.user.login} />
              <div className='userDetails'>
                <h2>{this.state.user.login}</h2>
                <h2>{this.state.user.name}</h2>
              </div>
            </div>
          </div>
          <div className='followerContainer'>
            {this.state.followers.map(follower => {
              return (
                <div key={follower.id} className='userCard'>
                  <img src={follower.avatar_url} alt={follower.login} />
                  <h2>{follower.login} </h2>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
