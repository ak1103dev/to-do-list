import React, { Component } from 'react'
import _ from 'lodash';

export default class Error extends Component {
  constructor() {
    super();
    this.state = {
      currText: '',
      list: [],
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

  render () {
    const { list, currText } = this.state;
    return (
      <div className="container">
        <h1>To Do List</h1>
        <input value={currText} onChange={(event) => this.setState({ currText: event.target.value })} />
        <button onClick={this.add}>Add</button>
        {list.map((item, i) =>
          <p key={i}>{item.text}</p>
        )}
        <style jsx>{`
          .container {
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}