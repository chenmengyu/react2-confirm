import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import './App.css';
import PopConfirm from './confirm.js'
import './confirm.css'

class App extends Component {

  render() {
    return (
      <div className="App">
      </div>
    );
  }

  async componentDidMount(){
    let res = PopConfirm({
      title: '删除',
      content: <p>确定要删除吗？</p>
    })
    // console.log(res)
    if (res) {
      console.log('是')
    } else {
      console.log('否')
    }
  }
  // componentDidMount(){
  //   PopConfirm({
  //     title: 'confirm title',
  //     content: <p>看我随手一打又是十五字</p>
  //   }).then(res => {
  //     console.log('挂载', res)
  //   })
  // }
}

export default App;
