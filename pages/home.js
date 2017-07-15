import React, { Component } from 'react'
import _ from 'lodash';
import request from 'superagent';
import config from '../config';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currText: '',
      list: [],
      checkList: [], // { text, status }
      showedStatus: 'unachieved',
    };
  }
  componentDidMount() {
    this.getList();
  }

  getList = () => {
    request(`${config.apiHost}/tasks`)
      .set('X-Access-Token', localStorage.getItem('accessToken'))
      .end((err, res) => {
        if (err) {
          console.error(err);
          return alert('Error !!!');
        }
        return this.setState({ list: res.body, currText: '', checkList: [] });
      });
  }

  add = () => {
    const { currText } = this.state;
    const list = _.cloneDeep(this.state.list);
    if (!_.isEmpty(currText)) {
      const data = { text: currText, status: 'unachieved' };
      list.push(data);
      request.post(`${config.apiHost}/tasks`)
        .send(data)
        .set('X-Access-Token', localStorage.getItem('accessToken'))
        .end((err, res) => {
          if (err) {
            console.error(err);
            return alert('Error !!!');
          }
          return this.getList();
        });
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
    const { list, currText, showedStatus } = this.state;
    // const { list } = this.props;
    console.log(this.state);
    return (
      <div className="container">
        <h1>To Do List</h1>
        <div className="input">
          <input value={currText} onChange={(event) => this.setState({ currText: event.target.value })} />
          <button onClick={this.add}>Add</button>
        </div>
        <h3>filter</h3>
        <div className="filter">
          <button onClick={() => this.setState({ showedStatus: 'unachieved' })}>unachieved</button>
          <button onClick={() => this.setState({ showedStatus: 'achieved' })}>achieved</button>
        </div>
        <div className="list">
          {
            list.filter((item) => item.status === showedStatus).length === 0 &&
            <div>=== no list ===</div>
          }
          {list.map((item, i) => {
            if (item.status === showedStatus) {
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
          .filter {
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

export default Home;