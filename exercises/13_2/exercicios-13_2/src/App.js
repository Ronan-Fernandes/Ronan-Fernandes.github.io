import React from 'react';
import './App.css';

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
  
  }

  fetchDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then((data) => this.setState({data: data}), (error) => console.log(error))
  }

  componentDidMount() {
    this.fetchDog();
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    if(nextState.data.message.includes('terrier')) return false;
    return true;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    localStorage.setItem('URL', this.state.data.message);
    const breed = this.state.data.message.split('/')[4];
    alert(breed);
  }

  render() {
    console.log(this.state.data.message)
    console.log('render')
    if(this.state.data === "") return <div>Loading...</div>
    return (
      <div className='App-header'>
        <p>Dog</p>
        <button onClick={this.fetchDog}>mais um dog</button>
        <div>
          <img src={this.state.data.message} alt="dog"/>
        </div>
      </div>
    );
  }
}

export default App;
