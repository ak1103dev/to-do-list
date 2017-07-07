import React, { Component } from 'react'
import _ from 'lodash';

export default class Error extends Component {
  constructor() {
    super();
    this.state = {
      currText: '',
      list: [],
      checkList: [], // { text, status }
    };
  }

  add = () => {
    const { currText } = this.state;
    const list = _.cloneDeep(this.state.list);
    if (!_.isEmpty(currText)) {
      list.push({ text: currText, status: 'unachieved' })
      this.setState({ list, currText: '' });
    }
  }
  achieve = () => {
    const { checkList } = this.state;
    const list = _.cloneDeep(this.state.list);
    checkList.map((index) =>
      list[index] = {
        text: list[index].text,
        status: 'achieved',
      }
    );
    this.setState({ list, checkList: [] });
  }
  delete = () => {
    const { checkList } = this.state;
    const list = _.cloneDeep(this.state.list);
    checkList.map((index) =>
      list[index] = {
        text: list[index].text,
        status: 'deleted',
      }
    );
    this.setState({ list, checkList: [] });
  }
  check = (event, i) => {
    const isCheck = event.target.checked;
    // const hasIndex = _.includes(this.state.checkList, i);
    if (isCheck) {
      this.setState({ checkList: [...this.state.checkList, i]});
    } else {
      const checkList = _.cloneDeep(this.state.checkList);
      _.remove(checkList, (item) => item === i);
      this.setState({ checkList });
    }
  }

  render () {
    const { list, currText } = this.state;
    console.log(this.state);
    return (
      <div className="container">
        <h1>To Do List</h1>
        <div className="input">
          <input value={currText} onChange={(event) => this.setState({ currText: event.target.value })} />
          <button onClick={this.add}>Add</button>
        </div>
        <div className="list">
          {
            list.length === 0 &&
            <div>=== no list ===</div>
          }
          {list.map((item, i) => {
            if (item.status === 'unachieved') {
              return (
                <div key={i} className="listCard">
                  <input type="checkbox" onChange={(event) => this.check(event, i)} /> {item.text}
                </div>
              );
            }
            return null;
          })}
        </div>
        <div>
          <button onClick={this.achieve}>Achieve</button>
          <button onClick={this.delete}>Delete</button>
        </div>
        <style jsx>{`
          .container {
            text-align: center;
            margin-left: 500px;
            margin-right: 500px;
          }
          @media(max-width: 767px) {
            .container {
              text-align: center;
              margin-left: 100px;
              margin-right: 100px;
            }
          }
          .input {
            margin-bottom: 10px;
          }
          .list {
            margin-bottom: 10px;
          }
          .listCard {
            border: 1px solid gray;
            padding: 5px;
          }
        `}</style>
      </div>
    );
  }
}