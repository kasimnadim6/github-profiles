import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import CardList from './components/card-list';

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profiles: [],
    }
  }

  addNewProfile = (profileData) => {
    // this.setState({
    //   profiles: [...this.state.profiles, profileData]
    // })
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }
}
