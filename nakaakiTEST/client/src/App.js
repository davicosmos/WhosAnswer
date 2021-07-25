import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  //  クラス定義をする書き方
  constructor(props) {
    super(props);
    //  データを定義する
    this.state = {
      dbData: "取得中"
    }
    // this.handleClick = this.handleClick.bind(this);
  }
  //  メソッドはこんな風に定義して、↑で紐づけをする
  // handleClick() {
  //   console.log('Click happened');
  // }

  //画面が映った瞬間のイベント
  componentDidMount() {
    axios.get(`https://us-central1-whosanswer.cloudfunctions.net/app/jikken`)
      .then(res => {
        this.setState({
          dbData: res.data.kedamono
        })
      });
  }

  //画面はこんな風にJSXという記法で書いていく
  render() {
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          取得したデータ<br/>
          [{this.state.dbData}]
        </p>
      </header>
      </div>
    )
  }
}

export default App;
